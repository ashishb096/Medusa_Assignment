# terraform starting block defines required provider verison and source to download and minimum terraform version required.
terraform {
  required_providers {
    aws ={
      source = "hashicorp/aws"
      version = "~> 5.94.1"
    }
  }
  required_version = ">= 1.2.0"
}

# Defining CLoud Provider as AWS.
provider "aws" {
  region = "ap-south-1"
}

# AWS Networking
# Defining AWS VPC Resource
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
  tags = {
    Name = "medusa_vpc"
  }
}

# Defining AWS Subnets
resource "aws_subnet" "subnet_a" {
  vpc_id = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "ap-south-1a"
}
resource "aws_subnet" "subnet_b" {
  vpc_id = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "ap-south-1b"
}
# Create Internet Gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "medusa-igw"
  }
}

# Create Elastic IP for NAT Gateway
resource "aws_eip" "nat_eip" {
  vpc = true
}

# Create NAT Gateway in subnet_a (make sure this is public)
resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = aws_subnet.subnet_a.id

  tags = {
    Name = "medusa-nat"
  }
}

# Create a route table for public subnets
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "medusa-public-rt"
  }
}

resource "aws_route_table_association" "subnet_a_assoc" {
  subnet_id      = aws_subnet.subnet_a.id
  route_table_id = aws_route_table.public_rt.id
}

# Create a route table for private subnets
resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat.id
  }

  tags = {
    Name = "medusa-private-rt"
  }
}

resource "aws_route_table_association" "subnet_b_assoc" {
  subnet_id      = aws_subnet.subnet_b.id
  route_table_id = aws_route_table.private_rt.id
}

# AWS Security
# Defining AWS Security Group
resource "aws_security_group" "ecs_sg" {
  name = "ecs_sg"
  description = "Allow HTTP Traffic"
  vpc_id = aws_vpc.main.id

  ingress {
    from_port = 9000
    to_port = 9000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 5432
    to_port = 5432
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Creating Postgresql with persistent data using Amazon RDS

# Defining subnet to be used by database
resource "aws_db_subnet_group" "default" {
  name = "medusa-db-subnet-group"
  subnet_ids = [aws_subnet.subnet_a.id, aws_subnet.subnet_b.id,]

  tags = {
    Name = "Medusa DB Subnet Group"
  }
}

# Defining AWS DB Instance
resource "aws_db_instance" "medusa_postgres" {
  identifier = "medusa-db"
  engine = "postgres"
  instance_class = "db.t4g.micro"
  allocated_storage = 20
  storage_type = "gp2"
  db_name = "medusadb"
  username = "postgres"
  password = "Ashishb096"
  publicly_accessible = true
  skip_final_snapshot = true
  db_subnet_group_name = aws_db_subnet_group.default.name
  vpc_security_group_ids = [aws_security_group.ecs_sg.id]

  tags = {
    Name = "MedusaPostgres"
  }
}


# IAM Role definition

# Defining IAM ROLE for ECS Task Execution
resource "aws_iam_role" "ecs_task_execution" {
  name = "ecsTaskExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2008-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Service = "ecs-tasks.amazonaws.com"
      },
      Action = "sts:AssumeRole"
    }]
  })
}

# Defining IAM Policy for IAM Role
resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
  role       = aws_iam_role.ecs_task_execution.name
}



# Containerization using ECS (Elastic Container Service)

# Defining ECS Cluster name
resource "aws_ecs_cluster" "medusa_cluster" {
  name = "medusa_cluster"
}

# Defining AWS ECS Task Definition
resource "aws_ecs_task_definition" "medusa_task" {
  container_definitions = file("${path.module}/ecs-task-def.json")
  family                = "medusa-task"
  requires_compatibilities = ["FARGATE"]
  network_mode = "awsvpc"
  cpu = "256"
  memory = "512"
  execution_role_arn = aws_iam_role.ecs_task_execution.arn
}

# Defining ECS Task logging
resource "aws_cloudwatch_log_group" "ecs_logs" {
  name = "/ecs/medusa"
  retention_in_days = 7
}

# Defining ECS Service for running the ECS Task
resource "aws_ecs_service" "medusa_service" {
  name = "medusa-service"
  cluster = aws_ecs_cluster.medusa_cluster.id
  task_definition = aws_ecs_task_definition.medusa_task.arn
  launch_type = "FARGATE"
  desired_count = 1
  # Defining network configuration for ECS Service
  network_configuration {
    subnets = [aws_subnet.subnet_a.id,aws_subnet.subnet_b.id,]
    security_groups = [aws_security_group.ecs_sg.id]
    assign_public_ip = true
  }
}



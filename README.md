# 🛠️ Medusa Backend on AWS ECS Fargate with Terraform & GitHub Actions

This project demonstrates how to deploy a production-ready [Medusa.js](https://medusajs.com/) backend on **AWS ECS Fargate**, using **Terraform** for infrastructure provisioning and **GitHub Actions** for CI/CD.

## 📆 Tech Stack

- **Backend**: [Medusa.js](https://medusajs.com/) (Node.js headless commerce engine)
- **Infrastructure as Code**: Terraform
- **Containerization**: Docker
- **Cloud Provider**: AWS (ECS Fargate, RDS PostgreSQL, VPC, IAM)
- **CI/CD**: GitHub Actions

---

## 🚀 Features

- ✅ Automated infrastructure deployment using Terraform
- ✅ Secure PostgreSQL database on AWS RDS
- ✅ ECS Fargate hosting for scalable container deployment
- ✅ Public access via ECS task public IP
- ✅ GitHub Actions CD pipeline for image build & deployment
- ✅ Medusa production build process included

---

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions pipeline
├── terraform/             # All Terraform modules and config
├── medusa-backend/        # Medusa.js project source code
├── Server                 # medusa build
├── README.md              # You're here!
```

---

## 🧱 Infrastructure Overview

| Component       | Description                                     |
|----------------|-------------------------------------------------|
| **VPC**        | Custom VPC with public subnets and route tables |
| **ECS Fargate**| Serverless container hosting                    |
| **RDS PostgreSQL** | Managed DB for Medusa                     |
| **IAM Roles**  | Fine-grained permissions for ECS tasks          |
| **Security Groups** | Inbound rule for port `9000`              |
| **Public IP**  | Assigned to ECS task for external access        |

---

## ⚙️ How to Deploy

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/medusa-ecs-deploy.git
cd medusa-ecs-deploy
```

### 2. Set Up Terraform

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### 3. Configure Medusa

Make sure your `.env` file is set with the correct DB host, credentials, and production configs.

```env
DATABASE_URL=postgres://postgres:<password>@<rds-endpoint>:5432/medusadb
PORT=9000
HOST=0.0.0.0
NODE_ENV=production
```

### 4. Build and Push Docker Image

GitHub Actions will automatically build and push the Docker image to Docker Hub on commit to `main`.

```yaml
# .github/workflows/deploy.yml
- name: Build & Push Docker Image
  run: docker build -t ashishb096/medusa:latest .
```

> Ensure your Docker Hub credentials are set in GitHub Secrets.

---

## 🐳 Run Locally (Optional)

```bash
docker build -t medusa-local .
docker run -p 9000:9000 --env-file .env medusa-local
```

---

## ✅ To-Do / Improvements

- [ ] Add HTTPS with ACM + Load Balancer
- [ ] Integrate S3 for file storage
- [ ] Add monitoring with CloudWatch or Prometheus
- [ ] Terraform backend state with S3

---

## 👨‍💼 Author

**Ashish Bisht**  
💼 Infrastructure Support Engineer  
🌐 [Portfolio Website](https://portfoliowebsite-ebon-eta.vercel.app/)  
📍 Ghaziabad, UP  

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).


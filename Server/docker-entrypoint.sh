#!/bin/sh
set -e

echo "🔄 Running Medusa database migrations..."
npx medusa db:migrate

echo "🚀 Starting Medusa server..."

npx medusa start
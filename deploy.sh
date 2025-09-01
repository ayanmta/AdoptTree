#!/bin/bash

# Baghari Farm Deployment Script
# This script deploys the application using Docker and Nginx

set -e  # Exit on any error

echo "🚀 Starting Baghari Farm Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env.production exists
if [ ! -f .env.production ]; then
    print_warning ".env.production file not found. Creating from template..."
    cat > .env.production << EOF
# Production Environment Variables
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL=http://localhost
NEXT_TELEMETRY_DISABLED=1
EOF
    print_success "Created .env.production file"
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans

# Build the application
print_status "Building Docker images..."
docker-compose build --no-cache

# Start the services
print_status "Starting services..."
docker-compose up -d

# Wait for services to be healthy
print_status "Waiting for services to be healthy..."
sleep 30

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    print_success "All services are running!"
    
    # Show service status
    print_status "Service Status:"
    docker-compose ps
    
    # Show logs
    print_status "Recent logs:"
    docker-compose logs --tail=20
    
    print_success "🎉 Deployment completed successfully!"
    print_status "Your application is now running at: http://localhost"
    print_status "Health check: http://localhost/health"
    
else
    print_error "Some services failed to start. Check logs with: docker-compose logs"
    exit 1
fi

echo ""
print_status "Useful commands:"
echo "  View logs: docker-compose logs -f"
echo "  Stop services: docker-compose down"
echo "  Restart services: docker-compose restart"
echo "  Update application: ./deploy.sh"

# 🚀 Baghari Farm - Production Deployment Guide

This guide will walk you through deploying your Baghari Farm website to production using Docker and Nginx. Perfect for beginners!

## 📋 Prerequisites

Before you start, make sure you have:

1. **A Linux server** (Ubuntu 20.04+ recommended)
2. **Domain name** (optional but recommended)
3. **SSH access** to your server
4. **Basic command line knowledge**

## 🛠️ Step 1: Server Setup

### 1.1 Connect to Your Server
```bash
ssh username@your-server-ip
```

### 1.2 Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3 Install Docker
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Logout and login again for group changes to take effect
exit
# SSH back in
```

## 📁 Step 2: Deploy Your Application

### 2.1 Clone Your Repository
```bash
# Create a directory for your app
mkdir -p /opt/bagharifarm
cd /opt/bagharifarm

# Clone your repository
git clone https://github.com/yourusername/AdoptTree.git .
```

### 2.2 Set Up Environment Variables
```bash
# Create production environment file
cat > .env.production << EOF
# Production Environment Variables
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL=https://yourdomain.com
NEXT_TELEMETRY_DISABLED=1
EOF
```

### 2.3 Deploy with One Command
```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## 🌐 Step 3: Domain & SSL Setup (Optional but Recommended)

### 3.1 Point Domain to Your Server
1. Go to your domain registrar
2. Set A record: `yourdomain.com` → `your-server-ip`
3. Set A record: `www.yourdomain.com` → `your-server-ip`

### 3.2 Install SSL Certificate (Let's Encrypt)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo crontab -e
# Add this line: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 3.3 Update Nginx for SSL
```bash
# Update nginx.conf with SSL configuration
sudo nano nginx.conf
```

Add SSL configuration to your nginx.conf:
```nginx
# HTTPS server
server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # Rest of your configuration...
}
```

## 🔧 Step 4: Monitoring & Maintenance

### 4.1 Check Application Status
```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# Check health
curl http://localhost/health
```

### 4.2 Update Application
```bash
# Pull latest changes
git pull origin main

# Redeploy
./deploy.sh
```

### 4.3 Backup Strategy
```bash
# Create backup script
cat > backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/opt/backups/bagharifarm"

mkdir -p $BACKUP_DIR

# Backup application files
tar -czf $BACKUP_DIR/app_$DATE.tar.gz /opt/bagharifarm

# Backup database (if using)
# docker-compose exec app pg_dump -U username database > $BACKUP_DIR/db_$DATE.sql

echo "Backup completed: $BACKUP_DIR/app_$DATE.tar.gz"
EOF

chmod +x backup.sh
```

## 🚨 Troubleshooting

### Common Issues:

1. **Port 80/443 already in use**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo systemctl stop apache2  # if Apache is running
   ```

2. **Docker permission denied**
   ```bash
   sudo usermod -aG docker $USER
   # Logout and login again
   ```

3. **Application not starting**
   ```bash
   docker-compose logs app
   docker-compose logs nginx
   ```

4. **SSL certificate issues**
   ```bash
   sudo certbot certificates
   sudo certbot renew --dry-run
   ```

## 📊 Performance Monitoring

### 4.1 Basic Monitoring
```bash
# Monitor resource usage
docker stats

# Monitor logs
docker-compose logs -f --tail=100
```

### 4.2 Set up Monitoring (Optional)
```bash
# Install monitoring tools
sudo apt install htop iotop nethogs -y

# Monitor system resources
htop
```

## 🔒 Security Best Practices

1. **Firewall Setup**
   ```bash
   sudo ufw enable
   sudo ufw allow ssh
   sudo ufw allow 80
   sudo ufw allow 443
   ```

2. **Regular Updates**
   ```bash
   # Update system weekly
   sudo apt update && sudo apt upgrade -y
   
   # Update Docker images
   docker-compose pull
   docker-compose up -d
   ```

3. **Backup Strategy**
   ```bash
   # Set up automated backups
   crontab -e
   # Add: 0 2 * * * /opt/bagharifarm/backup.sh
   ```

## 📈 Scaling (Future)

When your site grows, consider:

1. **Load Balancer**: Use multiple Nginx instances
2. **CDN**: Cloudflare or AWS CloudFront
3. **Database**: Separate database server
4. **Monitoring**: Prometheus + Grafana
5. **CI/CD**: GitHub Actions for automated deployment

## 🎯 Quick Commands Reference

```bash
# Start application
./deploy.sh

# Stop application
docker-compose down

# View logs
docker-compose logs -f

# Restart application
docker-compose restart

# Update application
git pull && ./deploy.sh

# Check status
docker-compose ps

# Backup
./backup.sh
```

## 🆘 Support

If you encounter issues:

1. Check logs: `docker-compose logs`
2. Verify configuration: `docker-compose config`
3. Check system resources: `htop`
4. Verify network: `curl localhost/health`

---

**🎉 Congratulations!** Your Baghari Farm website is now running in production with Docker and Nginx!

Your site will be available at:
- **HTTP**: http://your-server-ip
- **HTTPS**: https://yourdomain.com (after SSL setup)

**Next Steps:**
1. Set up your domain and SSL
2. Configure monitoring
3. Set up automated backups
4. Consider a CDN for better performance

Happy farming! 🏔️🍎

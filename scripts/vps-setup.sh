#!/bin/bash
# Run this ONCE on your Hostinger VPS to prepare it for deployments
# ssh root@YOUR_VPS_IP then paste this entire script

set -e
echo "🚀 Setting up Greenscapes VA server..."

# 1. Update system
apt update && apt upgrade -y

# 2. Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 3. Install PM2 globally
npm install -g pm2

# 4. Install Nginx
apt install -y nginx

# 5. Install Git
apt install -y git

# 6. Create app directory
mkdir -p /var/www/greenscapes-va

# 7. Configure PM2 to start on boot
pm2 startup systemd -u root --hp /root
systemctl enable pm2-root

# 8. Create Nginx config
cat > /etc/nginx/sites-available/greenscapes-va << 'EOF'
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_VPS_IP;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# 9. Enable Nginx site
ln -sf /etc/nginx/sites-available/greenscapes-va /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
systemctl enable nginx

echo ""
echo "✅ Server setup complete!"
echo "Next: Push to GitHub and the Actions workflow will deploy automatically."
echo ""
echo "To add SSL (HTTPS) after your domain is pointed to this VPS:"
echo "  apt install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d yourdomain.com"

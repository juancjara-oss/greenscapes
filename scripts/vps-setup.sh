#!/bin/bash
# Run this ONCE on your Hostinger VPS to prepare it for static deployments
# ssh root@YOUR_VPS_IP then paste this entire script

set -e
echo "🚀 Setting up Greenscapes VA server..."

# 1. Update system
apt update && apt upgrade -y

# 2. Install Nginx
apt install -y nginx

# 3. Create web root directory
mkdir -p /var/www/greenscapes-va

# 4. Configure Nginx for static files
cat > /etc/nginx/sites-available/greenscapes-va << 'EOF'
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_VPS_IP;   # <-- replace this

    root /var/www/greenscapes-va;
    index index.html;

    # Handle Next.js trailing slash static routes
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Cache static assets aggressively
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 256;
}
EOF

# 5. Enable site and remove default
ln -sf /etc/nginx/sites-available/greenscapes-va /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# 6. Test and restart Nginx
nginx -t && systemctl restart nginx
systemctl enable nginx

echo ""
echo "✅ Server ready! No Node.js or PM2 needed — pure static files."
echo ""
echo "Add these 3 secrets to GitHub → Settings → Secrets → Actions:"
echo "  VPS_HOST     → your VPS IP address"
echo "  VPS_USER     → root (or your SSH username)"
echo "  VPS_SSH_KEY  → your private SSH key (see below)"
echo ""
echo "To generate an SSH key pair for GitHub Actions:"
echo "  ssh-keygen -t ed25519 -C 'github-actions' -f ~/.ssh/github_actions"
echo "  cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys"
echo "  cat ~/.ssh/github_actions   ← paste this as VPS_SSH_KEY in GitHub"
echo ""
echo "To add SSL/HTTPS after your domain points here:"
echo "  apt install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d yourdomain.com"

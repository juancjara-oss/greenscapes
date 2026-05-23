# Configuración del VPS — Contabo

## Datos del servidor

| Campo | Valor |
|-------|-------|
| **Provider** | Contabo |
| **IP** | 89.116.27.241 |
| **Puerto SSH** | 22 |
| **Usuario** | root |
| **OS** | Ubuntu 22.04 LTS (recomendado) |
| **SSH Key** | `~/.ssh/greenscapes_contabo` |

---

## 1. SSH Key (autenticación sin password)

### Generada en la máquina local (Windows)
```
Archivo privado:  C:\Users\juanc\.ssh\greenscapes_contabo
Archivo público:  C:\Users\juanc\.ssh\greenscapes_contabo.pub
```

### Agregar la clave pública al VPS
```bash
# Primera conexión (con password)
ssh root@89.116.27.241

# En el VPS, agregar la clave pública
mkdir -p ~/.ssh
echo "PEGAR_AQUI_EL_CONTENIDO_DE_greenscapes_contabo.pub" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
exit

# Verificar que funciona sin password
ssh -i ~/.ssh/greenscapes_contabo root@89.116.27.241
```

---

## 2. Setup inicial del servidor (ejecutar una sola vez)

```bash
# Conectarse al VPS
ssh -i ~/.ssh/greenscapes_contabo root@89.116.27.241

# Actualizar sistema
apt update && apt upgrade -y

# Instalar Nginx
apt install -y nginx

# Crear directorio web
mkdir -p /var/www/greenscapes-va

# Configurar Nginx
cat > /etc/nginx/sites-available/greenscapes-va << 'EOF'
server {
    listen 80;
    server_name 89.116.27.241;   # reemplazar con dominio cuando esté listo

    root /var/www/greenscapes-va;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript image/svg+xml;
}
EOF

# Activar sitio
ln -sf /etc/nginx/sites-available/greenscapes-va /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
systemctl enable nginx
```

---

## 3. SSL con dominio personalizado

```bash
# Solo después de apuntar el dominio al VPS
apt install -y certbot python3-certbot-nginx
certbot --nginx -d tudominio.com -d www.tudominio.com
```

---

## 4. GitHub Actions Secrets

Agregar en: https://github.com/juancjara-oss/greenscapes/settings/secrets/actions

| Secret | Valor |
|--------|-------|
| `VPS_HOST` | `89.116.27.241` |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | Contenido completo de `~/.ssh/greenscapes_contabo` |

---

## Estado de configuración

- [x] VPS creado en Contabo (89.116.27.241)
- [x] SSH key inyectada al VPS (greenscapes_contabo)
- [x] Nginx instalado y configurado
- [x] Primer deploy manual exitoso — sitio live en http://89.116.27.241
- [ ] GitHub Secrets configurados (VPS_HOST, VPS_USER, VPS_SSH_KEY)
- [ ] Deploy automático via GitHub Actions verificado
- [ ] Dominio apuntado al VPS
- [ ] SSL/HTTPS configurado con Certbot

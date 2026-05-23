# Guía de Deployment — Greenscapes VA

## Flujo normal (hacer cambios al sitio)

```bash
# 1. Editar archivos en el proyecto
# 2. Guardar cambios
cd C:\Users\juanc\greenscapes-va

git add .
git commit -m "descripción del cambio"
git push
# ↑ Esto dispara automáticamente el deploy a Vercel y al VPS
```

---

## Environments

| Environment | Cómo acceder | URL |
|-------------|-------------|-----|
| **Local (dev)** | `npm run dev` | http://localhost:3001 |
| **Producción Vercel** | `git push` automático | https://greenscapes-va.vercel.app |
| **Producción Contabo** | `git push` via Actions | http://89.116.27.241 |

---

## Build estático

```bash
npm run build
# Genera carpeta /out con HTML/CSS/JS puro
# Esta carpeta se sube al VPS via rsync
```

---

## Deploy manual al VPS (emergencia)

```bash
# Construir
npm run build

# Subir archivos manualmente
rsync -avzr --delete \
  -e "ssh -i ~/.ssh/greenscapes_contabo" \
  out/ \
  root@89.116.27.241:/var/www/greenscapes-va/

# Recargar Nginx
ssh -i ~/.ssh/greenscapes_contabo root@89.116.27.241 "systemctl reload nginx"
```

---

## Comandos útiles

```bash
# Ver status del sitio en el VPS
ssh -i ~/.ssh/greenscapes_contabo root@89.116.27.241 "systemctl status nginx"

# Ver logs de Nginx
ssh -i ~/.ssh/greenscapes_contabo root@89.116.27.241 "tail -f /var/log/nginx/error.log"

# Conectarse al VPS
ssh -i ~/.ssh/greenscapes_contabo root@89.116.27.241
```

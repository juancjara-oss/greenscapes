# Infraestructura — Greenscapes VA

## Diagrama general

```
Developer (local)
    │
    └── git push ──▶ GitHub (juancjara-oss/greenscapes)
                          │
                          ├──▶ Vercel (auto-deploy)
                          │       URL: greenscapes-va.vercel.app
                          │       Tipo: Static CDN global
                          │
                          └──▶ GitHub Actions ──▶ Contabo VPS
                                                    IP: 89.116.27.241
                                                    Tipo: Static via Nginx
```

---

## Hosting

### Vercel (Producción actual)
- **URL:** https://greenscapes-va.vercel.app
- **Tipo:** Static Export — CDN global automático
- **Deploy:** Automático en cada `git push` a `main`
- **SSL:** Automático
- **Costo:** Free tier

### Contabo VPS (Producción definitiva)
- **IP:** 89.116.27.241
- **Provider:** Contabo
- **OS:** Ubuntu (a instalar)
- **Web server:** Nginx
- **Deploy:** GitHub Actions → rsync → `/var/www/greenscapes-va/`
- **SSL:** Let's Encrypt (Certbot)
- **Estado:** ⚠️ En configuración

---

## Repositorio

- **GitHub:** https://github.com/juancjara-oss/greenscapes
- **Branch principal:** `main`
- **CI/CD:** `.github/workflows/deploy.yml`

---

## DNS / Dominio

| Estado | Detalle |
|--------|---------|
| ⚠️ Pendiente | No hay dominio personalizado configurado aún |
| Acción | Apuntar dominio a IP `89.116.27.241` (registro A) |

---

## GitHub Actions Secrets requeridos

| Secret | Valor | Estado |
|--------|-------|--------|
| `VPS_HOST` | `89.116.27.241` | ⚠️ Pendiente |
| `VPS_USER` | `root` | ⚠️ Pendiente |
| `VPS_SSH_KEY` | Contenido de `~/.ssh/greenscapes_contabo` | ⚠️ Pendiente |

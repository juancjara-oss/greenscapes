# Guía de Deployment — Greenscapes VA

El deploy **no** se dispara con `git push`. GitHub es respaldo del código; el
sitio se publica en Hostinger con la herramienta MCP `hosting_deployStaticWebsite`.

## Flujo normal (hacer cambios al sitio)

```bash
cd ~/greenscapes-va          # en la Mac mini (antes: C:\Users\juanc\greenscapes-va)

# 1. Editar archivos
# 2. Construir
npm run build                # genera /out

# 3. Publicar: pedirle a Claude que suba /out a Hostinger
#    (dominio greenscapesva.com, herramienta hosting_deployStaticWebsite)

# 4. Respaldar el código
git add .
git commit -m "descripción del cambio"
git push
```

---

## Environments

| Environment | Cómo acceder | URL |
|-------------|-------------|-----|
| **Local (dev)** | `npm run dev` | http://localhost:3000 |
| **Producción** | deploy a Hostinger | https://greenscapesva.com |

---

## Build estático

```bash
npm run build
# Genera /out con HTML/CSS/JS puro.
# El script scripts/update-sw-version.js estampa la versión del service worker
# antes del build, para invalidar cachés viejos en los navegadores.
```

---

## Reglas del deploy a Hostinger

- **Se sube TODO `out/`.** El deploy reemplaza el sitio completo: si se sube un
  subconjunto, lo que falte desaparece del sitio en vivo.
- Después de publicar, verificar la página en el navegador con recarga dura
  (Cmd+Shift+R) — el service worker cachea de forma agresiva.
- `public/proposal/` está en `.gitignore` porque **el repo es público** y las
  propuestas llevan nombre de cliente y precios. Sí se publica en el sitio, pero
  nunca se commitea.

---

## Historia: Contabo VPS (retirado)

Este documento describía un deploy por `rsync` + Nginx a un VPS de Contabo, con
GitHub Actions y Vercel en el camino. Nada de eso está en uso: el contrato de
Contabo se canceló en agosto de 2026 y la publicación pasó a Hostinger. Si
encuentras una IP, una llave SSH `greenscapes_contabo` o comandos de `systemctl
reload nginx` en documentación vieja, están obsoletos.

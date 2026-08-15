# Infraestructura — Greenscapes VA

## Diagrama general

```
Developer (local)
    │
    ├── npm run build ──▶ /out ──▶ Hostinger (hosting_deployStaticWebsite)
    │                                  greenscapesva.com  ← producción
    │
    └── git push ──────▶ GitHub (juancjara-oss/greenscapes)
                             Respaldo del código. NO dispara deploys.
```

---

## Hosting

### Hostinger (producción)
- **Dominio:** https://greenscapesva.com
- **Tipo:** Export estático de Next.js servido como sitio estático
- **Web root:** `/home/<usuario>/domains/greenscapesva.com/public_html`
- **Deploy:** herramienta MCP `hosting_deployStaticWebsite`, ejecutada por Claude
- **SSL:** administrado por Hostinger, renovación automática

El deploy **reemplaza el sitio completo**: se sube todo el contenido de `out/`,
nunca archivos sueltos, o lo que falte desaparece del sitio.

### Historia: Contabo VPS (retirado)
El sitio se planeó originalmente sobre un VPS de Contabo con Nginx, GitHub
Actions y rsync. Nunca llegó a ser el canal real de publicación y **el contrato
se canceló en agosto de 2026.** Ninguna IP de ese servidor sigue en uso; si
aparece en documentación o historial de git, está obsoleta. Vercel también se
evaluó en su momento y tampoco se usa.

---

## Repositorio

- **GitHub:** https://github.com/juancjara-oss/greenscapes — **PÚBLICO**
- **Branch principal:** `main`
- **Rol:** respaldo del código, no canal de deploy

> Por ser público, `public/proposal/` está en `.gitignore`: las propuestas
> llevan nombre de cliente y precios. Nunca commitear credenciales ni archivos
> `.env` aquí.

---

## DNS / Dominio

| Campo | Valor |
|-------|-------|
| Dominio | `greenscapesva.com` (registrado y activo) |
| Apunta a | Hostinger |
| `www` | CDN de Hostinger (`*.cdn.hstgr.net`) |

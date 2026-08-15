# Greenscapes VA — Website

Sitio web oficial de **Greenscapes VA**, empresa de lawn care y landscaping en el Norte de Virginia.

- **Live:** [https://greenscapesva.com](https://greenscapesva.com)
- **Repo:** [github.com/juancjara-oss/greenscapes](https://github.com/juancjara-oss/greenscapes)

---

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14 (App Router, static export) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Fuente | Poppins (Google Fonts via next/font) |
| Hosting | Hostinger — hosting estático |
| SSL | Hostinger (renovación automática) |
| CI/CD | Deploy asistido por Claude (`hosting_deployStaticWebsite`); GitHub queda como respaldo |
| Caché | Service Worker con versioning automático |

---

## Correr en local

```bash
npm install
npm run dev
# Abre http://localhost:3000
```

## Build de producción

```bash
npm run build   # versiona el SW y genera /out
```

> El script `scripts/update-sw-version.js` corre automáticamente antes del build
> y estampa un timestamp en `public/sw.js` para limpiar cachés viejos en los navegadores.

---

## Estrategia de ramas (Branching Strategy)

### Regla principal
> **`main` es solo producción.** Nunca se trabaja directamente en `main`.

### Flujo de trabajo

```
main (producción)
 └── 202605231714_branching-strategy   ← ejemplo de rama de trabajo
```

1. **Crear rama** antes de cualquier cambio:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b "YYYYMMDDHHmm_nombre-descriptivo"
   ```

2. **Trabajar y hacer commits** en la nueva rama normalmente.

3. **Verificar** que todo funciona (deploy manual o preview).

4. **Fusionar a main** cuando esté aprobado:
   ```bash
   git checkout main
   git merge "202605231714_nombre-del-branch"
   git push origin main
   ```

5. **Borrar la rama** después de fusionar:
   ```bash
   git branch -d "202605231714_nombre-del-branch"
   git push origin --delete "202605231714_nombre-del-branch"
   ```

### Nomenclatura de ramas

```
YYYYMMDDHHmm_nombre-descriptivo
```

| Parte | Descripción | Ejemplo |
|-------|-------------|---------|
| `YYYY` | Año | `2026` |
| `MM` | Mes | `05` |
| `DD` | Día | `23` |
| `HH` | Hora (24h) | `17` |
| `mm` | Minuto | `14` |
| `nombre` | Qué hace el branch | `branching-strategy` |

**Ejemplo completo:** `202605231714_branching-strategy`

### Historial de ramas

| Rama | Fecha | Descripción | Estado |
|------|-------|-------------|--------|
| `202605231714_branching-strategy` | 2026-05-23 17:14 | Establece estrategia de ramas y reescribe README | Abierta |

---

## Infraestructura

| Campo | Valor |
|-------|-------|
| Hosting | Hostinger |
| Dominio | `greenscapesva.com` |
| Web root | `/home/<usuario>/domains/greenscapesva.com/public_html` |
| Deploy | Herramienta MCP de Hostinger: `hosting_deployStaticWebsite` |
| Repo | Respaldo del código, no es el canal de deploy |

> El sitio vivió en un VPS de Contabo hasta agosto de 2026. Ese servidor ya no se
> usa y el contrato está cancelado — si encuentras referencias a una IP, Nginx o
> `rsync` en documentación vieja, están obsoletas.

---

## Deploy

```bash
npm run build   # genera /out
```

Luego se publica el contenido de `out/` en Hostinger con
`hosting_deployStaticWebsite` (dominio `greenscapesva.com`). El deploy reemplaza
el sitio completo, así que se sube todo `out/`, nunca archivos sueltos.

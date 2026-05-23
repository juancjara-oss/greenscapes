# Tech Stack — Greenscapes VA

## Frontend

| Tecnología | Versión | Rol | Por qué |
|------------|---------|-----|---------|
| **Next.js** | 14 | Framework principal | App Router, SSG, optimizaciones automáticas |
| **React** | 18 | UI library | Componentes, estado, hooks |
| **TypeScript** | 5 | Lenguaje | Tipado estático, menos bugs en runtime |
| **Tailwind CSS** | 3 | Estilos | Utility-first, sin CSS files, tree-shaking |
| **Framer Motion** | 11 | Animaciones | API declarativa, scroll-triggered, spring physics |
| **Poppins** | — | Tipografía | Google Font via next/font (zero layout shift) |

## Build

| Aspecto | Detalle |
|---------|---------|
| **Output** | Static Export (`output: 'export'`) |
| **Carpeta generada** | `/out` |
| **Node.js en servidor** | ❌ No requerido |
| **Tamaño página principal** | ~147 KB first load JS |
| **Páginas estáticas** | 5 (SSG pre-rendered) |

## DevOps / CI-CD

| Herramienta | Rol |
|-------------|-----|
| **GitHub** | Repositorio de código fuente |
| **GitHub Actions** | Pipeline CI/CD automático |
| **Vercel** | Hosting CDN (producción actual) |
| **Contabo VPS** | Hosting VPS dedicado (producción definitiva) |
| **Nginx** | Web server en el VPS |
| **rsync** | Sincronización de archivos al VPS |
| **Let's Encrypt** | SSL gratuito (a configurar) |

## Estructura de archivos clave

```
greenscapes-va/
├── app/
│   ├── layout.tsx          # Root layout, fuente Poppins, metadata SEO
│   ├── page.tsx            # Composición de todas las secciones
│   └── globals.css         # Tailwind + utilidades neon glow
├── components/
│   ├── Navbar.tsx          # Nav sticky + hamburger mobile
│   ├── Hero.tsx            # Hero cinematográfico full-screen
│   ├── Stats.tsx           # Contadores animados con useInView
│   ├── Services.tsx        # Grid 3x2 glassmorphism cards
│   ├── PortfolioVideo.tsx  # Split layout + YouTube embed
│   ├── BeforeAfter.tsx     # Slider drag interactivo
│   ├── About.tsx           # Sección cinematic con value props
│   ├── Testimonials.tsx    # Marquee auto-scroll
│   ├── ContactStrip.tsx    # CTA phone + WhatsApp
│   ├── Footer.tsx          # Footer completo
│   └── WhatsAppButton.tsx  # Botón flotante pulsante
├── docs/                   # ← Esta carpeta (documentación técnica)
├── scripts/
│   └── vps-setup.sh        # Script de setup del VPS
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD
├── public/
│   └── logo.png            # ⚠️ Pendiente: subir logo real
├── .env                    # Variables locales (NO en git)
├── .env.example            # Plantilla de variables (SÍ en git)
├── next.config.mjs         # output: export, trailingSlash
└── tailwind.config.ts      # Colores brand + font Poppins
```

# Greenscapes VA — Mapa de Componentes

> Referencia visual de la estructura del sitio: jerarquía, IDs actuales, clases clave,
> y los **nuevos IDs propuestos** para comunicación eficiente.

| Leyenda | Significado |
|---------|-------------|
| ✅ **Aplicado** | ID ya existe en el código |
| 🔲 **Propuesto** | ID definido, pendiente de aplicar en código |

---

## Árbol general de la página

```
<html>
 └── <body>  bg-[#050e07] font-poppins
      ├── <main>                                      ← page.tsx
      │    ├── <Navbar>       fixed · z-40
      │    ├── <Hero>         min-h-screen
      │    ├── <Stats>        py-14
      │    ├── <Services>     id="services"
      │    ├── <PortfolioVideo> id="portfolio"
      │    ├── <BeforeAfter>  py-24
      │    ├── <About>        id="about"
      │    ├── <Testimonials> py-24
      │    ├── <ContactStrip> id="contact"
      │    └── <Footer>
      │
      ├── <WhatsAppButton>    fixed · bottom-6 · right-6 · z-50
      └── <ServiceWorkerRegistration>  (invisible)
```

---

## Componentes en detalle

---

### 1 · NAVBAR
**Archivo:** `components/Navbar.tsx`

```
<nav>  fixed top-0 · z-40 · transition fondo al scroll
 ├── <div>  max-w-7xl · mx-auto · px-4..lg:px-8
 │    └── <div>  flex · items-center · justify-between · h-20
 │         ├── <Link href="/">             ← Logo
 │         │    └── <img src="/logo.png">  h-14
 │         │
 │         ├── <div>  hidden md:flex       ← Links escritorio
 │         │    ├── <Link href="#services">
 │         │    ├── <Link href="#portfolio">
 │         │    ├── <Link href="#about">
 │         │    ├── <Link href="#contact">
 │         │    └── <a href="tel:+15407984479">  bg-[#39ff14] · rounded-full
 │         │
 │         └── <button>  md:hidden         ← Hamburger mobile
 │              └── <div>  w-6 flex-col    ← 3 spans animados
 │
 └── <div>  md:hidden (AnimatePresence)    ← Menú mobile
      └── <div>  px-6 py-6 flex-col
           ├── Links (×4)
           └── <a href="tel:">  bg-[#39ff14] · rounded-full
```

| Elemento | ID actual | Clase clave |
|----------|-----------|-------------|
| `<nav>` | — | `fixed top-0 left-0 right-0 z-40` |
| Logo img | — | `h-14 w-auto` |
| Links desktop | — | `hidden md:flex` |
| Botón teléfono | — | `bg-[#39ff14] rounded-full` |
| Hamburger | — | `md:hidden` |
| Menú mobile | — | `bg-[#050e07]/98 backdrop-blur-md` |

**IDs propuestos:**
```
id="gs-nav"                ← <nav>
id="gs-nav-logo"           ← <img> del logo
id="gs-nav-links"          ← <div> links desktop
id="gs-nav-cta-phone"      ← <a> teléfono desktop
id="gs-nav-hamburger"      ← <button> hamburger
id="gs-nav-mobile-menu"    ← <div> menú desplegable mobile
```

---

### 2 · HERO
**Archivo:** `components/Hero.tsx`

```
<section>  min-h-screen · flex items-center · overflow-hidden
 ├── <img>          fondo Unsplash · absolute · inset-0 · object-cover
 ├── <div>          overlay gradiente
 ├── <div>          overlay ruido (noise texture)
 ├── <div>          línea neon verde izquierda
 │
 ├── <div>  relative z-10 · max-w-6xl · text-center · pt-24   ← Contenido principal
 │    ├── <div>     badge "Northern Virginia's #1 Choice"
 │    ├── <h1>      "We Don't Just Cut Grass. We Craft Landscapes."
 │    ├── <p>       subtítulo naranja
 │    └── <div>  flex · gap-4                                  ← CTA buttons
 │         ├── <a href="#portfolio">  "View Our Work"   bg-[#39ff14]
 │         └── <a href="#contact">   "Get Free Quote"  border-[#f97316]
 │
 └── <div>  absolute bottom-8                                  ← Scroll indicator
      ├── <span>  "Scroll"
      └── <div>   cápsula animada
```

| Elemento | ID actual | Clase clave |
|----------|-----------|-------------|
| `<section>` | — | `min-h-screen flex items-center` |
| Imagen fondo | — | `absolute inset-0 object-cover` |
| Contenedor texto | — | `relative z-10 max-w-6xl text-center` |
| `<h1>` | — | `text-5xl..text-8xl font-black` |
| CTA "View Our Work" | — | `bg-[#39ff14] rounded-full` |
| CTA "Get Free Quote" | — | `border-[#f97316] rounded-full` |
| Scroll indicator | — | `absolute bottom-8` |

**IDs propuestos:**
```
id="gs-hero"               ← <section>
id="gs-hero-bg"            ← <img> fondo
id="gs-hero-content"       ← <div> contenedor texto
id="gs-hero-badge"         ← <div> badge "#1 Choice"
id="gs-hero-title"         ← <h1>
id="gs-hero-subtitle"      ← <p> subtítulo
id="gs-hero-cta-work"      ← <a> "View Our Work"
id="gs-hero-cta-quote"     ← <a> "Get Free Quote"
id="gs-hero-scroll"        ← <div> scroll indicator
```

---

### 3 · STATS
**Archivo:** `components/Stats.tsx`

```
<section>  bg-[#0d3b1e] · py-14 · border-y border-[#39ff14]/15
 └── <div>  max-w-7xl
      └── <div>  grid grid-cols-2 lg:grid-cols-4    ← Grid 4 stats
           ├── <div>  text-center    ← 500+ Projects
           ├── <div>  text-center    ← 12+ Years
           ├── <div>  text-center    ← 98% Retention
           └── <div>  text-center    ← 5★ Rating
                ├── <Counter>  (número animado)
                └── <p>        label
```

**IDs propuestos:**
```
id="gs-stats"              ← <section>
id="gs-stats-grid"         ← <div> grid
id="gs-stat-projects"      ← item 500+
id="gs-stat-years"         ← item 12+
id="gs-stat-retention"     ← item 98%
id="gs-stat-rating"        ← item 5★
```

---

### 4 · SERVICES
**Archivo:** `components/Services.tsx`

```
<section id="services">  bg-[#050e07] · py-24
 └── <div>  max-w-7xl
      ├── <div>  text-center mb-16              ← Header sección
      │    ├── <span>  "What We Do"  text-[#f97316]
      │    ├── <h2>    "Our Services"
      │    └── <div>   línea neon bajo título
      │
      └── <div>  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ← Grid 6 cards
           └── <div>  (×6 cards)  rounded-2xl · h-72 · group
                ├── <img id="gs-service-[nombre]-img">   ✅ fondo servicio
                ├── <div>         overlay gradiente base
                ├── <div>         overlay glassmorphism (hover)
                ├── <div>         badge "Learn More →" (hover)
                └── <div>  absolute bottom-0    ← Texto card
                     ├── <h3>   nombre servicio
                     └── <p>    descripción (visible en hover)
```

| Elemento | ID actual | Estado |
|----------|-----------|--------|
| `<section>` | `services` (nativo) | ✅ |
| `<img>` Lawn Mowing | `gs-service-mowing-img` | ✅ |
| `<img>` Hedge & Shrub | `gs-service-hedges-img` | ✅ |
| `<img>` Landscape Design | `gs-service-design-img` | ✅ |
| `<img>` Irrigation | `gs-service-irrigation-img` | ✅ |
| `<img>` Seasonal Cleanup | `gs-service-cleanup-img` | ✅ |
| `<img>` Hardscaping | `gs-service-hardscaping-img` | ✅ |
| `<div>` header sección | — | 🔲 |
| `<div>` grid | — | 🔲 |
| cards `<div>` (×6) | — | 🔲 |

**IDs aplicados ✅**
```
id="gs-service-mowing-img"      ← <img> Lawn Mowing & Edging
id="gs-service-hedges-img"      ← <img> Hedge & Shrub Trimming
id="gs-service-design-img"      ← <img> Landscape Design
id="gs-service-irrigation-img"  ← <img> Irrigation Systems
id="gs-service-cleanup-img"     ← <img> Seasonal Cleanup
id="gs-service-hardscaping-img" ← <img> Hardscaping & Patios
```

**IDs propuestos 🔲**
```
id="gs-services"               ← <section>
id="gs-services-header"        ← <div> encabezado
id="gs-services-grid"          ← <div> grid
id="gs-service-mowing"         ← <div> card Lawn Mowing
id="gs-service-hedges"         ← <div> card Hedge Trimming
id="gs-service-design"         ← <div> card Landscape Design
id="gs-service-irrigation"     ← <div> card Irrigation
id="gs-service-cleanup"        ← <div> card Seasonal Cleanup
id="gs-service-hardscaping"    ← <div> card Hardscaping
```

---

### 5 · PORTFOLIO VIDEO
**Archivo:** `components/PortfolioVideo.tsx`

```
<section id="portfolio">  bg-[#0d3b1e] · py-24
 └── <div>  max-w-7xl
      ├── <div>  text-center mb-16              ← Header sección
      │    ├── <span>  "Our Work"
      │    └── <h2>    "Featured Projects"
      │
      └── <div>  grid lg:grid-cols-2            ← Columnas
           ├── <div>  relative pl-5             ← Col izquierda: Video
           │    ├── <div>  línea neon vertical
           │    └── <div>  rounded-2xl          ← Contenedor video
           │         └── <iframe> YouTube embed
           │
           └── <div>                            ← Col derecha: Texto
                ├── <h3>   "Transforming Northern Virginia…"
                ├── <p>    descripción
                ├── <ul>   lista 5 highlights (✓)
                └── <a href="#contact">  "See Full Portfolio →"
```

**IDs propuestos:**
```
id="gs-portfolio"              ← <section> (ya tiene id="portfolio")
id="gs-portfolio-header"       ← <div> encabezado
id="gs-portfolio-video-col"    ← <div> columna video
id="gs-portfolio-video"        ← <iframe> YouTube
id="gs-portfolio-content-col"  ← <div> columna texto
id="gs-portfolio-highlights"   ← <ul> lista checkmarks
id="gs-portfolio-cta"          ← <a> "See Full Portfolio"
```

---

### 6 · BEFORE & AFTER
**Archivo:** `components/BeforeAfter.tsx`

```
<section>  bg-[#050e07] · py-24
 └── <div>  max-w-7xl
      ├── <div>  text-center mb-14              ← Header sección
      │    ├── <span>  "Proof of Excellence"
      │    ├── <h2>    "Before & After"
      │    └── <p>     instrucción slider
      │
      └── <div>  grid grid-cols-1 md:grid-cols-3   ← Grid 3 SliderCards
           └── <SliderCard>  (×3)
                └── <div>  rounded-2xl · h-64 · cursor-ew-resize
                     ├── <img>       imagen BEFORE (fondo)
                     ├── <div>       imagen AFTER (clipPath dinámico)
                     ├── <div>       línea neon + handle ◀▶
                     ├── <span>      label "BEFORE"
                     ├── <span>      label "AFTER"
                     └── <div>       info inferior (título + ubicación)
```

**IDs propuestos:**
```
id="gs-gallery"                ← <section>
id="gs-gallery-header"         ← <div> encabezado
id="gs-gallery-grid"           ← <div> grid
id="gs-gallery-card-1"         ← SliderCard Lawn Restoration
id="gs-gallery-card-2"         ← SliderCard Garden Overhaul
id="gs-gallery-card-3"         ← SliderCard Patio Installation
```

---

### 7 · ABOUT
**Archivo:** `components/About.tsx`

```
<section id="about">  relative · py-24
 ├── <div>  absolute inset-0                    ← Background
 │    ├── <img>   foto background Unsplash
 │    ├── <div>   overlay verde oscuro /92
 │    └── <div>   overlay gradiente lateral
 │
 └── <div>  relative z-10 · max-w-7xl
      └── <div>  grid lg:grid-cols-2 · gap-16
           ├── <div>                            ← Col izquierda: Texto
           │    ├── <span>  "Who We Are"
           │    ├── <h2>    "Built on Sweat, Pride & Deep Roots"
           │    ├── <p>     párrafo historia (×2)
           │    └── ...
           │
           └── <div>  grid grid-cols-1 sm:grid-cols-2   ← Col derecha: 4 value cards
                └── <div>  (×4 cards)  bg-white/5 · backdrop-blur · rounded-2xl
                     ├── <div>  emoji icono
                     ├── <h3>   título valor
                     └── <p>    descripción
```

**IDs propuestos:**
```
id="gs-about"                  ← <section> (ya tiene id="about")
id="gs-about-bg"               ← <img> fondo
id="gs-about-text-col"         ← columna texto izquierda
id="gs-about-title"            ← <h2>
id="gs-about-values-grid"      ← grid 4 value cards
id="gs-about-val-licensed"     ← card Licensed & Insured
id="gs-about-val-eco"          ← card Eco-Friendly
id="gs-about-val-speed"        ← card Same-Week Service
id="gs-about-val-guarantee"    ← card Satisfaction Guaranteed
```

---

### 8 · TESTIMONIALS
**Archivo:** `components/Testimonials.tsx`

```
<section>  bg-[#050e07] · py-24 · overflow-hidden
 └── <div>  max-w-7xl
      ├── <div>  text-center mb-14              ← Header sección
      │    ├── <span>  "Real Clients. Real Results."
      │    └── <h2>    "What They're Saying"
      │
      └── <div>  relative                       ← Marquee container
           ├── <div>  fade izquierdo  (gradiente)
           ├── <div>  fade derecho    (gradiente)
           └── <div>  flex · w-max   ← Track animado (marquee auto-scroll)
                └── <div>  (×10 cards — 5 originales × 2)  w-80 · rounded-2xl
                     ├── <div>  estrellas ★
                     ├── <p>    quote texto
                     └── <div>  nombre + ubicación
```

**IDs propuestos:**
```
id="gs-testimonials"           ← <section>
id="gs-testimonials-header"    ← <div> encabezado
id="gs-testimonials-track"     ← <div> marquee animado
```

---

### 9 · CONTACT STRIP
**Archivo:** `components/ContactStrip.tsx`

```
<section id="contact">  bg-[#0d3b1e] · py-24
 ├── <div>  orb glow fondo (decorativo)
 │
 └── <div>  max-w-4xl · text-center
      ├── <span>  "Get In Touch"
      ├── <h2>    "Ready for a Greener Tomorrow?"
      ├── <p>     subtítulo
      │
      ├── <div>  flex · gap-5                   ← Botones CTA
      │    ├── <a href="tel:">    teléfono       bg-white/5 · border
      │    └── <a href="wa.me">   WhatsApp       bg-[#25D366]
      │
      └── <a href="mailto:">  prettylawn@greenscapesva.com  (link email)
```

**IDs propuestos:**
```
id="gs-contact"                ← <section> (ya tiene id="contact")
id="gs-contact-title"          ← <h2>
id="gs-contact-cta-phone"      ← <a> teléfono
id="gs-contact-cta-whatsapp"   ← <a> WhatsApp
id="gs-contact-email"          ← <a> email
```

---

### 10 · FOOTER
**Archivo:** `components/Footer.tsx`

```
<footer>  bg-[#050e07] · border-t border-[#39ff14]/15 · pt-16
 └── <div>  max-w-7xl
      ├── <div>  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   ← Grid 4 cols
      │    ├── <div>  sm:col-span-2              ← Brand col
      │    │    ├── <img>  logo
      │    │    ├── <p>    tagline
      │    │    └── <div>  social icons (×3)
      │    │
      │    ├── <div>                             ← Quick Links col
      │    │    ├── <h4>   "Quick Links"
      │    │    └── <ul>   Services/Portfolio/About/Contact
      │    │
      │    └── <div>                             ← Services col
      │         ├── <h4>  "Services"
      │         └── <ul>  6 servicios
      │
      └── <div>  border-t · pt-8                ← Bottom bar
           ├── <p>   "© 2025 Greenscapes VA…"
           └── <p>   "Licensed & Insured · Northern Virginia"
```

**IDs propuestos:**
```
id="gs-footer"                 ← <footer>
id="gs-footer-brand"           ← <div> columna brand
id="gs-footer-logo"            ← <img> logo
id="gs-footer-social"          ← <div> iconos sociales
id="gs-footer-links"           ← <div> Quick Links col
id="gs-footer-services"        ← <div> Services col
id="gs-footer-bottom"          ← <div> barra inferior
```

---

### 11 · WHATSAPP + SMS BUTTON
**Archivo:** `components/WhatsAppButton.tsx`

```
<div>  fixed · bottom-6 · right-6 · z-50 · flex-col · gap-3
 ├── <a href="sms:">   (solo mobile — AnimatePresence)   ← SMS button
 │    └── <svg>  ícono mensaje
 │
 └── <a href="wa.me">                                     ← WhatsApp button
      ├── <svg>  ícono WhatsApp
      └── <span> "WhatsApp Us" (visible sm:block)
```

**IDs propuestos:**
```
id="gs-fab"                    ← <div> contenedor ambos botones
id="gs-fab-sms"                ← <a> botón SMS
id="gs-fab-whatsapp"           ← <a> botón WhatsApp
```

---

## Resumen — Estado de todos los IDs

> ✅ = aplicado en código · 🔲 = propuesto, pendiente de aplicar

```
NAVBAR                                                              🔲
  gs-nav               gs-nav-logo          gs-nav-links
  gs-nav-cta-phone     gs-nav-hamburger     gs-nav-mobile-menu

HERO                                                                🔲
  gs-hero              gs-hero-bg           gs-hero-content
  gs-hero-badge        gs-hero-title        gs-hero-subtitle
  gs-hero-cta-work     gs-hero-cta-quote    gs-hero-scroll

STATS                                                               🔲
  gs-stats             gs-stats-grid
  gs-stat-projects     gs-stat-years        gs-stat-retention    gs-stat-rating

SERVICES — imágenes                                                 ✅
  gs-service-mowing-img       gs-service-hedges-img
  gs-service-design-img       gs-service-irrigation-img
  gs-service-cleanup-img      gs-service-hardscaping-img

SERVICES — contenedores                                             🔲
  gs-services          gs-services-header   gs-services-grid
  gs-service-mowing    gs-service-hedges    gs-service-design
  gs-service-irrigation gs-service-cleanup  gs-service-hardscaping

PORTFOLIO                                                           🔲
  gs-portfolio         gs-portfolio-header  gs-portfolio-video-col
  gs-portfolio-video   gs-portfolio-content-col
  gs-portfolio-highlights                   gs-portfolio-cta

GALLERY (Before/After)                                              🔲
  gs-gallery           gs-gallery-header    gs-gallery-grid
  gs-gallery-card-1    gs-gallery-card-2    gs-gallery-card-3

ABOUT                                                               🔲
  gs-about             gs-about-bg          gs-about-text-col
  gs-about-title       gs-about-values-grid
  gs-about-val-licensed gs-about-val-eco    gs-about-val-speed   gs-about-val-guarantee

TESTIMONIALS                                                        🔲
  gs-testimonials      gs-testimonials-header gs-testimonials-track

CONTACT                                                             🔲
  gs-contact           gs-contact-title
  gs-contact-cta-phone gs-contact-cta-whatsapp gs-contact-email

FOOTER                                                              🔲
  gs-footer            gs-footer-brand      gs-footer-logo
  gs-footer-social     gs-footer-links      gs-footer-services   gs-footer-bottom

FAB BUTTONS                                                         🔲
  gs-fab               gs-fab-sms           gs-fab-whatsapp
```

---

## Convención de naming

| Prefijo | Significado |
|---------|-------------|
| `gs-` | Greenscapes (namespace del proyecto) |
| `gs-[seccion]` | Elemento raíz de la sección |
| `gs-[seccion]-[elemento]` | Elemento hijo directo |
| `gs-[seccion]-[tipo]-[nombre]` | Elemento específico (ej: cta-phone, val-eco) |

> Los IDs se aplican **sección por sección** según se necesiten, para no hacer cambios masivos de una sola vez.
> Consultar el resumen de estado (✅ / 🔲) para saber qué está activo en código y qué está pendiente.

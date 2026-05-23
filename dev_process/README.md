# dev_process — Scripts de desarrollo

Scripts internos para el flujo de trabajo del proyecto Greenscapes VA.
No forman parte del sitio web; son herramientas para el equipo.

---

## optimize_image.py

Selecciona una imagen de tu máquina, la optimiza para web y la guarda en `/assets`.

### Primera vez — Setup

1. **Instalar Python** (si no lo tienes):
   - Descarga desde https://www.python.org/downloads/
   - Durante la instalación marca ✅ **"Add Python to PATH"**

2. **Instalar dependencias:**
   ```bash
   pip install -r dev_process/requirements.txt
   ```

### Uso

Desde la raíz del proyecto:

```bash
python dev_process/optimize_image.py
```

El script te guiará paso a paso:

```
📂  Abriendo selector de archivos…       ← se abre el explorador de archivos
✅  Imagen seleccionada:
    Nombre:      foto-jardin.jpg
    Tamaño:      4.23 MB
    Dimensiones: 4032 × 3024 px
    Formato:     JPEG

💾  Original guardado en: assets_before/foto-jardin.jpg

⚙️   Opciones de optimización (Enter = valor por defecto):

  Nombre de salida (sin extensión) [foto-jardin]:
  Formato de salida  (WEBP / JPEG / PNG) [WEBP]:
  Ancho máximo (px)               [1920]:
  Calidad (1-100)                 [82]:

⚙️   Procesando…
    ↳ Redimensionada: 1920 × 1440 px

────────────────────────────────────────────────────
  ✅  Guardada en:   assets/foto-jardin.webp
  Tamaño original:   4.23 MB
  Tamaño optimizado: 187.4 KB
  Reducción:         95.7%
────────────────────────────────────────────────────
```

### Directorios

| Directorio | Contenido | Git |
|------------|-----------|-----|
| `assets/` | Imágenes optimizadas listas para el sitio | ✅ Tracked |
| `assets_before/` | Originales sin comprimir (respaldo temporal) | ❌ Ignorado |

### Opciones de optimización

| Opción | Default | Descripción |
|--------|---------|-------------|
| Formato | `WEBP` | WEBP = mejor compresión · JPEG = compatibilidad máxima · PNG = transparencia |
| Ancho máximo | `1920` px | Reduce la imagen si es más ancha que este valor |
| Calidad | `82` | 80-85 es el balance ideal calidad/tamaño para web |

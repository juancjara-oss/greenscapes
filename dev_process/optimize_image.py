#!/usr/bin/env python3
"""
optimize_image.py — Greenscapes VA Image Optimizer
────────────────────────────────────────────────────
Selecciona una imagen desde tu máquina, la optimiza para web
y la guarda en el directorio /assets del proyecto.

El original se copia automáticamente a /assets_before (no se sube a git).

Instalación (solo la primera vez):
    pip install Pillow

Uso:
    python dev_process/optimize_image.py
"""

import os
import sys
import shutil
from pathlib import Path

# ── Dependencias ──────────────────────────────────────────────────────────────
try:
    from PIL import Image
except ImportError:
    print("\n❌  Pillow no está instalado.")
    print("    Ejecuta:  pip install Pillow\n")
    sys.exit(1)

try:
    import tkinter as tk
    from tkinter import filedialog
    HAS_TK = True
except ImportError:
    HAS_TK = False

# ── Rutas del proyecto ────────────────────────────────────────────────────────
SCRIPT_DIR   = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
ASSETS_DIR   = PROJECT_ROOT / "assets"
BEFORE_DIR   = PROJECT_ROOT / "assets_before"

ASSETS_DIR.mkdir(exist_ok=True)
BEFORE_DIR.mkdir(exist_ok=True)

# ── Configuración por defecto ─────────────────────────────────────────────────
DEFAULT_MAX_WIDTH = 1920    # px — ancho máximo de salida
DEFAULT_QUALITY   = 82      # 1-100 — balance calidad/tamaño
DEFAULT_FORMAT    = "WEBP"  # formato de salida (WEBP / JPEG / PNG)

SUPPORTED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".tif"}

EXT_MAP = {
    "WEBP": ".webp",
    "JPEG": ".jpg",
    "JPG":  ".jpg",
    "PNG":  ".png",
}


# ── Helpers ───────────────────────────────────────────────────────────────────

def human_size(path: Path) -> str:
    """Devuelve el tamaño del archivo en formato legible."""
    size = path.stat().st_size
    if size < 1024:
        return f"{size} B"
    elif size < 1024 ** 2:
        return f"{size / 1024:.1f} KB"
    return f"{size / (1024 ** 2):.2f} MB"


def pick_file() -> Path | None:
    """Abre el selector de archivos del sistema operativo."""
    if HAS_TK:
        root = tk.Tk()
        root.withdraw()
        root.attributes("-topmost", True)
        raw = filedialog.askopenfilename(
            title="Selecciona la imagen a optimizar",
            filetypes=[
                ("Imágenes", "*.jpg *.jpeg *.png *.webp *.bmp *.tiff *.tif"),
                ("Todos los archivos", "*.*"),
            ],
        )
        root.destroy()
        return Path(raw) if raw else None
    else:
        raw = input("  Ruta completa a la imagen: ").strip().strip('"').strip("'")
        return Path(raw) if raw else None


def ask(prompt: str, default: str) -> str:
    """Pide un valor al usuario; si presiona Enter usa el default."""
    value = input(f"  {prompt} [{default}]: ").strip()
    return value if value else default


def optimize(src: Path, dest: Path, max_width: int, quality: int, fmt: str) -> None:
    """Abre, redimensiona (si aplica) y guarda la imagen optimizada."""
    with Image.open(src) as img:
        # Normalizar modo de color
        if fmt in ("JPEG",) and img.mode not in ("RGB", "L"):
            img = img.convert("RGB")

        # Redimensionar si supera el ancho máximo
        if img.width > max_width:
            ratio    = max_width / img.width
            new_size = (max_width, int(img.height * ratio))
            img      = img.resize(new_size, Image.LANCZOS)
            print(f"    ↳ Redimensionada: {img.width} × {img.height} px")
        else:
            print(f"    ↳ Dimensiones originales: {img.width} × {img.height} px (≤ {max_width} px)")

        # Parámetros de guardado
        save_kwargs: dict = {"quality": quality, "optimize": True}
        if fmt == "WEBP":
            save_kwargs["method"] = 6   # máxima compresión WEBP

        img.save(dest, format=fmt, **save_kwargs)


def resolve_dest(directory: Path, stem: str, ext: str) -> Path:
    """Evita sobreescribir archivos existentes añadiendo un sufijo numérico."""
    dest = directory / f"{stem}{ext}"
    counter = 1
    while dest.exists():
        dest = directory / f"{stem}_{counter}{ext}"
        counter += 1
    return dest


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    print()
    print("╔══════════════════════════════════════════════════╗")
    print("║   Greenscapes VA — Optimizador de Imágenes       ║")
    print("╚══════════════════════════════════════════════════╝")
    print()

    # 1. Seleccionar imagen fuente
    print("📂  Abriendo selector de archivos…")
    src = pick_file()

    if not src or not src.exists():
        print("❌  No se seleccionó ningún archivo. Saliendo.\n")
        sys.exit(0)

    if src.suffix.lower() not in SUPPORTED_EXT:
        print(f"❌  Formato no soportado: {src.suffix}")
        print(f"    Formatos válidos: {', '.join(sorted(SUPPORTED_EXT))}\n")
        sys.exit(1)

    # Mostrar info del archivo original
    with Image.open(src) as img:
        orig_dims   = (img.width, img.height)
        orig_format = img.format or src.suffix.upper().strip(".")

    print(f"\n✅  Imagen seleccionada:")
    print(f"    Nombre:     {src.name}")
    print(f"    Tamaño:     {human_size(src)}")
    print(f"    Dimensiones:{orig_dims[0]} × {orig_dims[1]} px")
    print(f"    Formato:    {orig_format}")

    # 2. Guardar original en assets_before
    before_dest = BEFORE_DIR / src.name
    shutil.copy2(src, before_dest)
    print(f"\n💾  Original guardado en: assets_before/{src.name}")

    # 3. Pedir opciones de optimización
    print("\n⚙️   Opciones de optimización (Enter = valor por defecto):\n")
    out_stem    = ask("Nombre de salida (sin extensión)", src.stem)
    out_fmt_raw = ask("Formato de salida  (WEBP / JPEG / PNG)", DEFAULT_FORMAT)
    out_fmt     = out_fmt_raw.upper().strip()
    max_width   = int(ask("Ancho máximo (px)              ", str(DEFAULT_MAX_WIDTH)))
    quality     = int(ask("Calidad (1-100)                 ", str(DEFAULT_QUALITY)))

    # Normalizar formato
    if out_fmt not in EXT_MAP:
        print(f"⚠️   Formato '{out_fmt}' no reconocido. Usando WEBP.")
        out_fmt = "WEBP"
    ext        = EXT_MAP[out_fmt]
    fmt_pillow = "JPEG" if out_fmt in ("JPEG", "JPG") else out_fmt

    # Resolver nombre de destino sin sobreescribir
    dest = resolve_dest(ASSETS_DIR, out_stem, ext)

    # 4. Optimizar
    print(f"\n⚙️   Procesando…")
    optimize(src, dest, max_width, quality, fmt_pillow)

    # 5. Reporte final
    orig_size = src.stat().st_size
    opt_size  = dest.stat().st_size
    saved_pct = (1 - opt_size / orig_size) * 100 if orig_size > 0 else 0

    print()
    print("─" * 52)
    print(f"  ✅  Guardada en:   assets/{dest.name}")
    print(f"  Tamaño original:   {human_size(src)}")
    print(f"  Tamaño optimizado: {human_size(dest)}")
    print(f"  Reducción:         {saved_pct:.1f}%")
    print("─" * 52)
    print()


if __name__ == "__main__":
    main()

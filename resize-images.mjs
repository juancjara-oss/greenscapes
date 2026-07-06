import sharp from 'sharp'
import { readFile, writeFile, stat } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Service card thumbnails: display at ~380px on mobile, 400px covers 2x retina
const cardImages = {
  width: 400,
  quality: 52,
  targets: [
    'firepit-patio.webp',
    'irrigation-home.webp',
    'leaf-cleanup-roanoke.webp',
    'daleville-lawn-back-mower.webp',
    'mulch-installation.webp',
    'commercial-grounds-maintenance.webp',
    'hoa-grounds-maintenance.webp',
    'shrub-trimming-reidsville.webp',
    'underwood-design.webp',
    'patio-after.webp',
    'patio-before.webp',
    'hardscaping-before.webp',
    'hardscaping-after.webp',
  ],
}

// BeforeAfter slider + About bg: display wider, keep at 800px but lower quality
const fullImages = {
  width: 800,
  quality: 52,
  targets: [
    'landscaping-before.webp',
    'landscaping-after.webp',
    'who-we-are-bg.webp',
  ],
}

async function process(targets, width, quality) {
  for (const name of targets) {
    const filePath = path.join(__dirname, 'public', 'assets', name)
    try {
      const beforeStat = await stat(filePath)
      const beforeKB = Math.round(beforeStat.size / 1024)
      const inputBuf = await readFile(filePath)
      const meta = await sharp(inputBuf).metadata()

      const outputBuf = await sharp(inputBuf)
        .resize({ width, withoutEnlargement: false })
        .webp({ quality })
        .toBuffer()

      const afterKB = Math.round(outputBuf.length / 1024)
      await writeFile(filePath, outputBuf)
      console.log(`✓ ${name}: ${beforeKB} KB → ${afterKB} KB (${meta.width}px → ${width}px, saved ${beforeKB - afterKB} KB)`)
    } catch (e) {
      console.error(`ERROR ${name}: ${e.message}`)
    }
  }
}

await process(cardImages.targets, cardImages.width, cardImages.quality)
await process(fullImages.targets, fullImages.width, fullImages.quality)
console.log('\nDone.')

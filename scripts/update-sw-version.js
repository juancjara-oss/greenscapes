/**
 * Runs before every `npm run build`.
 * Stamps a new timestamp-based version into public/sw.js so that
 * browsers automatically discard old caches after each deploy.
 */
const fs = require('fs')
const path = require('path')

const swPath = path.join(__dirname, '..', 'public', 'sw.js')
const version = `v${Date.now()}`

let src = fs.readFileSync(swPath, 'utf8')
src = src.replace(/const CACHE_VERSION = '[^']*'/, `const CACHE_VERSION = '${version}'`)
fs.writeFileSync(swPath, src, 'utf8')

console.log(`[sw] Cache version → ${version}`)

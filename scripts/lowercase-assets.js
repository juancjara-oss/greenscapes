const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '../public/assets')

fs.readdirSync(dir).forEach((file) => {
  const lower = file.toLowerCase()
  if (file !== lower) {
    fs.renameSync(path.join(dir, file), path.join(dir, lower))
    console.log(`Renamed: ${file} → ${lower}`)
  }
})

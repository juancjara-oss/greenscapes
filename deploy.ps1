# Greenscapes VA — Build for Hostinger deploy
# Usage: .\deploy.ps1
# After running this, ask Claude Code: "deploy greenscapesva.com to Hostinger"

$ErrorActionPreference = "Stop"
$ProjectDir = "C:\Users\juanc\greenscapes-va"

Set-Location $ProjectDir

Write-Host "`nBuilding site..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed." }

Write-Host "`n✅ Build complete. Now ask Claude Code to deploy to Hostinger." -ForegroundColor Green

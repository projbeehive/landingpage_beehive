# Baixa o br-states.json para public/maps/br-states.json

$dest = Join-Path $PSScriptRoot '..\public\maps\br-states.json'
$dest = [System.IO.Path]::GetFullPath($dest)

$dir = Split-Path $dest -Parent
if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

$uri = 'https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/br-states.json'
Invoke-WebRequest -Uri $uri -OutFile $dest -UseBasicParsing

Write-Host "Downloaded br-states.json to $dest"

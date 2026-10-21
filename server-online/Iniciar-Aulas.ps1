$ErrorActionPreference = 'Stop'
$base = $PSScriptRoot
$runtime = Join-Path $base 'runtime'
$nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
if ($nodeCommand) { $nodePath = $nodeCommand.Source } else { $nodePath = 'C:\Users\pro\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' }
if (-not (Test-Path -LiteralPath $nodePath)) { throw 'Instale o Node.js LTS antes de iniciar.' }
& $nodePath (Join-Path $base 'setup.mjs') $runtime
if ($LASTEXITCODE -ne 0) { throw 'Falha ao preparar a configuração.' }
$logs = Join-Path $base 'logs'
New-Item -ItemType Directory -Path $logs -Force | Out-Null
$config = Join-Path $runtime 'livekit.yaml'
$exe = Join-Path $base 'bin/livekit-server.exe'
if (-not (Test-Path -LiteralPath $exe)) { throw 'O executável LiveKit não foi instalado na pasta bin.' }
$running = Get-NetTCPConnection -State Listen -LocalPort 7880 -ErrorAction SilentlyContinue
if (-not $running) {
 $video = Start-Process -FilePath $exe -ArgumentList @('--config', ('"' + $config + '"')) -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $logs 'video.log') -RedirectStandardError (Join-Path $logs 'video-error.log')
 $video.Id | Set-Content -LiteralPath (Join-Path $runtime 'video.pid')
}
$runningApi = Get-NetTCPConnection -State Listen -LocalPort 8787 -ErrorAction SilentlyContinue
if (-not $runningApi) {
 $api = Start-Process -FilePath $nodePath -ArgumentList @(('"' + (Join-Path $base 'server.mjs') + '"'),('"' + $runtime + '"')) -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $logs 'api.log') -RedirectStandardError (Join-Path $logs 'api-error.log')
 $api.Id | Set-Content -LiteralPath (Join-Path $runtime 'api.pid')
}
Write-Host 'Serviços iniciados. Verifique http://127.0.0.1:8787/api/health'
$serverSettings = Get-Content -LiteralPath (Join-Path $runtime 'server.json') -Raw | ConvertFrom-Json
if ($serverSettings.publicHost) {
 $proxyListener = Get-NetTCPConnection -State Listen -LocalPort 443 -ErrorAction SilentlyContinue
 if (-not $proxyListener) {
  $proxy = Start-Process -FilePath (Join-Path $base 'bin/caddy.exe') -ArgumentList @('run','--config',('"' + (Join-Path $runtime 'Caddyfile') + '"'),'--adapter','caddyfile') -WorkingDirectory $runtime -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $logs 'https.log') -RedirectStandardError (Join-Path $logs 'https-error.log')
  $proxy.Id | Set-Content -LiteralPath (Join-Path $runtime 'https.pid')
 }
}

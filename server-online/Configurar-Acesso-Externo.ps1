param([Parameter(Mandatory=$true)][string]$PublicHost,[Parameter(Mandatory=$true)][string]$PublicIp,[Parameter(Mandatory=$true)][string]$WanIp,[string]$DnsServer='d.sec.dns.br')
$ErrorActionPreference = 'Stop'
$administrator = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $administrator.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) { throw 'Abra o PowerShell como administrador antes de executar este script.' }
if ($PublicHost -notmatch '^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$') { throw 'Informe um domínio válido.' }
$ipValue = $null
if (-not [System.Net.IPAddress]::TryParse($PublicIp,[ref]$ipValue) -or $ipValue.AddressFamily -ne 'InterNetwork') { throw 'Informe um IPv4 público válido.' }
$wanValue = $null
if (-not [System.Net.IPAddress]::TryParse($WanIp,[ref]$wanValue) -or $wanValue.AddressFamily -ne 'InterNetwork') { throw 'Informe o IPv4 WAN exibido no painel do roteador.' }
$wanBytes = $wanValue.GetAddressBytes()
if (($wanBytes[0] -eq 100 -and $wanBytes[1] -ge 64 -and $wanBytes[1] -le 127) -or $wanBytes[0] -eq 10 -or ($wanBytes[0] -eq 172 -and $wanBytes[1] -ge 16 -and $wanBytes[1] -le 31) -or ($wanBytes[0] -eq 192 -and $wanBytes[1] -eq 168)) { throw 'O roteador está atrás de CGNAT ou outro NAT. Solicite IPv4 público à operadora ou prepare um relay antes de ativar o acesso externo.' }
if ($WanIp -ne $PublicIp) { throw 'O IP WAN do roteador difere do IPv4 público. Confirme o roteamento com a operadora antes de continuar.' }
$currentPublicIp = (Invoke-WebRequest -Uri 'https://api.ipify.org' -UseBasicParsing -TimeoutSec 10).Content.Trim()
if ($currentPublicIp -ne $PublicIp) { throw 'O IP informado difere do IP público atual desta conexão.' }
$addresses = @(Resolve-DnsName -Name $PublicHost -Type A -Server $DnsServer -ErrorAction Stop | Where-Object Type -eq A | ForEach-Object IPAddress)
if ($PublicIp -notin $addresses) { throw 'Primeiro aponte o registro A deste domínio para o IP público atual no Registro.br.' }
$base = $PSScriptRoot
$runtime = Join-Path $base 'runtime'
$path = Join-Path $runtime 'server.json'
$config = Get-Content -LiteralPath $path -Raw | ConvertFrom-Json
$config | Add-Member -NotePropertyName publicHost -NotePropertyValue $PublicHost -Force
$config | Add-Member -NotePropertyName publicIp -NotePropertyValue $PublicIp -Force
$config.livekitPublic = 'wss://' + $PublicHost
& (Join-Path $base 'Parar-Aulas.ps1')
$config | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $path -Encoding UTF8
$template = Get-Content -LiteralPath (Join-Path $base 'Caddyfile.example') -Raw
$template.Replace('aulas.institutointegro.com.br',$PublicHost) | Set-Content -LiteralPath (Join-Path $runtime 'Caddyfile') -Encoding UTF8
# Execute como administrador. Abre somente as portas do serviço de aulas.
foreach ($port in @(80,443,7881)) {
 $ruleName = 'Integro-Aulas-TCP-' + $port
 if (-not (Get-NetFirewallRule -Name $ruleName -ErrorAction SilentlyContinue)) { New-NetFirewallRule -Name $ruleName -DisplayName $ruleName -Direction Inbound -Action Allow -Protocol TCP -LocalPort $port | Out-Null }
}
foreach ($port in @(7882,3478)) {
 $ruleName = 'Integro-Aulas-UDP-' + $port
 if (-not (Get-NetFirewallRule -Name $ruleName -ErrorAction SilentlyContinue)) { New-NetFirewallRule -Name $ruleName -DisplayName $ruleName -Direction Inbound -Action Allow -Protocol UDP -LocalPort $port | Out-Null }
}
& (Join-Path $base 'Iniciar-Aulas.ps1')
Write-Host ('Confira o certificado HTTPS em https://' + $PublicHost + '/api/health e teste com celular em dados móveis antes de ativar a URL no portal.')

$ErrorActionPreference = 'Stop'
$runtime = Join-Path $PSScriptRoot 'runtime'
foreach ($name in @('https','api','video')) {
 $pidFile = Join-Path $runtime ($name + '.pid')
 if (Test-Path -LiteralPath $pidFile) {
  $savedProcessId = [int](Get-Content -LiteralPath $pidFile)
  $process = Get-CimInstance Win32_Process -Filter ('ProcessId = ' + $savedProcessId) -ErrorAction SilentlyContinue
  if ($process -and $process.CommandLine -like ('*' + $PSScriptRoot + '*')) { Stop-Process -Id $savedProcessId }
 }
}

import { cpSync, copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

// Plesk serves the project root directly. Publish the production build there
// after Vite has compiled the source application.
const root = fileURLToPath(new URL('../', import.meta.url))
const dist = join(root, 'dist')

if (!existsSync(join(dist, 'index.html'))) {
  console.error('Build fehlt: dist/index.html wurde nicht erzeugt.')
  process.exit(1)
}

const assets = join(root, 'assets')
if (existsSync(assets)) rmSync(assets, { recursive: true, force: true })

for (const entry of readdirSync(dist)) {
  const source = join(dist, entry)
  const target = join(root, entry)

  if (statSync(source).isDirectory()) {
    mkdirSync(target, { recursive: true })
    cpSync(source, target, { recursive: true, force: true })
  } else {
    copyFileSync(source, target)
  }
}

console.log('CleanPolice production build to Plesk webroot published.')

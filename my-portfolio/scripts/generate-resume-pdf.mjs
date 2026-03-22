/**
 * generate-resume-pdf.mjs
 * dist-resume/ 를 로컬 HTTP 서버로 서빙 후 Puppeteer PDF 저장
 * → dist-resume/이력서_박정현.pdf
 */

import puppeteer from 'puppeteer'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir   = path.resolve(__dirname, '../dist-resume')
const pdfPath   = path.join(distDir, '이력서_박정현.pdf')

if (!fs.existsSync(path.join(distDir, 'resume.html'))) {
  console.error('[ERROR] 빌드 파일이 없습니다. 먼저 vite build --config vite.config.resume.ts 를 실행해주세요.')
  process.exit(1)
}

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff',
}

const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/resume.html' : (req.url ?? '/resume.html')
  const filePath = path.join(distDir, urlPath.split('?')[0])
  const ext = path.extname(filePath)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' })
    fs.createReadStream(filePath).pipe(res)
  } else {
    res.writeHead(404); res.end('Not found')
  }
})

const PORT = 14732
await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve))
console.log(`[resume-pdf] 서버: http://127.0.0.1:${PORT}`)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.goto(`http://127.0.0.1:${PORT}/resume.html`, { waitUntil: 'networkidle0', timeout: 30_000 })
await page.emulateMediaType('print')
await page.waitForFunction(() => document.fonts.ready)

console.log('[resume-pdf] PDF 생성 중...')
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '0', bottom: '0', left: '0', right: '0' } })

await browser.close()
server.close()

const kb = Math.round(fs.statSync(pdfPath).size / 1024)
console.log(`[resume-pdf] ✓ 완료: ${pdfPath} (${kb} KB)`)

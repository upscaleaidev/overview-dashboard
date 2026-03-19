/**
 * Life+ Local Server
 * - Sert index.html sur http://localhost:3000
 * - Sauvegarde automatique des données dans ./Life+_Data/backups/
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const APP_DIR = __dirname;
const BACKUP_DIR = path.join(APP_DIR, 'Life+_Data', 'backups');

// S'assurer que le dossier backup existe
if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

function saveBackup(data) {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const ts = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);

  // Toujours écrire le fichier "latest.json"
  const latestPath = path.join(BACKUP_DIR, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(data, null, 2), 'utf8');

  // Fichier daté (1 par minute max pour éviter le spam)
  const minuteFile = path.join(BACKUP_DIR, `${ts}.json`);
  if (!fs.existsSync(minuteFile)) {
    fs.writeFileSync(minuteFile, JSON.stringify(data, null, 2), 'utf8');
  }

  // Rotation : garder les 200 derniers fichiers datés
  const files = fs.readdirSync(BACKUP_DIR)
    .filter(f => f !== 'latest.json' && f.endsWith('.json'))
    .sort();
  if (files.length > 200) {
    files.slice(0, files.length - 200).forEach(f => {
      try { fs.unlinkSync(path.join(BACKUP_DIR, f)); } catch(e) {}
    });
  }

  return { saved: true, file: path.basename(minuteFile), total: files.length };
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  // CORS pour les requêtes locales
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // POST /backup — sauvegarde des données
  if (req.method === 'POST' && pathname === '/backup') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const result = saveBackup(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch(e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // GET /backup/latest — lire la dernière sauvegarde
  if (req.method === 'GET' && pathname === '/backup/latest') {
    const latestPath = path.join(BACKUP_DIR, 'latest.json');
    if (fs.existsSync(latestPath)) {
      const data = fs.readFileSync(latestPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Aucun backup trouvé' }));
    }
    return;
  }

  // GET /backup/list — liste des backups disponibles
  if (req.method === 'GET' && pathname === '/backup/list') {
    try {
      const files = fs.readdirSync(BACKUP_DIR)
        .filter(f => f !== 'latest.json' && f.endsWith('.json'))
        .sort().reverse().slice(0, 50);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ backups: files, dir: BACKUP_DIR, count: files.length }));
    } catch(e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // Servir les fichiers statiques
  let filePath = pathname === '/' ? '/index.html' : pathname;
  filePath = path.join(APP_DIR, filePath.replace(/\.\./g, ''));
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404); res.end('Not found');
      } else {
        res.writeHead(500); res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('\n╔══════════════════════════════════════╗');
  console.log('║       Life+ — Serveur Local          ║');
  console.log('╠══════════════════════════════════════╣');
  console.log(`║  URL : http://localhost:${PORT}           ║`);
  console.log(`║  Backups : ${BACKUP_DIR.slice(0,24)}... ║`);
  console.log('╚══════════════════════════════════════╝\n');
  console.log('Ctrl+C pour arrêter\n');
});

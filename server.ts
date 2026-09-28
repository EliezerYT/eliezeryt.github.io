import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '20mb' }));

const SRC_PROJECTS_PATH = path.resolve(__dirname, 'src/data/projects.json');
const PUBLIC_PROJECTS_PATH = path.resolve(__dirname, 'public/data/projects.json');

// Ensure directories exist
const ensureDirectoryExists = (filePath: string) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Helper to read projects from disk
const getProjectsFromFile = (): any[] => {
  try {
    if (fs.existsSync(SRC_PROJECTS_PATH)) {
      const data = fs.readFileSync(SRC_PROJECTS_PATH, 'utf-8');
      return JSON.parse(data);
    }
    if (fs.existsSync(PUBLIC_PROJECTS_PATH)) {
      const data = fs.readFileSync(PUBLIC_PROJECTS_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading projects.json:', err);
  }
  return [];
};

// Helper to write projects to disk
const saveProjectsToFile = (projects: any[]) => {
  ensureDirectoryExists(SRC_PROJECTS_PATH);
  ensureDirectoryExists(PUBLIC_PROJECTS_PATH);
  const jsonContent = JSON.stringify(projects, null, 2);
  fs.writeFileSync(SRC_PROJECTS_PATH, jsonContent, 'utf-8');
  fs.writeFileSync(PUBLIC_PROJECTS_PATH, jsonContent, 'utf-8');
};

// GET /api/projects
app.get('/api/projects', (_req, res) => {
  try {
    const projects = getProjectsFromFile();
    res.json({ success: true, projects, count: projects.length, file: 'src/data/projects.json' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/projects - saves projects to file
app.post('/api/projects', (req, res) => {
  try {
    const payload = req.body;
    const projects = Array.isArray(payload) ? payload : payload.projects;

    if (!Array.isArray(projects)) {
      return res.status(400).json({ success: false, error: 'Expected an array of projects or { projects: [...] }' });
    }

    saveProjectsToFile(projects);
    console.log(`[FILE SYNC] Guardados ${projects.length} proyectos exitosamente en src/data/projects.json`);
    res.json({
      success: true,
      message: 'Proyectos guardados exitosamente en src/data/projects.json y public/data/projects.json',
      count: projects.length,
      timestamp: new Date().toISOString(),
      filePath: 'src/data/projects.json',
    });
  } catch (err: any) {
    console.error('[FILE SYNC ERROR]:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Vite Middleware for Dev / Static serving for production
const startServer = async () => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor ejecutándose en http://0.0.0.0:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});

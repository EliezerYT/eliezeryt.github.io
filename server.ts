import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '20mb' }));

// Target paths for each dataset across src, public, docs, and dist
const DATA_DIRECTORIES = [
  path.resolve(__dirname, 'src/data'),
  path.resolve(__dirname, 'public/data'),
  path.resolve(__dirname, 'docs/data'),
  path.resolve(__dirname, 'dist/data'),
];

// Helper to ensure directory exists
const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Generic reader
const readDataFile = (filename: string): any[] => {
  for (const dir of DATA_DIRECTORIES) {
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(raw);
      } catch (e) {
        console.error(`Error reading ${filePath}:`, e);
      }
    }
  }
  return [];
};

// Generic writer that writes to ALL configured directories
const writeDataFile = (filename: string, data: any[]): string[] => {
  const jsonContent = JSON.stringify(data, null, 2);
  const updatedPaths: string[] = [];

  for (const dir of DATA_DIRECTORIES) {
    try {
      ensureDirectoryExists(dir);
      const targetPath = path.join(dir, filename);
      fs.writeFileSync(targetPath, jsonContent, 'utf-8');
      updatedPaths.push(targetPath);
    } catch (err) {
      console.error(`Could not write to ${dir}/${filename}:`, err);
    }
  }

  return updatedPaths;
};

// Endpoints for Projects
app.get('/api/projects', (_req, res) => {
  try {
    const projects = readDataFile('projects.json');
    res.json({ success: true, projects, count: projects.length });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/projects', (req, res) => {
  try {
    const payload = req.body;
    const projects = Array.isArray(payload) ? payload : payload.projects;

    if (!Array.isArray(projects)) {
      return res.status(400).json({ success: false, error: 'Expected an array of projects or { projects: [...] }' });
    }

    const writtenPaths = writeDataFile('projects.json', projects);
    console.log(`[FILE SYNC] Guardados ${projects.length} proyectos en: ${writtenPaths.join(', ')}`);
    res.json({
      success: true,
      message: 'Proyectos guardados exitosamente en archivos locales y listos para producción/GitHub.',
      count: projects.length,
      timestamp: new Date().toISOString(),
      updatedPaths: writtenPaths,
    });
  } catch (err: any) {
    console.error('[PROJECTS SYNC ERROR]:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoints for Experiences
app.get('/api/experiences', (_req, res) => {
  try {
    const experiences = readDataFile('experiences.json');
    res.json({ success: true, experiences, count: experiences.length });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/experiences', (req, res) => {
  try {
    const payload = req.body;
    const experiences = Array.isArray(payload) ? payload : payload.experiences;

    if (!Array.isArray(experiences)) {
      return res.status(400).json({ success: false, error: 'Expected an array of experiences or { experiences: [...] }' });
    }

    const writtenPaths = writeDataFile('experiences.json', experiences);
    console.log(`[FILE SYNC] Guardadas ${experiences.length} experiencias en: ${writtenPaths.join(', ')}`);
    res.json({
      success: true,
      message: 'Experiencias guardadas exitosamente en archivos de datos (src/data, public/data, docs/data).',
      count: experiences.length,
      timestamp: new Date().toISOString(),
      updatedPaths: writtenPaths,
    });
  } catch (err: any) {
    console.error('[EXPERIENCES SYNC ERROR]:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoints for Testimonials / Clients
app.get('/api/testimonials', (_req, res) => {
  try {
    const testimonials = readDataFile('testimonials.json');
    res.json({ success: true, testimonials, count: testimonials.length });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/testimonials', (req, res) => {
  try {
    const payload = req.body;
    const testimonials = Array.isArray(payload) ? payload : payload.testimonials;

    if (!Array.isArray(testimonials)) {
      return res.status(400).json({ success: false, error: 'Expected an array of testimonials or { testimonials: [...] }' });
    }

    const writtenPaths = writeDataFile('testimonials.json', testimonials);
    console.log(`[FILE SYNC] Guardados ${testimonials.length} testimonios en: ${writtenPaths.join(', ')}`);
    res.json({
      success: true,
      message: 'Testimonios guardados exitosamente en archivos de datos.',
      count: testimonials.length,
      timestamp: new Date().toISOString(),
      updatedPaths: writtenPaths,
    });
  } catch (err: any) {
    console.error('[TESTIMONIALS SYNC ERROR]:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Master Sync Endpoint: Saves all collections at once
app.post('/api/sync-all', (req, res) => {
  try {
    const { projects, experiences, testimonials } = req.body || {};
    const results: Record<string, any> = {};

    if (Array.isArray(projects)) {
      const paths = writeDataFile('projects.json', projects);
      results.projects = { count: projects.length, paths };
    }
    if (Array.isArray(experiences)) {
      const paths = writeDataFile('experiences.json', experiences);
      results.experiences = { count: experiences.length, paths };
    }
    if (Array.isArray(testimonials)) {
      const paths = writeDataFile('testimonials.json', testimonials);
      results.testimonials = { count: testimonials.length, paths };
    }

    res.json({
      success: true,
      message: 'Todos los datos han sido sincronizados y guardados en los archivos del sistema.',
      timestamp: new Date().toISOString(),
      results,
    });
  } catch (err: any) {
    console.error('[SYNC-ALL ERROR]:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Image upload directories — images are saved to all these locations
const IMAGE_DIRECTORIES = [
  path.resolve(__dirname, 'public/images'),
  path.resolve(__dirname, 'docs/images'),
  path.resolve(__dirname, 'src/assets/images'),
];

// Multer storage: save to a temp memory buffer, we write to all dirs manually
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no soportado. Usa JPG, PNG, GIF, WebP o SVG.'));
    }
  },
});

// Image upload endpoint
app.post('/api/upload-image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No se envió ningún archivo.' });
    }

    const ext = path.extname(req.file.originalname) || `.${req.file.mimetype.split('/')[1]}`;
    const filename = `img_${Date.now()}${ext}`;
    const savedPaths: string[] = [];

    for (const dir of IMAGE_DIRECTORIES) {
      try {
        ensureDirectoryExists(dir);
        const targetPath = path.join(dir, filename);
        fs.writeFileSync(targetPath, req.file.buffer);
        savedPaths.push(targetPath);
      } catch (err) {
        console.error(`Could not write image to ${dir}/${filename}:`, err);
      }
    }

    // The URL path that the frontend should use for the image
    const imageUrl = `./images/${filename}`;

    console.log(`[IMAGE UPLOAD] Imagen guardada: ${filename} en ${savedPaths.length} directorios`);
    res.json({
      success: true,
      message: 'Imagen guardada exitosamente en el proyecto.',
      filename,
      imageUrl,
      savedPaths,
    });
  } catch (err: any) {
    console.error('[IMAGE UPLOAD ERROR]:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve uploaded images statically
app.use('/images', express.static(path.resolve(__dirname, 'public/images')));

// Status check endpoint
app.get('/api/status', (_req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    directories: DATA_DIRECTORIES,
    counts: {
      projects: readDataFile('projects.json').length,
      experiences: readDataFile('experiences.json').length,
      testimonials: readDataFile('testimonials.json').length,
    }
  });
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

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Mirror GitHub Pages' directory-index behavior in dev: rewrite extensionless
// URLs like /privacy to /privacy/index.html when that file exists in public/.
function publicDirIndex(): Plugin {
  return {
    name: 'public-dir-index',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        if (url && url !== '/' && !url.includes('.')) {
          const clean = url.replace(/\/$/, '');
          const indexPath = join(server.config.publicDir, clean, 'index.html');
          if (existsSync(indexPath)) {
            req.url = `${clean}/index.html`;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), publicDirIndex()],
  base: '/',
});

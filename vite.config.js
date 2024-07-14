import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Izinkan akses ke direktori proyek
        'D:/workshio web/GIS/darma_projectThiland/wefgis-reactjs',
        // Tambahkan path lain jika diperlukan
      ]
    }
  },
  root: './',
  publicDir: 'public',
});

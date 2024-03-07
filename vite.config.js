import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    {
      name: 'refresh-on-css-change',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.css')) {
          server.ws.send({
            type: 'full-reload',
            path: '*',
          });
        }
      },
    },
  ],
})

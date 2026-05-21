import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';
import vitePluginForArco from '@arco-plugins/vite-react';
import setting from './src/settings.json';

function manualChunks(id: string) {
  if (!id.includes('node_modules')) {
    return undefined;
  }

  if (id.includes('@arco-design/web-react')) {
    return 'vendor-arco';
  }
  if (
    id.includes('bizcharts') ||
    id.includes('@antv') ||
    id.includes('@turf')
  ) {
    return 'vendor-charts';
  }
  if (id.includes('react') || id.includes('react-dom')) {
    return 'vendor-react';
  }
  if (id.includes('lodash') || id.includes('query-string')) {
    return 'vendor-utils';
  }

  return 'vendor';
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {},
    }),
    vitePluginForArco({
      theme: '@arco-themes/react-arco-pro',
      modifyVars: {
        'arcoblue-6': setting.themeColor,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
});

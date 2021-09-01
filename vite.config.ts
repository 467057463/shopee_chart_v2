import { defineConfig } from 'vite'
import {join} from 'path';
import vue from '@vitejs/plugin-vue'
import viteElectron from 'vite-plugin-electron-builder';
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': join(__dirname, 'src') + '/',
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    viteElectron({
      mainProcessFile: 'src/background.js',
      preloadDir: 'src/preload',
      builderOptions: {
        appId: 'your.id',
        directories: {
          output: 'dist_application',
          buildResources: 'build',
          app: 'dist'
        },
        files: ['**'],
        extends: null,
        asar: true,
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64'],
            },
          ],
          artifactName: '${productName} Setup ${version}.${ext}',
        },
        nsis: {
          oneClick: false,
          language: '2052',
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: "always",
        },
        mac: {
          target: 'dmg',
          artifactName: '${productName} Setup ${version}.${ext}',
        },
        dmg: {
          contents: [
            {
              x: 110,
              y: 150,
            },
            {
              x: 400,
              y: 150,
              type: 'link',
              path: '/Applications',
            },
          ],
          artifactName: '${productName} Setup ${version}.${ext}',
        },
      }
    })
  ]
})

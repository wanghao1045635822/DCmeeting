import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    outputDir: 'dist', // 打包输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    base: './',
    publicPath: './',
    server: {
      open: true, // 项目启动后，自动打开
      fs: {
        strict: true,
      },
      proxy: {
        '/base': {
          // target: 'http://aiotlink.com:8189',
          target: 'http://192.168.20.116:8089',
          //  target: 'http://192.168.20.158:8089',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          // secure: false
        },
        '/api': {
          // target: 'http://aiotlink.com:8189',
          target: 'http://192.168.20.116:8089',
          //  target: 'http://192.168.20.158:8089',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
        },
        '/api/v1': {
          // target: 'http://aiotlink.com:8189',
          target: 'http://192.168.20.116:8089',
          //  target: 'http://192.168.20.158:8089',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
        },
      },
      // warmup: {
      //   clientFiles: ['./index.html', './src/{views,components}/*'],
      // },
    },
    plugins: [
      eslint({
        cache: false,
        // include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        include: [''],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);

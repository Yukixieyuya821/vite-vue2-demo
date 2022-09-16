import {defineConfig} from 'vite';
import {createVuePlugin} from 'vite-plugin-vue2';
const path = require('path');
// https://vitejs.dev/config/
// const buildConfig = () => {
//     return {
//         outDir: 'dist',
//         lib: {
//             entry: path.resolve(__dirname, 'packages/index.js'),
//             name: 'index',
//             fileName: 'index'
//         }
//     };
// };
export default defineConfig({
    plugins: [createVuePlugin()],
    build: {
        // ...buildConfig(),
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});

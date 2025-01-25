import { copyFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'color-bridge',
            fileName: 'color-bridge',
        },
        rollupOptions: {
        },
    },
    plugins: [
        dts(),
        {
            name: 'copy-readme',
            apply: 'build',
            generateBundle() {
                const src = resolve(__dirname, 'README.md');
                const dest = resolve(__dirname, 'dist/README.md');
                copyFileSync(src, dest);
                console.log('README.md copied to dist folder');
            },
        },
    ]
})
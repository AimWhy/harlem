import vuePlugin from '@vitejs/plugin-vue';

import {
    defineConfig,
} from 'vite';

export default defineConfig({
    server: {
        port: 6565,
    },
    json: {
        stringify: true,
    },
    build: {
        sourcemap: 'hidden',
        commonjsOptions: {
            esmExternals: true,
        },
    },
    define: {
        '__VUE_OPTIONS_API__': false,
        '__VUE_PROD_DEVTOOLS__': true,
    },
    plugins: [
        vuePlugin(),
    ],
});
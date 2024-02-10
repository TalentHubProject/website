import {defineConfig} from 'astro/config';
import tailwind from '@astro/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()]
});

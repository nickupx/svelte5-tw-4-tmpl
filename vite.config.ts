import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'sveltekit-autoimport';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		autoImport({
			components: ['./src/components']
		}),
		sveltekit(),
		tailwindcss(),
		Icons({ compiler: 'svelte', autoInstall: true })
	],
	server: {
		host: '0.0.0.0'
	}
});

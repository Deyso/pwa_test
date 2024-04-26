import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = {
	open: true
};

export default defineConfig({
	plugins: [sveltekit()],
	preview: config
});

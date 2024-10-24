import adapter from '@sveltejs/adapter-netlify';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			edge: false,
			split: false
		})
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;

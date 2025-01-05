import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$src: './src',
			$components: './src/components',
			$lib: './src/lib',
			$stores: './src/stores',
			$data: './src/data'
		}
	}
};

import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      runtime: 'nodejs18.x'
    }),

  },
  preprocess: sveltePreprocess()
};

export default config;

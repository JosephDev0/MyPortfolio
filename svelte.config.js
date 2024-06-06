import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      runtime: 'nodejs18.x' // Use 'nodejs16.x' if you're targeting Node.js 16
    }),
    // other configurations...
  }
};

export default config;

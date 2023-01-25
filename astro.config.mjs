import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://greeffer.com',
	base: '/',

	// Enable React to support React JSX components.
	integrations: [react()],
});

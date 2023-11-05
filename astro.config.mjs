import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://classpaddev.github.io/wiki/',
	base: '/wiki/',
	integrations: [
		starlight({
			title: 'Classpad Dev',
			social: {
				github: 'https://github.com/classpaddev/wiki',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Developer Notes',
					autogenerate: { directory: 'dev' },
				}
			],
		}),
	],
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://classpaddev.github.io/wiki',
	base: '/wiki',
	integrations: [
		starlight({
			title: 'Classpad Dev',
			description: 'Dive into the Classpad II fx-CP400! Unlock the full potential of the Classpad with our SDK and create your own app',
			logo: {
				src: './src/assets/favicon.png',
			},
			editLink: {
				baseUrl: 'https://github.com/classpaddev/wiki/edit/main/',
			},
			social: {
				github: 'https://github.com/classpaddev/wiki',
				discord: 'https://discord.gg/knpcNJTzpd',
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
					badge: { text: 'WIP', variant: 'caution' },
					autogenerate: { directory: 'dev' },
				}
			],
			lastUpdated: true,
			favicon: './src/assets/favicon.png',
		}),
	],
});

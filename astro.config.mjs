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
				src: './src/assets/favicon.svg',
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
					label: 'Get Started',
					items: [
						{ label: 'Introduction', link: '/getting-started/introduction/' },
						{ label: 'Building', link: '/getting-started/building/' },
					],
				},
				// {
				// 	label: 'Guides',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'guides' },
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', link: '/guides/example/' },
				// 	],
				// },
				{
					label: 'Reference',
					collapsed: true,
					items: [
						{
							label: '📱 GUI',
							collapsed: true,
							autogenerate: { directory: 'reference/gui' },

						},
						{
							label: '📟 OS',
							collapsed: true,
							autogenerate: { directory: 'reference/os' },

						},
						{
							label: '🧮 CPU',
							collapsed: true,
							autogenerate: { directory: 'reference/cpu' },

						}
					]
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Examples',
					collapsed: true,
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Python',
					collapsed: false,
					badge: { text: 'New', variant: 'tip' },
					items: [
						{ slug: 'python/introduction/' },
					        {
					          label: 'Examples',
					          autogenerate: { directory: 'python/examples', collapsed: true  },
					        },
						{
					          label: 'Reference',
					          autogenerate: { directory: 'python/reference', collapsed: true  },
					        },
					        { slug: 'python/optimize/' },
					]
				},
				{
					label: 'Developer Notes',
					collapsed: true,
					autogenerate: { directory: 'dev' },
				}
			],
			lastUpdated: true,
			favicon: './src/assets/favicon.svg',
			customCss: [
				'./src/custom.css'
			]
		}),
	],
});

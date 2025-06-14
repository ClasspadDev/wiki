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
			 head: [
			        {
			          tag: 'script',
			          attrs: {
			            src: 'https://analytics.ahrefs.com/analytics.js',
				    'data-key': 'Kb2nywKkyR+dD+Av2GmerQ'
			          },
			        }
			 ],
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
						{ label: 'Introduction', link: '/python/introduction/' },
						{
							label: 'Examples',
							collapsed: true,
							autogenerate: { directory: 'python/examples' },
						},
						{
							label: 'Reference',
							collapsed: true,
							autogenerate: { directory: 'python/reference' },
						},
						{ label: 'Optimize', link: '/python/optimize/' },
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

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './astro.sidebar';
import { starlightPluginLlmsTxt } from './config/plugins/llms-txt';

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
			components: {
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
			},
			head: [
			        {
			          tag: 'script',
			          attrs: {
			            src: 'https://analytics.ahrefs.com/analytics.js',
				    	'data-key': 'Kb2nywKkyR+dD+Av2GmerQ'
			          },
			        },
					{
						tag: 'link',
						attrs: {
							href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Poppins:wght@700&display=swap"
						},
					}
			 ],
			editLink: {
				baseUrl: 'https://github.com/classpaddev/wiki/edit/main/',
			},
			defaultLocale: 'en',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/classpaddev/wiki' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/knpcNJTzpd' },
			],
			sidebar: sidebar,
			lastUpdated: true,
			favicon: './src/assets/favicon.svg',
			customCss: [
				'./src/custom.css'
			],
			plugins: [starlightPluginLlmsTxt()]
		}),
	],
});

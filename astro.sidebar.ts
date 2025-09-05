import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';


/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Top-level groups become tabs.
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
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
    ] satisfies StarlightUserConfig['sidebar'];
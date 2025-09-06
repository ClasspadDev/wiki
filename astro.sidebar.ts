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
        group('HHK', {
            items: [
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

                        },
                        {
                            label: '🖩 CALC',
                            collapsed: true,
                            autogenerate: { directory: 'reference/calc' },

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
                }
            ]
        }),
        group('HH3', {
            items: []
        }),
        group('Python', {
            collapsed: true,
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
                    autogenerate: { directory: 'python/reference' },
                },
                { label: 'Optimize', link: '/python/optimize/' },
            ]
        }),
        group('Misc', {
            collapsed: true,
            items: [
                {
                    label: 'Developer Notes',
                    autogenerate: { directory: 'dev' },
                }
            ]
        })
    ] satisfies StarlightUserConfig['sidebar'];
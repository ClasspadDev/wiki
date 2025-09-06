import type starlight from '@astrojs/starlight';

type StarlightSidebarConfig = NonNullable<Parameters<typeof starlight>[0]['sidebar']>;
type StarlightSidebarEntry = StarlightSidebarConfig[number];
type StarlightManualSidebarGroup = Extract<StarlightSidebarEntry, { items: any[] }>;
type StarlightAutoSidebarGroup = Extract<StarlightSidebarEntry, { autogenerate: any }>;

let enLabels = {};
let translations = {};

type NavKey = keyof typeof enLabels;
type NavDict = Record<NavKey, string>;

/**
 * Create a Starlight sidebar group config entry that uses labels and translations from
 * `src/content/nav/*` files.
 */
export function group(
	label: string,
	group: Omit<StarlightManualSidebarGroup, 'label'> | Omit<StarlightAutoSidebarGroup, 'label'>
): StarlightManualSidebarGroup | StarlightAutoSidebarGroup {
	return {
		label: label,
		...group,
	};
}

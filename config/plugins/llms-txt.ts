import starlightLlmsTxt from 'starlight-llms-txt';

/** Starlight plugin that sets up `starlight-llms-txt` with configuration for the Astro docs. */
export const starlightPluginLlmsTxt = () =>
	starlightLlmsTxt({
		// Basic information about the docs and Astro to display in the main `llms.txt` entry file.
		projectName: 'HollyHock',
		description: 'HollyHock is an c/c++ framework for building programs on casio classpad. ',
		details: [
			'- HollyHock uses a custom trimmed down version of the libc.',
			'- HollyHock have both the version 2 and 3. You should use the version 3 unless asked otherwise.'
		].join('\n'),
		optionalLinks: [
			{
				label: 'The Classpad.Dev blog',
				url: 'https://classpaddev.github.io/blog/',
				description: 'the latest news about Classpad and HollyHock development',
			},
		],

		// Create custom subsets of docs to break things up.
		customSets: [
			{
				label: 'Reference',
				description: 'terse, structured descriptions of HollyHock APIs',
				paths: ['en/reference/**'],
			},
			{
				label: 'How-to Recipes',
				description: 'guided examples of adding features to an HollyHock project',
				paths: ['en/recipes/**'],
			},
			{
				label: 'Python Extra',
				description: 'How to use Python on the classpad',
				paths: ['en/python/**'],
			},
			{
				label: 'Migration Guides',
				description: 'advice on how to migrate to V3 (hh3)',
				paths: ['en/guides/migrate-to-hh3/**'],
			}
		],

		// Control the order of pages in output files.
		promote: [
			'en/concepts/why-astro',
		],

		// Exclude pages from the abridged `llms-small.txt` file designed for smaller context windows.
		exclude: [
			'en/getting-started',
		],
	});

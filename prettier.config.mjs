/** @type {import("prettier").Config} */

export default {
	printWidth: 150,
	tabWidth: 2,
	useTabs: true,

	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'avoid',

	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrderParserPlugins: [
		'classProperties',
		'decorators-legacy',
		'typescript',
	],
	importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^../(.*)', '^./(.*)'],
}
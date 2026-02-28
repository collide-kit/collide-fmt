import type { Config } from 'prettier';

export default {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	jsxSingleQuote: true,
	multilineArraysWrapThreshold: 3,
	plugins: [
		'@prettier/plugin-oxc',
		'prettier-plugin-packagejson',
		'prettier-plugin-sort-json',
		'prettier-plugin-multiline-arrays',
	],
	printWidth: 120,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: [
				'**/node_modules/**',
				'**/.store/**',
				'**/{pnpm-lock.yaml,package-lock.json,yarn.lock}',
				'**/.yarn/{cache,unplugged}/**',
				'**/.pnp.*',
				'**/{dist,build,out,lib,.cache,.turbo}/**',
				'**/lib-*/**',
				'**/*.tsbuildinfo',
				'**/.{next,nuxt,output,vercel,netlify,serverless,docusaurus}/**',
				'**/.vitepress/cache/**',
				'**/.vite-inspect/**',
				'**/{coverage,.nyc_output}/**',
				'**/.{vscode,idea}/**',
				'**/*.{min.js,min.css,bundle.js}',
				'**/vendor/**',
				'**/{auto-import?(s),components,typed-router}.d.ts',
				'**/.changeset/**',
				'**/LICENSE*',
				'**/CHANGELOG*.md',
				'**/__snapshots__',
			],
			options: {
				requirePragma: true,
			},
		},
		{
			files: ['**/*.{json,jsonc,json5,md,mdx,markdown,mdown,yml,yaml}'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
		{
			files: ['**/package.json'],
			options: {
				jsonRecursiveSort: false,
			},
		},
	],
} as Config;

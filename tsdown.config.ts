import { defineConfig } from 'tsdown';
import type { AttwOptions, PublintOptions, WithEnabled } from 'tsdown';

export default defineConfig({
	entry: 'src/index.ts',
	dts: { tsgo: true },
	platform: 'node',
	exports: true,
	publint: {
		enabled: 'ci-only',
		resolvePaths: [import.meta.dirname],
	} as WithEnabled<PublintOptions>,
	attw: {
		enabled: 'ci-only',
		resolvePaths: [import.meta.dirname],
		profile: 'esm-only',
	} as WithEnabled<AttwOptions>,
});

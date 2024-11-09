import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cjsInterop } from 'vite-plugin-cjs-interop';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  publicDir: 'public',
  plugins: [
    remix({
      future: {
        // This will make your life a lot easier, trust me.
        unstable_optimizeDeps: true,

        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
    cjsInterop({
      dependencies: [
        // Add any dependencies that need to be transformed to ESM from CJS here
      ],
    }),
  ],
});

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    writeToDisk: true,
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
});

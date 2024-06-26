import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `@import "src/styles/foundations/_variables.scss";
                                @import "src/styles/foundations/_mixins.scss";`,
            },
          },
        },
      },
});

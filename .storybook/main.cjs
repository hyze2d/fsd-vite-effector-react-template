const path = require('path');

const { mergeConfig }  = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-color-picker',
    'storybook-addon-designs',
    'storybook-addon-breakpoints',
    'storybook-addon-pseudo-states',
    'storybook-addon-measure-viewport',
    '@geometricpanda/storybook-addon-badges'
  ],

  core: {
    builder: '@storybook/builder-vite'
  },

  staticDirs: ['../public'],

  async viteFinal(config, { configType }) {
    const base = await import('../vite.base.config.js');

    return mergeConfig(config, {
      ...base.default,
      build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              let extType = assetInfo.name.split('.').at(1);
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = 'img';
              }
              return `storybook/assets/${extType}/[name]-[hash][extname]`;
            },
           
            chunkFileNames: 'storybook/assets/js/[name]-[hash].js',
         
            entryFileNames: 'storybook/assets/js/[name]-[hash].js',
          },
        },
      },
    });
  }
};

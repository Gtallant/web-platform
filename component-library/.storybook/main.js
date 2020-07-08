const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};

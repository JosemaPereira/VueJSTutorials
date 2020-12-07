const package = require('./package.json');

module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].meta = {
        viewport: 'width=device-width,initial-scale=1.0',
        version: `${package.name}@${package.version}`,
      };

      return args;
    });
  },
};

// extra-webpack.config.js
module.exports = (angularWebpackConfig, options) => {
  angularWebpackConfig.module.rules.push({
    parser: { system: false }
  });

  return angularWebpackConfig;
};
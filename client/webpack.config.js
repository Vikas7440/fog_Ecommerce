const path = require('path');

module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
        exclude: /node_modules/
      },
      // Other rules...
    ],
  },
  // Other configurations...
};

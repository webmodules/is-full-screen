module.exports = {
  entry: './lib/index',
  output: {
    path: './dist',
    filename: 'is-full-screen.js',
    library: 'isFullScreen',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  }
};

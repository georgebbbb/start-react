module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'       
  },
    module: {
    loaders: [
      // { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
    ]
  },
};
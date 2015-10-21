module.exports = {
  entry: './NameManager.js',
  output: {
    filename: './site/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel?optional[]=runtime&stage=0',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
}

const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'assets', 'js')
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

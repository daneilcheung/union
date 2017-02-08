const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./webpack/resolve');
const cssRules = require('./webpack/css-rules').docs;

const DIRECTORY_LOADER = require.resolve('./packages/tools/directory-loader');
const MDJSX_LOADER = require.resolve('./packages/tools/mdjsx-loader');

const patternDocsPath = path.resolve.bind(null, __dirname, 'pattern-library', 'docs');
const ARTICLES_DIR_CONFIG_PATH = patternDocsPath('articles-directory.config.json');


module.exports = {
  context: patternDocsPath(),
  entry: ['prismjs', './src/index.jsx'],
  output: {
    filename: './index.js',
    path: patternDocsPath('build'),
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: patternDocsPath('src', 'index.html'),
      filename: './index.html'
    })
  ],
  resolve: resolve.testAndDocs,
  module: {
    rules: [
      cssRules,
      {
        /*
         * Directory loader should be closer to the top since it doesn't do any parsing
         * The parsing is left to any loader towards the bottom which matches the
         * directory config file name
         * */
        test: ARTICLES_DIR_CONFIG_PATH,
        use: DIRECTORY_LOADER
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.json/,
        use: 'json-loader'
      },
      {
        test: /\.md$/,
        use: ['babel-loader', MDJSX_LOADER]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};

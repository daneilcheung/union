const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rebootCSSPath = require.resolve('../pattern-library/src/bootstrap/reboot.scss');
const {
  typographyCssRules,
  typographyGlobalsPath,
  typographyFontsPath
} = require('./typography-rules');

exports.default = {
  test: /\.s?css$/,
  rules: [
    {
      include: [rebootCSSPath, typographyGlobalsPath],
      exclude: [typographyFontsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          mode: 'local',
          camelize: true
        }
      }
    },
    {
      exclude: [rebootCSSPath, typographyGlobalsPath, typographyFontsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          camelize: true
        }
      }
    },
    ...typographyCssRules
  ]
};

const prismTheme = require.resolve('prism-themes/themes/prism-ghcolors.css');

/**
* Apply a-css-loader only to .css files.
* Use 'local' (not pure) mode for prism theme.
*/
exports.docs = {
  test: /\.css$/,
  rules: [
    {
      exclude: prismTheme,
      use: {
        loader: 'a-css-loader',
        options: {
          camelize: true
        }
      }
    },
    {
      include: prismTheme,
      use: {
        loader: 'a-css-loader',
        options: {
          mode: 'global'
        }
      }
    }
  ]
};

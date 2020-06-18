const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    target: 'web',

    mode: process.env['NODE_ENV'] == 'production' ? 'production' : 'development',

    entry: {
      frontend: [
        "./src/index.tsx"
      ],
    },

    output: {
        filename: `[name]/[hash].js`,
        path: __dirname + "/static"
    },

    devtool: "source-map",

    module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: "ts-loader",
            },

            {
              test: /\.png$/,
              loader: 'file-loader?name=[name].[ext]'
            },
          
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },

            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
            },

            {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
            }
        ]
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
      plugins: [],
      alias: {
        "react": "preact/compat",
        "react-dom": "preact/compat"
      }
    },

    performance: {
      hints: 'warning'
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'My app',
        chunks: ['frontend'],
        filename: 'index.html',
      }),
    ],
};

module.exports = [ config ];

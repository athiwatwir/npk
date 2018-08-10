const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
  // Do not transform vendor's CSS with CSS-modules
  // The point is that they remain in global scope.
  // Since we require these CSS files in our JS or CSS files,
  // they will be a part of our compilation either way.
  // So, no need for ExtractTextPlugin here.
  test: /\.css$/,
  include: /node_modules/,
  use: ['style-loader', 'css-loader'],
},
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: /(node_modules)/,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.(svg)(\?[a-z0-9]+)?$/,
        loader: 'svg-inline-loader'
      },
      {
          test: /\.(ttf|otf)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]',
              },
            },
          ]
      },
      {
                test: /\.(woff(2)?|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
      },
    ],
  },
}

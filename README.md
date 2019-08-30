# native-addon-loader

## Usage

See `test`.

webpack.config

``` js
module.exports = {
  // ...
  target: 'node', // or 'electron-main'
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.node$/,
        use: [
          {
            loader: 'native-addon-loader',
            options: {
              name: 'relative/to/output/path/[name]-[hash].[ext]', // default: '[name].[ext]'
              from: 'js' // default: '.'
            }
          }
        ]
      }
    ]
  }
}

```

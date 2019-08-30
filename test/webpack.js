const webpack = require('webpack')
const path = require('path')

webpack({
  mode: 'development',
  context: __dirname,
  entry: {
    main: [path.join(__dirname, 'index.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devtool: 'none',
  target: 'node',
  module: {
    rules: [
      // ...
      {
        test: /\.node$/,
        use: [
          {
            loader: require.resolve('..'),
            options: {
              name: 'relative/to/output/path/[name]-[contenthash:8].[ext]', // default: '[name].[ext]'
              from: 'js' // default: '.'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.node']
  }
}, function (err, stats) {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats.toString({ colors: true }))
})

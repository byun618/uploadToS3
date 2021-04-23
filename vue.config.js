const fs = require('fs')
const webpack = require('webpack')

const packageJSON = fs.readFileSync('./package.json')
const version = JSON.parse(packageJSON).version || 0

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/uploadToS3/' : '/',
  outputDir: 'docs',
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       'process.env': {
  //         PACKAGE_VERSION: `"${version}"`,
  //       },
  //     }),
  //   ],
  // },
}

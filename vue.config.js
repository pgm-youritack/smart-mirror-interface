const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [      new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),]
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  }
}

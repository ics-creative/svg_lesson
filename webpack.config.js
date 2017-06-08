// ビルド設定ファイル
const buidConfig = require("./build_config")

const entry = {}

/** webpackの設定ファイルです。 */
let webpackConfig = {
  entry: buidConfig.tsEntryFiles,
  output: {
    filename: "[name].js"
  },
  cache: true,
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  }
}

module.exports = webpackConfig

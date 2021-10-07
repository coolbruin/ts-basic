const path = require('path');

module.exports = {
  entry: { // 起点のファイル
    bundle: './src/index.ts'
  },
  output: { //　バンドルした設定値を出力する
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: { //　fileの拡張子を書く必要を省く
    extensions: ['.ts', '.js']
  },
  devServer: { //　dev環境の設定
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true // ローカルサーバーを立ち上げた時にブラウザを起動する
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}
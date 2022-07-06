import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

const dllPath = 'public/dll'
const dllConfig: webpack.Configuration = {
  mode: 'production',
  entry: {
    // 可以根据需要添加对应的库，这样有利于提高构建速度，添加或者删除之后重新运行yarn dll,
    vue: ['vue', 'pinia'],
    vue_router: ['vue-router'],
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../', dllPath),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../', dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
    }),
  ],
}

export default dllConfig

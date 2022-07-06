import webpack, { ProgressPlugin } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

const dllPath = 'public/dll'
const baseConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src', 'main.ts'),
  // target: 'browserslist',
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    // 创建按需加载的异步 chunk
    asyncChunks: true,
    // 告知 webpack 在写入到输出文件系统时检查输出的文件是否已经存在并且拥有相同内容。
    compareBeforeEmit: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        oneOf: [
          {
            test: /\.(j|t)sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            // 下面是使用ts-loader对ts或者tsx进行转换，我们这里使用babel-loader进行统一转换
            // loader: 'ts-loader',
            // options: {
            //   //   transpileOnly: true,
            //   appendTsSuffixTo: [/\.vue$/],
            // },
          },
          {
            test: /\.less$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              'less-loader',
              'postcss-loader',
            ],
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 25 * 1024, // 25kb
              },
            },
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      '@': [path.resolve(__dirname, '../src')],
    },
    extensions: ['.vue', '.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist', 'index.html'),
      // 网站title
      title: 'vue-admin',
      // 你可以将minify 设置为true，将会压缩打包之后的html文件
      minify: false,
      inject: 'body',
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),

    new VueLoaderPlugin(),
    // 显示打包进度
    new ProgressPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../', dllPath, 'vue-manifest.json'),
    }),
  ],
}

export default baseConfig

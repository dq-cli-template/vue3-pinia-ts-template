import { merge } from 'webpack-merge'
import baseConfig from './webpack.config.base'
import devConfig from './webpack.config.dev'
import prodConfig from './webpack.config.prod'

const config = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return merge(baseConfig, prodConfig)
    case 'development':
      return merge(baseConfig, devConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}
export default config

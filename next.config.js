const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const typescript = require('@zeit/next-typescript')
const offline = require('next-offline')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const plugins = [
  withCSS,
  typescript,
  [offline, ['!', PHASE_DEVELOPMENT_SERVER]]
]

const config = {
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10e4
          }
        }
      ]
    })

    return config
  }
}

module.exports = withPlugins(plugins, config)

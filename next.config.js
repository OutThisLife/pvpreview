const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const compose = require('next-compose-plugins')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withCss = require('@zeit/next-css')
const withTsc = require('@zeit/next-typescript')
const withSw = require('next-offline')
const withImg = require('next-optimized-images')

const plugins = [
  withCss,
  withTsc,
  [
    withImg,
    {
      svgo: {
        plugins: [{ removeViewbox: false }]
      }
    }
  ],
  [withSw, ['!', PHASE_DEVELOPMENT_SERVER]]
]

const config = {
  target: 'serverless',
  env: {
    twitchId: 'w9gkqwqu67fn0x86ysbzffsf92qa8j',
    reviews: readdirSync('./content').filter(s =>
      lstatSync(join('./content', s)).isDirectory()
    )
  },
  webpack(c) {
    c.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {
            pedantic: true,
            renderer: new require('marked').Renderer()
          }
        }
      ]
    })
    return c
  }
}

module.exports = compose(
  plugins,
  config
)

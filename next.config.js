const compose = require('next-compose-plugins')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withCss = require('@zeit/next-css')
const withTsc = require('@zeit/next-typescript')
const withMdx = require('@next/mdx')
const withSw = require('next-offline')
const withImg = require('next-optimized-images')

const plugins = [
  withCss,
  withTsc,
  withMdx,
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
  target: 'serverless'
}

module.exports = compose(
  plugins,
  config
)

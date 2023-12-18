/* eslint-disable @typescript-eslint/no-var-requires */

const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['tailwind-elements.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ["@whatwg-node"],
  },
})

module.exports = nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  reactStrictMode: true, // was there by default
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: 'raw-loader'
    })

    // Important: return the modified config
    return config
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  ...withBundleAnalyzer({})
}

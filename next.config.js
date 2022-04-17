module.exports = {
  reactStrictMode: true,
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    })
    return config
  },
}

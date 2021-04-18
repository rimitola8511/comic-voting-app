module.exports = {
  devServer: {
    proxy: {
      '/info.0.json': {
        target: 'https://xkcd.com',
        changeOrigin: true
      }
    }
  }
}
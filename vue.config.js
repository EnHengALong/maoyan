module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ad.maoyan.com',
        ws: true,
        changeOrigin: true
      },
      '/mmdb': {
        target: 'https://api.maoyan.com',
        ws: true,
        changeOrigin: true
      },
      '/maoyansh': {
        target: 'https://wx.maoyan.com',
        ws: true,
        changeOrigin: true, //跨域访问
      },
      '/sns': {
        target: 'https://api.maoyan.com',
        ws: true,
        changeOrigin: true, //跨域访问
      }
    }
  }
}
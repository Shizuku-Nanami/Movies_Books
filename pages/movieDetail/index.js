// index.js 
// @2018-Now ShizukuNanami All rights reserved
Page({
  data: {
    movie: {}
  },
  onLoad: function(options) {
    const movieId = options.id;
    const that = this;
    wx.request({
      url: 'http://localhost:3000/movie?id=' + movieId,
      success: function(res) {
        const movie = res.data[0];
        that.setData({
          movie: movie
        });
      }
    });
  }
});

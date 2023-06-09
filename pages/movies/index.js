// index.js 
// @2018-Now ShizukuNanami All rights reserved
Page({
  data: {
    movies: []
  },
  onLoad: function () {
    const that = this;
    wx.request({
      url: 'http://localhost:3000/movie',
      success: function (res) {
        const movies = res.data;
        that.setData({
          movies: movies
        });
      }
    });
  },
  viewMovieDetail: function(event) {
    const movieId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/movieDetail/index?id=' + movieId,
    });
  }
});
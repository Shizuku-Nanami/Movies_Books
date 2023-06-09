// index.js 
// @2018-Now ShizukuNanami All rights reserved
Page({
  data: {
    book: {}
  },
  onLoad: function(options) {
    const bookId = options.id;
    const that = this;
    wx.request({
      url: 'http://localhost:3000/book?id=' + bookId,
      success: function(res) {
        const book = res.data[0];
        that.setData({
          book: book
        });
      }
    });
  }
});

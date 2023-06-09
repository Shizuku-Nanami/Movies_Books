// index.js 
// @2018-Now ShizukuNanami All rights reserved
Page({
  data: {
    books: []
  },
  onLoad: function () {
    const that = this;
    wx.request({
      url: 'http://localhost:3000/book',
      success: function (res) {
        const books = res.data;
        that.setData({
          books: books
        });
      }
    });
  },
  viewBookDetail: function(event) {
    const booksId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/booksDetail/index?id=' + booksId,
    });
  }
});
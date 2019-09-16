//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    serial_number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    list: undefined
  },
  onLoad: function() {
    this.load_class_list();
  },
  load_class_list() {
    wx.request({
      url: 'http://h5.catsjuice.cn/getClassList',
      data: {},
      success: (res) => {
        this.setData({
          list: res.data
        })
      },
      fail: (res) => {
        console.log(res.data)
      }
    })

  }
})
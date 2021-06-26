// pages/partner/partner.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // console.log("获取数据" + event)
    // console.log(options.id)
    // wx.cloud.database().collection('college')
    //   .get()
    //   .then(res => {
    //     console.log("详情页成功")
    //     console.log(res)
    //     this.setData({
    //       datalist: res.data
    //     })
    //   })
    //   .catch(res => {
    //     console.log("详情页失败", res)
    //   })
    // console.log("详情页接受的id", options._id)
    // console.log(options); 
    wx.cloud.database().collection('canteen')
    .get()
    .then(res => {
      console.log("详情页成功")
      console.log(res)
      this.setData({
        datalist: res.data
      })
    })
    .catch(res => {
      console.log("详情页失败", res)
    })
  },

  tz:function(event) {
    console.log(event)
    // wx.navigateTo({
    //   url: '/pages/details/details?id=' + res.currentTarget.id
    // })
  },

  // onLoad: function (options) {
  //   db.collection('canteen')
  //   .get().then(res=>{
  //     console.log(res)
  //   })
  // },

  /*
   生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
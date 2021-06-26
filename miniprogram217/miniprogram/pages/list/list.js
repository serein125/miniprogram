// pages/partner/partner.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    marker_0:[{
      id: 1,
      latitude: 39.091331,
      longitude: 117.09802,
      width: 20,
      height: 20,
      title: '理学院/经管学院'
    }],
    latitude: 39.094968,
    longitude: 117.095444,
  },

  test: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success :(res)=>{
        const latitude = res.latitude
        const longitude = res.longitude
        // var lat=this.data.markers_0[0].latitude
        // var log=this.data.markers_0[0].longitude
        if(this.data.marker_0[0].id==3){
        wx.openLocation({
          // latitude:lat,
          // longitude:log,

          //终点
          latitude: 39.140743,
          longitude: 117.305442,
          address:"wadsdasdsdasdasdasd",
          scale: 18
        })
      }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
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
const db=wx.cloud.database()

Page({
  data:{
    detail:''
  },
  onLoad(options) {
    console.log(options.id)
    wx.cloud.database().collection("college")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("学院详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("学院详情页失败", res)
      })

      wx.cloud.database().collection("canteen")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("食堂详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("食堂详情页失败", res)
      })

      // console.log("详情页接受的id", options._id)
      // console.log(options); 
    }

    // onLoad: function (options) {
    //   db.collection('college')
    //   .get().then(res=>{
    //     console.log(res)
    //   })
    // },
})
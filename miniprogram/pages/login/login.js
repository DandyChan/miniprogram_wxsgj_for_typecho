const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 比对openId
  oauth(openId){
    const db = wx.cloud.database()
    console.log('======= oauth =======')
    console.log(openId)

    // 检查是否为开发提审模式
    db.collection('DevMode').where({
      isDev: true
    }).get({
      success: (r) => {
        console.log('==== isDev =====')
        console.log(r)
        // isDev: true
        if(r.data.length > 0){
          wx.hideLoading()
          wx.redirectTo({
            url: '/pages/sgjMain/sgjMain?isDev=' + true,
          })
        }else{
        // isDev: false  
          db.collection('user').where({
            openId: openId
          }).get({
            success: (res) => {
              console.log(res)
              wx.hideLoading()
              if(res.data.length == 0){
                wx.showToast({
                  title: '只限KatCloud管理员登录',
                  icon: 'none',
                  duration: 2000
                })
              }else{
                wx.redirectTo({
                  url: '/pages/sgjMain/sgjMain',
                })
              }
            }
    // wx.showLoading({
    //   title: '登录中...',
    //   mask: true,
    // })
    db.collection('user').where({
      openId: openId
    }).get({
      success: (res) => {
        console.log(res)
        wx.hideLoading()

        if(res.data.length == 0){
          wx.showToast({
            title: '只限KatCloud管理员登录',
            icon: 'none',
            duration: 2000
          })
        }else{
          wx.redirectTo({
            url: '/pages/sgjMain/sgjMain',
          })
        }
      }
    })
  },

  // 获取open ID进行比对
  login(){
    wx.showLoading({
      title: '正在验证...',
    })
    wx.cloud.callFunction({
      name: 'login',
      success: (res) => {
        console.log(res)
        const openId = res.result.userInfo.openId
        console.log(openId)
        app.globalData.openId = openId
        this.oauth(openId)
      },
      fail: (e) => {
        wx.showToast({
          title: '调用失败，请重试',
          icon: 'none',
          duration:　2000
        })
      }
    })
  }
})
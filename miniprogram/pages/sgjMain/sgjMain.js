import{
  formCheck
} from '../../utils/submitCheck.js'

<<<<<<< HEAD
const app = getApp();

=======
>>>>>>> a203bf8b2e5537fe7e97f109a8f6f0352b3787e0
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    // 表情包数组
    paopao: [],
    quyinniang: [],
    alu: [],
    yanwenzi: [],
    
    // 表情框
    showBiaoqing: false,

    // 表情框选择
    active: 0,

    // 文本域内容
    con: '',
=======
    con: ''
>>>>>>> a203bf8b2e5537fe7e97f109a8f6f0352b3787e0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    console.log(options)
    if(options.isDev){
      wx.showModal({
        title: 'Dev Mode Warning',
        content: '目前是开发提审模式，不检查openID合法性。',
        showCancel: false
      })
    }
    // 拿到表情json
    wx.request({
      url: app.globalData.baseUrl + 'THE EMOTICON JSON PATH',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          paopao: res.data.泡泡.container,
          quyinniang: res.data.蛆音娘.container,
          alu: res.data.阿鲁.container,
          yanwenzi: res.data.颜文字.container
        })
      }
    })
=======

>>>>>>> a203bf8b2e5537fe7e97f109a8f6f0352b3787e0
  },

  onShow: function () {
    wx.hideHomeButton()
  },

<<<<<<< HEAD
  // 监听文本域value
  sgjInput(e){
    console.log('======== sgjInput ========')
    console.log(e.detail.value)
    this.setData({
      con: e.detail.value
    })
  },

  // 点击表情事件
  getBiaoqing(e){
    console.log('======== getBiaoqing =======')
    console.log(e.currentTarget.dataset.bqid)
    this.setData({
      con: this.data.con + e.currentTarget.dataset.bqid
    })
  },

  // show表情框
  showBiaoqing(){
    this.setData({
      showBiaoqing: true
    })
    // this.selectComponent('#tabs').resize();
  },

  // hide表情框
  hideBiaoqing(){
    this.setData({
      showBiaoqing: false
    })
  },

  // 表情框标签
  biaoqingActive(e){
    console.log(e.detail)
    this.setData({
      active: e.detail
    })
  },

  // 发送时光机
  sendSGJ(submit){
    console.log('========= submit =========')
=======
  // 发送时光机
  sendSGJ(submit){
>>>>>>> a203bf8b2e5537fe7e97f109a8f6f0352b3787e0
    console.log(submit)
    const content = submit.detail.value.sgj
    console.log(content)
    // 判断内容是否为空
    if(formCheck(content)){
      wx.showToast({
        title: '内容不能为空！',
        icon: 'none',
        duration:　1500
      })
    }else{
      // 拿当前时间
      const timeStamp = Date.parse(new Date())
      const time = timeStamp/1000
      console.log(time)
      // showloading
      wx.showLoading({
        title: '正在发送',
        mask: true
      })
      // request
      wx.request({
<<<<<<< HEAD
        url: app.globalData.baseUrl + 'WXINDEXANDPASSWORD.php',
=======
        url: 'https://xxx.com/wxindex.php',
>>>>>>> a203bf8b2e5537fe7e97f109a8f6f0352b3787e0
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          time: time,
          content: content
        },
        success: (res) => {
<<<<<<< HEAD
          console.log('========== response result ========')
=======
>>>>>>> a203bf8b2e5537fe7e97f109a8f6f0352b3787e0
          console.log(res)
          wx.hideLoading()
          if(res.statusCode == 200){
            wx.showToast({
              title: '时光机发送成功！',
              duration: 2000
            })
            // 清空文本域
            this.setData({
              con: ''
            })
          }else{
            wx.showToast({
              title: '发送出现错误(' + res.statusCode + ')',
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail: (e) => {
          wx.showToast({
            title: '连接出现错误(' + res.statusCode + ')',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  }  
})
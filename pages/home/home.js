// pages/home/home.js
Page({
  data: {

  },
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗成功')
      },
      complete() {
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      success: function(res) {
        console.log(res);
        if(res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      },
      // showCancel: false, // 设置取消按钮不显示
      cancelText: '退出', // 修改取消按钮的文字
      cancelColor: 'red', // 修改取消按钮的颜色
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true, // 阻止页面的交互
    })
    setTimeout(() => {
      // 必须手动调用wx.hideLoading才会让loading消失
      wx.hideLoading({
        success: (res) => {},
      })
    },1000)
    
  },
  handleShowActive() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
      }
    })
  },

  onShareAppMessage: function(options) {
    return {
      title: '你好啊!!!',
      path: '/pages/about/about',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    }
  }
})

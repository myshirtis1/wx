
Page({
    data: {
      

    },
  onReady: function () {
        var that = this
        wx.request({
          url: 'http://127.0.0.1:5000/get_all_msg',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                //将获取到的json数据，存在名字叫list的这个数组中
                that.setData({
                    list: res.data,
                })
            }
        })
    },
  
  onPullDownRefresh() {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:5000/get_all_msg',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫list的这个数组中
        that.setData({
          list: res.data,
        })
      }
    })
    
    wx.showToast({
      title: '加载中....',
      icon: 'loading'
    })
  }        
})

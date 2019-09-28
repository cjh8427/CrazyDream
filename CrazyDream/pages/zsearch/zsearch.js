// pages/zdetail/zdetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      {
        title: "没有更多数据了",
      },
      {
        title: "返回查询其他内容",
      },
      {
        title: "结果帮到你了？转发给朋友看吧！",
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.query);
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', { data: 'test' });
    eventChannel.emit('someEvent', { data: 'test' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      console.log(data);
      wx.request({
        url: `http://zhouxunwang.cn/data/?id=60&key=UL3E8YNvTov+jJyN9Yo7Q2/HOATgsJeZ/px07Q&q=${data}`,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          console.log(res.data.result);
          if (res.data.result) {
            this.setData({
              arr: res.data.result
            })
          }
        }
      })
    })
  },
  gotodetail(e) {
    console.log(e);
    console.log(e.target.dataset.id);
    console.log(this.data.arr[e.target.dataset.id]);
    var obj = this.data.arr[e.target.dataset.id];
    var key = obj.title;
    var detail = obj.des;
    wx.navigateTo({
      url: '/pages/zdetail/zdetail',
      events: {
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: {
            key,
            detail
          }
        })
      }
    })
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
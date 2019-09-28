// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:""
  },
  gotoMore(){
    wx.navigateTo({
      url:'/pages/more/more'
    })
  },
  gotoDream(res){
    wx.navigateTo({
      url: '/pages/dream/dream?keyword='+this.data.keyword,
    });
    this.setData({
      keyword: "" 
    })
  },
  getKeyWord(e){
    // console.log(e);
    this.setData({
      keyword: e.detail.value 
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '周公解梦',
      path: '/pages/home/home',
      imageUrl:'../../images/timg.jpg'
    }
  }
})
// pages/dignDetail/dignDetail.js
const {
  http
} = require("../../utils/ajax.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xzname: "",
    time: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    // this.data.xzname = options.value;
    this.setData({
      xzname: options.value
    })
    http({
      url: "http://zhouxunwang.cn/data/?id=17&key=U7zD/YllHtr+ipOB9Yo2QmfDMwTgsJeZ/pxz6g&consName=%E7%99%BD%E7%BE%8A%E5%BA%A7&type=today",
      method: "get",
      success: result=>{
        console.log(result);
        console.log(result.data.datetime);
        this.setData({
          time: result.data.datetime
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
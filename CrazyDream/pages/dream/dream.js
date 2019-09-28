// pages/dream/dream.js
const {http} = require("../../utils/ajax");
Page({

  /**
   * 页面的初始数据
   */

  data: {
    key:"UL3E8YNvTov+jJyN9Yo7Q2/HOATgsJeZ/px07Q",
    textList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    http({
      url:"http://zhouxunwang.cn/data/?id=60",
      method:"get",
      data:{
        key:this.data.key,
        q:options.keyword
      },
      success:res=>{
        console.log(res);
        this.setData({
          textList:res.data.result
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
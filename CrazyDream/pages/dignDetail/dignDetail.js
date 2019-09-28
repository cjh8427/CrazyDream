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
    time: "", // 查询时间
    all: "", // 综合指数
    color: "", // 幸运色
    health: "", // 健康
    number: "", // 幸运颜色
    QFriend: "", // 速配星座
    summary: "", // 总结
    work: "", // 工作指数
    love: "", // 爱情指数
    money: "", // 财运指数
    istoday: true, // 是否选中了today
    moneyluck: "", // 财运运势
    workluck: "", // 工作运势
    loveluck: "", // 爱情运势
  },
  today(e){
    console.log("today天点击: ", e)
    this.setData({
      istoday: true
    })
  },
  week(e){
    console.log("week星期点击: ", e);
    this.setData({
      istoday: false
    })
    console.log(this.data.xzname, e.currentTarget.dataset.value);
    http({
      url: "http://zhouxunwang.cn/data/?id=17&key=U7zD/YllHtr+ipOB9Yo2QmfDMwTgsJeZ/pxz6g&consName=" + this.data.xzname+"&type=week",
      method: "get",
      success: result => {
        console.log("week: ", result);
        this.setData({
          moneyluck: result.data.money,
          workluck: result.data.work,
          loveluck: result.data.love,
          time: result.data.date
        })
      }
    })
  },
  month(e){
    console.log("month月份点击: ", e);
    this.setData({
      istoday: false
    })
    console.log(this.data.xzname, e.currentTarget.dataset.value);
    http({
      url: "http://zhouxunwang.cn/data/?id=17&key=U7zD/YllHtr+ipOB9Yo2QmfDMwTgsJeZ/pxz6g&consName=" + this.data.xzname+"&type=month",
      method: "get",
      success: result=>{
        console.log(result);
        this.setData({
          time: result.data.date,
          moneyluck: result.data.money,
          workluck: result.data.work,
          loveluck: result.data.love
        })
      }
    })
  },
  year(e){
    console.log("year年点击: ", e);
    this.setData({
      istoday: false
    })
    console.log(this.data.xzname, e.currentTarget.dataset.value);
    http({
      url: "http://zhouxunwang.cn/data/?id=17&key=U7zD/YllHtr+ipOB9Yo2QmfDMwTgsJeZ/pxz6g&consName=" + this.data.xzname+"&type=year",
      method: "get",
      success: result => {
        console.log("result: ", result);
        this.setData({
          time: result.data.date,
          moneyluck: result.data.finance[0],
          workluck: result.data.career[0],
          loveluck: result.data.love[0]
        })
      }
    })
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
          time: result.data.datetime, // 时间
          all: result.data.all, // 综合指数
          color: result.data.color, // 幸运色
          health: result.data.health, // 健康
          number: result.data.number, // 幸运颜色
          QFriend: result.data.QFriend, // 速配星座
          summary: result.data.summary, // 总结
          work: result.data.work, // 工作指数
          love: result.data.love, // 爱情指数
          money: result.data.money, // 财运指数
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
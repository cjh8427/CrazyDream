

Page({
  data: {
    focus: false,
    inputValue: '',
    imgarr: [
      "./image/pic1.jpeg",
      "./image/pic2.jpg",
      "./image/pic3.png",
      "./image/pic4.jpeg",
      "./image/pic5.jpg",
      "./image/pic6.png",
      "./image/pic7.jpeg",
      "./image/pic8.jpeg",
      "./image/pic9.jpg",
      "./image/pic10.jpg"

    ],
    textarr: [
      "人物类",
      "身体类",
      "情感类",
      "动物类",
      "植物类",
      "物品类",
      "生活类",
      "鬼神类",
      "自然类",
      "建筑类"
    ],
    textarr1: [
      "梦见老伯伯变成小孩",
      "梦见警卫",
      "梦见演员",
      "梦见灰姑娘",
      "梦见小孩从高处摔下来",
      "梦见同学大肚子",
      "梦见老太太",
      "梦见亲吻女朋友",
      "梦见高僧说教",
      "梦见在驾驶座手足无措",
    ],
    positionmsg: {
      left: 180,
      top: 220,
    }

  },
  onLoad: function (options) {

  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    var ctx = wx.createCanvasContext('firstCanvas');
    // 右边白色的半圆
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(100, 100, 100, (Math.PI / 180) * 270, (Math.PI / 180) * 90);
    ctx.fill();

    // 左边黑色的圆
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(100, 100, 100, (Math.PI / 180) * 270, (Math.PI / 180) * 90, true);
    ctx.fill();
    // 左边白色的小圆
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(100, 50, 50, (Math.PI / 180) * 270, (Math.PI / 180) * 90, true);
    ctx.fill();

    // 右边黑色的小圆
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(100, 150, 50, (Math.PI / 180) * 270, (Math.PI / 180) * 90);
    ctx.fill();

    // 黑色的小圆点
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(100, 50, 15, 0, Math.PI * 2);
    ctx.fill();

    // 白色的小圆点
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(100, 150, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.draw();
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

})










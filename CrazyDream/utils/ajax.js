

exports.http = function({url,method,data,success}){
    wx.showLoading({title: '加载中'});
    wx.request({
      url,
      method,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:res=>{
        wx.hideLoading();
        wx.showToast({
          title:res.data.reason
        });
        success(res);
      }
    })
}
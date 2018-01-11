//index.js
Page({
  data: {

  },

  onLoad: function () {

  },

  //事件处理函数
  bindViewTap: function () { 
    var that = this;
    //提示语的使用方法
    that.setData({
      is_modal_Hidden: true,     //控制显示和隐藏
      is_modal_icon: 'success',   //成功和失败提示语，支持success和warm
      is_modal_title: '预约成功',
      is_modal_desc: '恭喜您,预约成功！'
    })
  },
})

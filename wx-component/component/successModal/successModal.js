// component/successModal/successModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //这里定义了modalHidden属性，属性值可以在组件使用时指定.写法为modal-hidden  
    modalHidden: {
      type: Boolean,
      value: true
    },
    modalIcon: {
      type: String,
      value: ' ',
    },
    modalTitle: {
      type: String,
      value: ' ',
    },
    modalDesc: {
      type: String,
      value: ' ',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 这里是自定义方法
    modal_click_Hidden: function () {
      this.setData({
        modalHidden: false,
      })
    },
  }
})

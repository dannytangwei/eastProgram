// pages/index/homeView/homeView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    code:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpToActivityForm() {
      wx.navigateTo({
        url: '../../pages/milk/milk',
      })
    },
    codeChange(){
      this.setData({
        code: e.detail.detail.value
      })
    },
  }
})
// components/like/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties:{
    /*属性也可被数据绑定 */
    like:{
      type:Boolean,

    },
    count:{
      type:Number
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
      //数据绑定
      //三元表达式
      //组件封装，开放，粒度
      
      yesSrc:'images/like.png',
      noSrc:'images/like@dis.png'
  },

  /**
   * 组件方法列表
   */
  methods:{
    onLike:function(event){
      let like=this.properties.like
      let count=this.properties.count
      count=like?count-1:count+1
      /*数据更新 */
      this.setData({
        count:count,
        like:!like
      })
    }
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
  onShareAppMessage: function () {

  }
})
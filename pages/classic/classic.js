// pages/classic/classic.js
//组件绝对路径     import相对路径
// import {HTTP} from '../../util/http.js'
import {ClassicModel}from '../../models/classic.js'
import {LikeModel}from '../../models/like.js'
// let htp=new HTTP()
let classicModel=new ClassicModel()
let likeModel=new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null
  //  test:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      //回调函数
      this.setData({
        classic:res
        // test:2  数据更新
      })
    

    })
    /*
    http.request({
      url:'classic/latest',
      success:(res)=>{
        console.log(res)
      }
    })
*/
  //  wx.request({//异步
  //     url:'http://bl.7yue.pro/v1/classic/latest',
  //   header:{
  //     appKey:"an2GxVWfNvRloQhd"
  //   },
  //   success:(res)=>{
  //     console.log(this.data.test)
  //   }
    /*
    //回调地狱
    success:(res)=>{
      console.log(this.data.test)
      wx.request({
        success:(res)=>{
          wx.request({
            success:(res)=>{

            }
          })
        }
      })
    }
    */
    // })
    
     },
       
     onLike:function(event){
      console.log(event)
      let behavior=event.detail.behavior
      likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
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
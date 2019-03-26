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
    classic:null,
    first:false,
    latest:true,
    likeCount:0,
    likeStatus:false
  //  test:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      // this._getLikeStatus(res.id,res.type)
      // console.log('${this.test()}456')
      //回调函数
      this.setData({
        classic:res,
        likeCount:res.fav_nums,
        likeStatus:res.like_status

        //es6扩展运算符----...res
        // test:2  数据更新
      })
    //latestClassic  currentClassic latestIndex currentIndex

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

     //模板字符串
    //  test:function(){
    //   return 123
    //  }
       
     onLike:function(event){
      console.log(event)
      let behavior=event.detail.behavior
      likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
    },
    onNext:function(event){
      this._updateClassic('next')
    },
    onPrevious:function(event){
      // let index=this.data.classic.index
      // classicModel.getPrevious(index,(res)=>{
      //   // console.log(res)
      //   this.setData({//数据更新
      //     classic:res,
      //     latest:classicModel.isLatest(res.index),
      //     first:classicModel.isFirst(res.index)
      //   })
      // })
      this._updateClassic('previous')

    },
  

    _updateClassic:function(nextOrPrevious){//封装按钮
      let index=this.data.classic.index
      classicModel.getClassic(index,nextOrPrevious,(res)=>{
        // console.log(res)
        this.setData({//数据更新
          classic:res,
          latest:classicModel.isLatest(res.index),
          first:classicModel.isFirst(res.index)
        })
      })
    },
    
    _getLikeStatus:function(artID,category){
      likeModel.getClassicLikeStatus(artID,category,(res)=>{
        this.setData({
          likeCount:res.fav_nums,
          likeStatus:res.like_status
        })
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
// components/search/index.js
import {KeywordModel} from '../../models/keyword.js'
const keywordModel=new KeywordModel()
import {BookModel} from '../../models/book.js'
import { start } from 'repl';
const bookModel=new BookModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more:{
      type:String,
      observer:'_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    hotWords:[],
    dataArray:[],
    searching:false,
    q:''

  },
  attached(){
    const historyWords=keywordModel.getHistory()
    const hotWords=keywordModel.getHot()
    this.setData({
      // historyWords:historyWords
      historyWords
    })
    hotWords.then(res=>{
      this.setData({
        hotWords:res.hot
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //加载更多
    _load_more(){
      const length=this.data.dataArray.length
      bookModel.search(length,this.data.q).then(res=>{
        this.data.dataArray

        const tempArray=this.data.dataArray.concat(res.books)
        this.setData({
          dataArray:tempArray
        })
      })
    },
    onCancel(event){
      this.triggerEvent('cancel',{},{})
    },
    onDelete(){
      this.setData({
        searching:false
      })
    },
    onConfirm(event){
      this.setData({
        searching:true
      })
      const q=event.detail.value||event.detail.text
      // keywordModel.addToHistory(q)
      // const q=event.detail.value
      bookModel.search(0,q).then(res=>{
        this.setData({
          dataArray:res.books,
          q:q
        })
        keywordModel.addToHistory(q)
      })
    }
    
  }
})

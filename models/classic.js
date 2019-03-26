import {
    HTTP
} from '../util/http.js'
class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.index)
                let key=this._getKey(res.index)
                wx.setStorageSync(res,key)
            }
        })
    }

    getClassic(index,nextOrPrevious,sCallback) {//封装上下期按钮
        /*
        缓存中寻找or API写入到缓存中
        key确定key
        */
       let key=nextOrPrevious=='next'? this._getKey(index+1):this._getKey(index-1)
       let classic=wx.getStorageSync(key)
       if(!classic){
        this.request({
            //模板字符串

            // url: 'classic/' + index +'/'+ nextOrPrevious,
            url: 'classic/${index}/${nextOrPrevious}',
            success: (res) => {
                wx.setStorageSync(this._getKey(res.index),res)
                sCallback(res)

            }
        })
    }else{
        sCallback(classic)
    }
}
    /*
    getPrevious(index, sCallback) {
        this.request({
            url: 'classic/' + index + '/previous',
            success: (res) => {
                sCallback(res)

            }
        })
    }
    getNext(){

    }
    */
    isFirst(index) { //判断最新一期
        return index == 1 ? true : false
    }
    isLatest(index) {
        let latestIndex = this._getLatestIndex()
        return latestIndex == index ? true : false
    }
    _setLatestIndex(index) { //同步缓存---存入缓存
        wx.setStorageSync('latest', index)


    }
    _getLatestIndex() { //读取缓存
        let index = wx.getStorageSync('latest')
        return index
    }
    _getKey(index){
        let key='classic-'+index
        return key
    }
}
export {
    ClassicModel
}
let username=''
let userimage=''
let newpinglun={name:'',content:'',image:''}
let d_id=''
let meal_id=''//由detail页面传递的菜品编号的信息
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pinglun:[],
    content:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db=wx.cloud.database()
    const _=db.command
    d_id=options.d_id
    meal_id=options.id
    var userInfo= wx.getStorageSync('user');//判断用户是否登录
    username=userInfo.nickName//获取用户的头像和昵称
    console.log(username)
    userimage=userInfo.avatarUrl
    if(userInfo == ''){
      wx.showModal({
        title: '提示',
        content: '请您先前往“我的”页面授权登录',
        showCancel: false,
        success (res){
          if (res.confirm) {
            wx.navigateBack({
            })
          } 
        }
      })
    }
    wx.cloud.database().collection("canteen1")
    .doc(options.d_id)
    .get()
    .then(res=>{
      console.log("sucess",res)
      this.setData({
        pinglun:res.data.dangkou.meal[options.id].pj,
        
      })
      // 获取原来所有的菜品评价存到pinglun数组中
    })
    .catch(res=>{
      console.log("failed",res)
    })
    
  },
 
   // 获取input用户输入的评论
  getContent(e){
   this.setData({
    content:e.detail.value
   }) 
  },
  // 用户点击发表评论
  fabiao()
  {
    let content=this.data.content
    if(content.length<1)
    {
      wx.showToast({
        icon:'none',
        title: '请先输入评论',
      })
    }
    // 创建新的评论对象并插入
    newpinglun.content=content
    newpinglun.name=username
    newpinglun.image=userimage//此处用云函数换为用户名称
    let pinglunArr=this.data.pinglun
    console.log(username)
    console.log(newpinglun.username)
    pinglunArr.push(newpinglun)
    console.log(pinglunArr)
    wx.showLoading({
      title: '发布中',
    })
    wx.cloud.callFunction(
      {
        name:'pj',
        data:
        {
        canteen:'canteen1',
        dangkou:d_id,
        meal_id:meal_id,
        pj:pinglunArr,
        }
        
      }
    ).then(res=>{console.log("发表成功",res)
  this.setData({
    pinglun:pinglunArr,
    content:''
  })
  wx.hideLoading()
  }).catch(res=>{console.log("发表失败",res)
  wx.hideLoading()})
  },
  
  

})
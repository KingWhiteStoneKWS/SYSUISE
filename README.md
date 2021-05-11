###### 代码提交要求
每次代码提交需在qq群中通知并写好批注

在敲代码时多多注释

文件名简单好懂一点谢谢谢谢

每次开发前记得看看自己电脑上的是不是最新的版本！！！不是就先克隆一下

# HITSZ_recipe小程序的一些想法


## 主要定位

1.向学校师生罗列食堂的菜品信息，包括价格味道风评  
2.方便其能通过自身需求按分类查找菜品，如想找家乡菜，喜欢吃甜，吃辣  
3.新菜品推荐，新店铺推荐，菜品热度排行榜  

### 　整体架构
首页  
  1-上方为搜索框
  其次为轮播图（可以是食堂图片，也可以是菜品图片，点击可以直接进入该页面）  
  其次为分类食堂1、2、3、4（建设中）  
    2-点击分类后跳转到菜品选择页（按档口分类罗列！！！）  
      3-点击菜品进入详情页  
      详情页组成为图片+价格+所属食堂+菜品描述  
      详情页下方为评论区  
      评论区有评论及点赞功能  

搜索
  1-搜索框（带文字）  
  下方为搜索历史  
   2-热度排行榜   
    点击可以直接跳转到该菜品页  

我的
  1-个人信息  
  2-评论历史  
  3-收藏（待定）  
  4-意见与反馈  
  5-关于我们  




#### 1.菜品分类（按标签的id共同特征来分类？）

按地域分：例家乡菜  

dongbei,sichuan,hunan,guangdong,

按食堂分：1234（包含营业时间）  

按早中晚分:
morning,noon,afternoon

按口味分：甜咸辣酸 清淡  

sweet,salt,spicy,sour,light

#### 2.每道菜信息

图片(用户可上传)：图片管理，图床，链接调用  

名称  

价格  

口味打分：辣度，甜度（用户）  

菜品做法？(no这个不用)  

用户评价  

用户可选择提交完善菜品信息（可设置一个按钮上新了直接联系客服）  

从哪获得每道菜图片？大众点评 网图 自己拍  

this is ma yi testing




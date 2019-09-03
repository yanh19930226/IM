// import HelloWorld from './components/HelloWorld'
import FriendsCircle from './components/FriendsCircle.vue'
import MySpace from './components/MySpace.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import PersonalInfoEdit from './components/PersonalInfoEdit.vue'
import PersonalPost from './components/PersonalPost.vue'
import PostDetail from './components/PostDetail.vue'
import VirtualList from './components/VirtualList.vue'
import Visited from './components/Visited.vue'

import Message from './components/Message.vue'
import Guanzhu from './components/Guanzhu.vue'
import Certicate from './components/Certicate.vue'
import Suggest from './components/Suggest.vue'
import Pinlun from './components/Pinlun.vue'
import SysMessage from './components/SysMessage.vue'


import City from './components/City.vue'
import Test from './components/test.vue'

export default [
  {
    path: '/visited',
    component: Visited
  },
  {
    path: '/friendscircle',
    component: FriendsCircle
  },
  {
    path: '/myspace',
    component: MySpace
  },
  {
    path: '/personaiInfo',
    component: PersonalInfo
  },
  {
    path: '/personalinfoedit/:id',
    component: PersonalInfoEdit
  },
  {
    path: '/virtuallist',
    component: VirtualList
  },
  {
    path: '/postdetail/:id',
    component: PostDetail,
    meta:{keepAlive: false}
  },
  {
    path: '/city',
    component: City,
    meta:{keepAlive: false}
  },
  // 我的动态
  {
    path: '/personalpost/:id',
    component: PersonalPost,
    meta:{keepAlive: false}
  },
  // 我的证书
  {
    path: '/certicate/:id',
    component: Certicate,
    meta:{keepAlive: false}
  },
  // 我的评论
  {
    path: '/pinlun/:id',
    component: Pinlun,
    meta:{keepAlive: false}
  },
  // 我的关注
  {
    path: '/guanzhu/:id',
    component: Guanzhu,
    meta:{keepAlive: false}
  },
  // 我的消息
  {
    path: '/message/:id',
    component: Message,
    meta:{keepAlive: false}
  },
  // 意见反馈
  {
    path: '/suggest/:id',
    component: Suggest,
    meta:{keepAlive: false}
  },
   // 系统消息
  {
    path: '/sysMessage',
    component: SysMessage,
    meta:{keepAlive: false}
  },
  {
    path: '/',
    redirect: '/Visited'
  },
  {
    path: '*',
    redirect: '/Visited'
  }
]

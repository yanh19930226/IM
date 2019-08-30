import HelloWorld from './components/HelloWorld'
import FriendsCircle from './components/FriendsCircle.vue'
import MySpace from './components/MySpace.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import PersonalInfoEdit from './components/PersonalInfoEdit.vue'
import PersonalPost from './components/PersonalPost.vue'
import PostDetail from './components/PostDetail.vue'
import VirtualList from './components/virtuallist.vue'

export default [{
    path: '/helloworld',
    component: HelloWorld
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
    path: '/personalpost',
    component: PersonalPost
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
    path: '/',
    redirect: '/helloworld'
  },
  {
    path: '*',
    redirect: '/helloworld'
  }
]

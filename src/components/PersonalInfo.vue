<template>
  <div class="personalinfo">
    <header>
      <div class="user">
        <img :src="personalinfo.avt" />
      </div>
      <div class="userinfo">
        <p v-text="personalinfo.username"></p>
        <p v-text="personalinfo.gender+' '+personalinfo.age+'岁 '+personalinfo.address"></p>
      </div>
      <div class="right_icon">
        <router-link :to="{path: '/personalinfoedit/' + 1}" tag="a">
          <span>编辑</span>
        </router-link>
      </div>
    </header>
    <aside>
      <ul>
        <li class="li-item">
          <a href="javascript:;">我的动态</a>
          <span v-text="personalinfo.postcount+'条'"></span>
        </li>
        <li class="li-item">
          <a href="javascript:;">我的证书</a>
          <span v-text="personalinfo.zhengshucount+'条'"></span>
        </li>
        <li class="li-item">
          <a href="javascript:;">我的评论</a>
          <span v-text="personalinfo.pingluncount+'条'"></span>
        </li>
        <li class="li-item">
          <a href="javascript:;">我的关注</a>
          <div class="tagdiv">new</div>
        </li>
        <li class="li-item">
          <a href="javascript:;">我的消息</a>
          <div class="tagdiv">
            <span v-text="personalinfo.messagecount"></span>
          </div>
        </li>
        <li class="li-item">
          <a href="javascript:;">意见反馈</a>
        </li>
        <li class="li-item">
          <a href="javascript:;">系统消息</a>
          <div class="dotdiv"></div>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
require("../assets/css/personalinfo.css");
export default {
  data() {
    return {
      personalinfo: ""
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      var _this = this;
      this.$http
        .get("/static/data/personalinfo.json")
        .then(function(res) {
          _this.personalinfo = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  watch: {},
  components: {}
};
</script>

<style>
</style>

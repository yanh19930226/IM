<template>
  <div class="personalinfoedit">
    <aside>
      <ul>
        <li class="li-item">
          <a href="#" class="avt">头像</a>
          <div class="left-content">
            <img :src="personalinfoedit.avt" />
            <i class="iconfont icon-angle-right"></i>
          </div>
        </li>
        <li class="li-item">
          <a href="#" class="nickname">昵称</a>
          <div class="left-content">
            <input
              type="text"
              name="nickname"
              class="inputleftnone"
              v-model="personalinfoedit.username"
            />
          </div>
        </li>
        <li class="li-item">
          <a href="#" class="gender">性别</a>
          <span v-text="personalinfoedit.gender">男</span>
        </li>
        <li class="li-item">
          <a href="#" class="birthday">出生年月</a>
          <div class="left-content">
            <input
              type="text"
              name="birthday"
              readonly
              clickable
              :value="value|normalDate"
              placeholder="选择日期"
              @click="showPicker = true"
            />
            <i class="iconfont icon-angle-right"></i>
          </div>
        </li>
        <li class="li-item">
          <a href="#" class="mail">邮箱</a>
          <div class="left-content">
            <input
              type="text"
              name="nickname"
              v-model="personalinfoedit.email"
              class="inputleftnone"
            />
          </div>
        </li>
        <li class="li-item">
          <a href="#" class="mobile">手机号码</a>
          <div class="left-content">
            <input
              type="text"
              name="nickname"
              v-model="personalinfoedit.mobile"
              class="inputleftnone"
            />
          </div>
        </li>
        <li class="li-item">
          <a href="#" class="address">所在地</a>
          <router-link to="/city" tag="div" class="left-content">
            <input type="text" name="nickname" v-model="personalinfoedit.address" />
            <i class="iconfont icon-angle-right"></i>
          </router-link>
        </li>
      </ul>
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="year-month"
          :formatter="formatter"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </aside>
    <div class="info">以下所填信息是我们为您的文化旅游行程个性化定制与信息智能推送的依据</div>
  </div>
</template>

<script>
require("../assets/css/personalinfoedit.css");
export default {
  data() {
    return {
      personalinfoedit: "",
      value: new Date(),
      showPicker: false,
    };
  },
  mounted() {
    this.fetchdata(this.$route.params.id);
  },
  methods: {
    fetchdata(id) {
      var _this = this;
      this.$http
        .get("/static/data/personalinfoedit.json")
        .then(function(res) {
          _this.personalinfoedit = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  },
  watch: {},
  components: {
    Area: () => import("../components/Area"),
  }
};
</script>

<style>
</style>

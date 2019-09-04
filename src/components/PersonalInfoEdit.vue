<template>
  <div class="personalinfoedit">
    <aside>
      <ul>
        <li class="li-item">
          <span class="title">头像</span>
          <div class="left-content">
            <img :src="personalinfoedit.avt" />
            <i class="iconfont icon-angle-right"></i>
          </div>
        </li>
        <li class="li-item">
          <span class="title">昵称</span>
          <div class="left-content">
            <input
              type="text"
              name="nickname"
              class="inputleftnone"
              v-model="personalinfoedit.username"
              @blur.prevent="edit()"
            />
          </div>
        </li>
        <li class="li-item" @click="showGender=true">
          <span class="title">性别</span>
          <div class="left-content">
            <p v-text="personalinfoedit.gender"></p>
            <i class="iconfont icon-angle-right"></i>
          </div>
        </li>
        <li class="li-item">
          <span class="title">出生年月</span>
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
          <span class="title">邮箱</span>
          <div class="left-content">
            <input
              type="text"
              name="nickname"
              v-model="personalinfoedit.email"
              class="inputleftnone"
              @blur.prevent="edit()"
            />
          </div>
        </li>
        <li class="li-item">
          <span class="title">手机号码</span>
          <div class="left-content">
            <input
              type="text"
              name="nickname"
              v-model="personalinfoedit.mobile"
              class="inputleftnone"
              @blur.prevent="edit()"
            />
          </div>
        </li>
        <li class="li-item" @click="showArea=true">
          <span class="title">所在地</span>
          <div class="left-content">
            <p name="address" v-text="personalinfoedit.address"></p>
            <i class="iconfont icon-angle-right"></i>
          </div>
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
      <area-select v-if="showArea" @on-area-select="onSelected"></area-select>
      <gender-select v-if="showGender" :currenGender="personalinfoedit.gender" @on-gender-select="onSelectedGender"></gender-select>
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
      showArea: false,
      showGender: false
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
    edit() {
      var user = {};
      var _this = this;
      this.$http
        .get("/static/data/personalinfoedit.json", {
          Id:"",
          avt:"",
          userName: "Fred",
          gender: "女",
          birthdate:"",
          email:"",
          mobile:"",
          address:""
        })
        .then(function(res) {
          // alert("hellow");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //时间
    onConfirm(value) {
      this.value = value;
      this.edit();
      this.showPicker = false;
    },
    //地区
    onSelected(data) {
      this.personalinfoedit.address = data;
      this.edit();
      this.showArea = false;
    },
    //性别
    onSelectedGender(data) {
      this.personalinfoedit.gender = data==true?"男":"女";
      this.edit();
      this.showGender = false;
    }
  },
  watch: {},
  components: {
    AreaSelect: () => import("../components/AreaSelect"),
    GenderSelect: () => import("../components/GenderSelect")
  }
};
</script>

<style>
</style>

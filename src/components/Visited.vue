<template>
  <div class="container">
    <div class="spotinfo-container">
      <h3 class="spot-title">石竹山风景区</h3>
      <p>到此一游-荣誉证书</p>
    </div>
    <div class="user-info-container">
      <img src="/static/images/0.jpg" />
      <p class="user-info">林景行运营-黄先生</p>
      <span class="user-info-time">2019-08-20</span>
    </div>
    <div class="bottom">
      <div class="certificate-container">
        <img src="/static/images/wlz.png" />
        <img src="/static/images/spot.png" />
      </div>
      <div class="bottom-container">
        <div class="bottom-info-left">
          <img src="/static/images/qrcode.png" />
          <span>扫扫或长按,了解详情</span>
        </div>
        <div class="bottom-info-right">
          <p>望路行程文化旅游网颁发</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.container {
  text-align: center;
  background: transparent url("/static/images/journey.png") no-repeat;
  position: absolute;
  height: 100%;
  padding-top: 5.8rem;
  background-size: 100%;
  margin-top: 2rem;
}
.container > .spotinfo-container {
}
.container > .spotinfo-container > .spot-title {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 1.1rem;
  color: #b69965;
}

.container > .spotinfo-container > p {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 1.6rem;
  color: #bda475;
  padding-top: 0.6rem;
}

.container > .user-info-container {
  margin-top: 1.6rem;
}
.container > .user-info-container>img{
    width: 4rem;
    border-radius: 4rem;
}
.container > .user-info-container > .user-info {
  color: #b69965;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  padding: 1rem 0;
}

.container > .user-info-container > .user-info-time {
  color: #b69965;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}

.container > .bottom {
  margin-top: 2rem;
}
.container > .bottom > .certificate-container {
  text-align: right;
  margin-right: 3rem;
}

.container > .bottom > .certificate-container > img {
  width: 25%;
}

.container > .bottom > .certificate-container > img:first-child {
}

.container > .bottom > .certificate-container > img:last-child {
}

.container > .bottom > .bottom-container {
  margin-top: 1.5rem;
  display: flex;
}

.container > .bottom > .bottom-container > .bottom-info-left {
  width: 50%;
  /* float: left; */
}

.container > .bottom > .bottom-container > .bottom-info-left > img {
  width: 34%;
}

.container > .bottom > .bottom-container > .bottom-info-left > span {
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;
  color: #333333;
  text-align: center;
  line-height: normal;
  display: block;
}

.container > .bottom > .bottom-container > .bottom-info-right {
  position: relative;
  width: 50%;
  font-size: 0.8rem;
  color: #b69965;
}

.container > .bottom > .bottom-container > .bottom-info-right > p {
  position: absolute;
  bottom: 0;
}
</style>
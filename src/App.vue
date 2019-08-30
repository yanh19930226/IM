<template>
  <div id="app">
    <Loading v-show="loadingShow"></Loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapGetters } from "Vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters(["loadingShow"]),
  mounted() {},
  methods: {},

  watch: {},
  components: {}
};
</script>
<style>
body {
  overflow-x: hidden;
}
.slideInLeft,
.slideOutRight {
  position: absolute;
}
</style>

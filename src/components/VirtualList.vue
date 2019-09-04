<template>
  <div class="virtual">
    <div class="culture">
      <div
        class="culture-item"
        v-bind:class="{'culture-itemactived': selectedcultual===0}"
        v-on:click="selectType(0)"
      >不限</div>
      <div
        class="culture-item"
        v-bind:class="{'culture-itemactived': selectedcultual===item.id}"
        v-on:click="selectType(item.id)"
        v-for="(item,index) in cultuallist"
        :key="index"
      >{{item.cultualname}}</div>
    </div>
    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
      <div class="list">
        <div
          class="virtual-item"
          v-for="(item,index) in virtuallist"
          :key="index"
          @click="virtualdetailpoup(item)">
          <img :src="item.imgUrl" />
          <p v-text="item.virtualname"></p>
        </div>
      </div>
    </scroller>
    <van-dialog v-model="showDialog" :title="title" @confirm="virtualDialogConfirm">
      <van-radio-group v-model="radio">
        <van-radio name="1">720全景</van-radio>
        <van-radio name="2">vr视频</van-radio>
      </van-radio-group>
    </van-dialog>
  </div>
</template>
<script>
require("../assets/css/virtuallist.css");
export default {
  data() {
    return {
      title:"",
      showDialog: false,
      radio: "1",
      
      pageIndex: 1,
      pageSize: 8,
      noData: false,
      selectedcultual: 0,
      cultuallist: [],
      virtuallist: []
    };
  },
  mounted() {
    this.fetchCultual();
    this.fetchdata();
  },
  methods: {
    fetchCultual() {
      var _this = this;
      this.$http
        .get("/static/data/cultual.json")
        .then(function(res) {
          _this.cultuallist = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    fetchdata() {
      var _this = this;
      this.$http
        .get("/static/data/virtual.json", {
          pageIndex: _this.pageIndex,
          pageSize: _this.pageSize,
          selectedcultual: _this.selectedcultual
        })
        .then(function(res) {
          if (!res) return;
          //真实数据注释
          if (_this.selectedcultual != 0) {
            res.data.virtuallist = _.filter(res.data.virtuallist, function(o) {
              return o.cultualtype === _this.selectedcultual;
            });
          }
          if (_this.pageIndex === res.data.totalPage) {
            _this.noData = true;
          }
          if (_this.pageIndex === 1) {
            _this.virtuallist = res.data.virtuallist;
          } else {
            var newarr = _.chunk(res.data.virtuallist, _this.pageSize);
            _this.virtuallist = _this.virtuallist.concat(
              newarr[_this.pageIndex - 1]
            );
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //下拉刷新
    refresh() {
      this.pageIndex = 1; //重置页数
      this.noData = false;
      setTimeout(
        function() {
          this.fetchdata();
          this.$refs.myscroller.finishPullToRefresh(); //刷新完毕关闭刷新的转圈圈
        }.bind(this),
        1700
      );
    },
    //上拉加载
    infinite(done) {
      if (this.noData) {
        this.$refs.myscroller.finishInfinite(true); //不让它加载，，显示“没有更多数据”，不然会一直转圈
      } else {
        setTimeout(() => {
          this.pageIndex++; //下拉一次页数+1
          this.fetchdata();
          done(); //进行下一次加载操作
        }, 1500);
      }
    },
    //筛选
    selectType: function(id) {
      this.selectedcultual = id;
      this.pageIndex = 1;
      this.pageSize = 8;
      this.fetchdata();
    },
    //详细
    virtualdetailpoup(item) {
      this.title=item.virtualname;
      this.showDialog = true;
    },
    virtualDialogConfirm()
    {
      alert(this.radio);
    }
  },
  watch: {},
  components: {}
};
</script>

<style>
.van-dialog__header {
    padding: 24px 0;
}
.van-radio-group {
  display: flex;
  justify-content: space-around;
}
</style>

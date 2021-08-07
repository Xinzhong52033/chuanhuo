<template>
  <div class="tab-change">
    <el-card class="box-card">
      <div class="collapse" @click="collapseClick">{{isshow ? '收起' : '展开'}}</div>
      <el-tabs v-model="activeName">
        <!-- <el-tab-pane label="园区分省市" name="first">
          <div class="wrap animate__animated animate__slower" :class="[isshow]" v-show="isshow">
            <div class="city">
              <div class="sub-title">省份：</div>
              <div class="classify">
                <div class="item" v-for="(item,index) in provinceList" :class="{active:provinceIndex == index}" :key="`weq${index}`" @click="provinceClick(index)">{{item.location}}<span class='number' v-if="item.location !='全部'">({{item.count}})</span></div>
              </div>
            </div>
            <div class="city" v-if="provinceIndex!='0'">
              <div class="sub-title">城市：</div>
              <div class="classify">
                <div class="item" v-for="(item,index) in cityList" :class="{active:cityIndex == index}" :key="`weq${index}`" @click="cityClick(index)">{{item.location}}<span class='number' v-if="item.location !='全部'">({{item.count}})</span></div>
              </div>
            </div>
          </div>
        </el-tab-pane> -->
        <el-tab-pane label="园区分类" name="second">
          <div class="wrap animate__animated animate__slower" :class="[isshow]" v-show="isshow">
            <div class="industry">
              <div class="sub-title">产业：</div>
              <div class="classify">
                <div class="item" v-for="(item,index) in industryList" :class="{active:industryIndex == index}" :key="`weq${index}`" @click="industryClick(index)">{{item.industry}}<span class='number' v-if="item.industry !='全部'">({{item.count}})</span></div>
              </div>
            </div>
            <div class="city">
              <div class="sub-title">省份：</div>
              <div class="classify">
                <div class="item" v-for="(item,index) in provinceList" :class="{active:provinceIndex == index}" :key="`weq${index}`" @click="provinceClick(index)">{{item.location}}<span class='number' v-if="item.location !='全部'">({{item.count}})</span></div>
              </div>
            </div>
            <div class="city" v-if="provinceIndex!='0'">
              <div class="sub-title">城市：</div>
              <div class="classify">
                <div class="item" v-for="(item,index) in cityList" :class="{active:cityIndex == index}" :key="`weq${index}`" @click="cityClick(index)">{{item.location}}<span class='number' v-if="item.location !='全部'">({{item.count}})</span></div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TabChange",
  props: {
    provinceList: {
      type: Array,
      default: () => [],
    },
    cityList: {},
    industryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeName: "second",
      isshow: true,
      showName: "animate__slideInDown",
      cityIndex: "0",
      industryIndex: 0,
      provinceIndex: '0',
    };
  },
  methods: {
    collapseClick() {
      this.isshow = !this.isshow;
      if (this.showName == "animate__slideInDown") {
        this.showName = "animate__slideInUp";
      } else {
        this.showName = "animate__slideInDown";
      }
    },
    industryClick(index) {
       this.industryIndex = index
       this.$emit('industryClick', index)
    },
    provinceClick(index) {
        this.provinceIndex = index
        this.cityIndex = 0
        this.$emit('provinceClick', index)
    },
    cityClick(index) {
        this.cityIndex = index
        this.$emit('cityClick', index)
    },
    search() {
      this.emit(
        "search",
        this.industryList[this.industryIndex],
        this.cityList[this.cityIndex]
      );
    },
  },
};
</script>

<style lang="less" scoped>
.tab-change {
  /deep/.box-card {
    position: relative;
    .el-card__body {
      padding: 5px 20px 20px 20px;
    }
    .collapse {
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 14px;
      cursor: pointer !important;
      color: #409eff;
      z-index: 2;
    }
    .item {
      cursor: pointer;
    }
    .active {
      color: #ff6904;
      font-weight: bold;
    }
    // .city-tab {
    //   display: flex;
    //   flex-wrap: wrap;
    //   .item {
    //     width: 10%;
    //   }
    // }
    .wrap {
      width: 100%;
      .industry,
      .city {
        width: 100%;
        display: flex;
        align-items: flex-start;
        .sub-title {
          font-size: 14px;
          color: #707070;
          width: 50px;
          flex-shrink: 0;
        }
        .classify {
          display: flex;
          flex-wrap: wrap;
          .item {
            width:170px;
            margin-bottom: 6px;
            &:hover {
              color: @blue;
            }
            .number {
              color: @fc1;
              font-size: 12px;
              font-weight: normal;
            }
          }
        }
      }
      .city {
        margin-top: 5px;
      }
    }
  }
}
</style>
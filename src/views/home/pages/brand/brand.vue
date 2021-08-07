<template>
  <div class="brand">
    <div id="container">
      <Echarts style="opacity: 1" :options='mapState' :mapData='scLine' mapName='sc' @chartClick='chartClick' @chartOver='chartOver' @chartOut='chartOut'/>
      <div class="wrap"></div>
    </div>
    <div class="left box">
      <div class="search">
        <el-input
          placeholder="请输入关键词"
          style="width: 100%; margin-bottom: 15px"
          size="medium"
          v-model="input"
        >
          <template slot="append"
            ><i class="iconfont icon-sousuo"></i
          ></template>
        </el-input>
        <el-select
          v-model="select"
          v-if="false"
          style="width: 100%; margin-bottom: 15px"
          size="medium"
          placeholder="请选择"
        >
          <el-option label="全部" value="1"></el-option>
          <el-option label="商品" value="2"></el-option>
          <el-option label="供应商" value="3"></el-option>
          <el-option label="园区" value="4"></el-option>
        </el-select>
        <el-select
          v-model="select"
          style="width: 100%; margin-bottom: 50px"
          size="medium"
          placeholder="请选择"
        >
          <el-option label="全部" value="1"></el-option>
          <el-option label="商品" value="2"></el-option>
          <el-option label="供应商" value="3"></el-option>
          <el-option label="园区" value="4"></el-option>
        </el-select>
      </div>
      <div class="hot">
        <div class="title">
          <span class="ball"></span>
          <span>热门品牌馆</span>
        </div>
        <div class="hot-brand">
          <ul>
            <li>成都馆</li>
            <!-- <li>眉山馆</li> -->
            <li>攀枝花馆</li>
            <!-- <li>泸州馆</li>
            <li>南充馆</li> -->
          </ul>
        </div>
        <!-- <div class="barndTooltip">
          <div class="info">
            ${param.data.name}
          </div>
          <div class="img">
            <img src="@/assets/img/brandLoaction.png" alt="">
          </div>
        </div> -->
      </div>
    
    </div>
    <div class="right box" >
      <div class="title">
        <span class="ball"></span>
        <span v-if="!detail">特色品牌馆</span>
        <span v-if="detail">攀枝花馆</span>
      </div>
      <div class="card" v-for="item in placeInfo"  v-if="!detail">
        <div class="img">
          <img src="../../../../assets/img/city.jpg" alt="" />
          <div class="name">{{item.name}}</div>
        </div>
        <div class="info">
          <div class="row">
            <span>人口：</span><span class="big-number">{{item.renkou}}</span
            ><span style="margin-left: 5px">万人</span>
          </div>
          <div class="row">
            <span>GDP：</span><span class="big-number">{{item.gdp}}</span
            ><span style="margin-left: 5px"> 亿元</span>
          </div>
          <div class="row flex">
            <span>名优品牌：</span
            ><span class="black"
              >{{item.brand}}</span
            >
          </div>
        </div>
      </div>
      <div class="card detail-card" v-if="detail">
        <div class="img">
          <img src="../../../../assets/img/city.jpg" alt="" />
        </div>
        <div class="info">
          <div class="row">
            <span>人口：</span><span class="big-number">108.24</span
            ><span style="margin-left: 5px">万人</span>
          </div>
          <div class="row">
            <span>GDP：</span><span class="big-number">1010.13</span
            ><span style="margin-left: 5px"> 亿元</span>
          </div>
          <div class="row flex">
            <span>名优品牌：</span
            ><span class="black"
              >钛白粉、钢轨、铁矿、炼焦煤</span
            >
          </div>
        </div>
        <div class="title">供应商数据</div>
        <div class="detail-info">
          <div class="row">
            <span>供应商总数：</span><span class="big-number">159</span
            ><span style="margin-left: 5px">家</span>
          </div>
          <div class="flex-row">
            <span >能源类：91 家</span>
            <span >化工类：15 家</span>
            <span >金属类：23 家</span>
            <span >建材类：17 家</span>
            <span >农副类：13 家</span>
          </div>
        </div>
        <div class="title">特色展示</div>
        <div class="img">
          <video
            src="http://loading.spsict.com/chuanhuo_chuchuan/mvs/%E6%94%80%E6%9E%9D%E8%8A%B1%E9%92%9B%E9%93%81%E7%9F%BF.mp4"
            muted
            autoplay
            controls
          ></video>
          <div class="name">攀枝花館</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Echarts from "@/components/echarts.vue"
import scLine from '@/assets/json/sc_line.json'
import { mapStatefun } from './map/option.js'
import axios from 'axios'
export default {
  name: "brand",
  components: {
    Echarts
  },
  data() {
    return {
      detail: false,
      center: [116.397428, 39.90923],
      input: '',
      select: '',
      mapState: mapStatefun(),
      scLine,
      data: {},
      placeInfo: [
        {name: '成都馆', renkou: '1608.24', gdp: '17010.13', brand: '食品、煤矿、水蜜桃、铁矿、钢材、枇杷、花岗岩、木材、食材'},
        {name: '攀枝花馆', renkou: '108.24', gdp: '1010.13', brand: '钛白粉、钢轨、铁矿、炼焦煤'},
        {name: '宜宾馆', renkou: '551.5', gdp: '2802.13', brand: '五粮液、川茶、丝丽雅、叙府大曲、天府龙芽、汽车'},
        
      ]
    };
  },
  created() {
      this.initMap();
      this.getData()
  },
  mounted() {
  },
  methods: {
    async getData() {
        let { data } = await axios.get(
            `http://111.9.14.43:88/api/Sichuan-data.json`
        );
    },
    async initMap() {
      let {data} = await axios.get('http://loading.spsict.com/china_maps/510100.json');
    },
    chartOver(param) {
      this.detail = true
      if (param.name == '攀枝花市') {
        this.detail = true
      } else {
        this.detail = false
      }
      
    },
    chartOut(param) {
      this.detail = false
    },
    chartClick(param) {
      this.$router.push({path: '/brandDetail', query: {adcode: param.data.adcode}});
    }
     
  },
};
</script>

<style lang="less" scoped>
.brand {
  .wh(100%, 858px);
  position: relative;
  #container {
    position: absolute;
    .wh(100%, 100%);
    z-index: 22;
    .wrap {
      opacity: 0.2;
      background: url('../../../../assets/img/mapbg1.png');
      background-size: 100% 100%;
      position: absolute;
      .wh(100%, 100%);
      // background: #f8fbff;
      // background: rgba(248, 251, 255, 0.5);
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  
  // .flexb();
  .box {
    position: absolute;
    top: 50px;
    .wh(330px, 758px);
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    overflow: auto;
    background-color: #fff;
  }
  .title {
    height: 20px;
    line-height: 20px;
    .flex();
    align-items: center;
    .ball {
      display: inline-block;
      .wh(18px, 18px);
      background-image: linear-gradient(to left, #ffffff, #3860f4);
      border-radius: 50%;
      margin-right: 10px;
    }
    span {
      font-size: 20px;
      color: @blue;
      font-weight: 500;
    }
    margin-bottom: 20px;
  }
  .left {
    position: absolute;
    left: 50px;
    // margin-left: 50px;
    z-index: 1000;
    /deep/.search {
      .el-input-group__append {
        background-color: @black;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .hot {
      .hot-brand {
        height: calc(100% - 176px);
        overflow: auto;
        ul {
          li {
            height: 46px;
            box-sizing: border-box;
            border: 1px solid @blue;
            color: @blue;
            cursor: pointer;
            &:hover {
              background-image: linear-gradient(to right, #5f87f8, #3860f4);
              color: #fff;
              box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.3);
            }
            margin-bottom: 15px;
            line-height: 46px;
            text-align: center;
            font-size: 16px;
          }
        }
      }
    }
  }
  .right {
    z-index: 10000;
    right: 50px;
    color: @fc1;
    .card {
      .img {
        .wh(270px, 152px);
        img {
          .wh(100%, 100%);
        }
        position: relative;
        .name {
          position: absolute;
          bottom: 0;
          .wh(110px, 28px);
          box-sizing: border-box;
          line-height: 28px;
          text-align: center;
          .bis("../../../../assets/img/name.png");
          color: #fff;
          opacity: 0.8;
          padding-right: 15px;
        }
        margin-bottom: 15px;
      }
      .info {
        .row {
          margin-bottom: 15px;
          .black {
            color: @black;
          }
          .flex();
          span:first-child {
            width: 70px;
            flex-shrink: 0;
          }
        }
        margin-bottom: 30px;
      }
      border-bottom: 1px dashed @bc;
      margin-bottom: 30px;
    }
    .detail-card {
      border-bottom: none;
      .title {
        font-size: 16px;
        color: @blue;
        opacity: 0.8;
        margin-bottom: 15px;
      }
      .info {
        border-bottom: 1px dashed @bc;
        margin-bottom: 15px;
      }
      .detail-info {
        .row {
          .flex();
          span:first-child {
            width: 90px;
            flex-shrink: 0;
            margin-bottom: 15px;
          }
        }
        .flex-row {
          .flex();
          flex-wrap: wrap;
          span {
            display: inline-block;
            width: 50%;
            margin-bottom: 10px;
          }
        }
        border-bottom: 1px dashed @bc;
        margin-bottom: 15px;
      }
      video {
        .wh(100%, 100%);
      }
    }
  }
  
}
</style>
<style lang="less">
.barndTooltip {
  .info {
     opacity: 0.9;
      height: 40px;
      padding: 0 10px;
      .bs();
      color: #FBB920;
      font-size:22px;
      font-weight: 500;
      line-height: 36px;
      background-color: #fff;
      border: 2px solid #FBB920;
      border-radius: 3px;
      margin-bottom: 5px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
  .img {
    text-align: center;
     img{
       .wh(30px, 30px);
     }
     position: relative;
     top: 10px;
  }
}
</style>

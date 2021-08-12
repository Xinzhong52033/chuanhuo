<template>
    <div class="home">
        <div class="bg">
            <div class="scroll-table" :class="[{'scroll-table-pickup': pickUp}]">
                <div class="content">
                    <div class="th">
                        <i class="iconfont icon-pinpai"></i>
                        <span>名优品牌馆</span>
                        <i class="el-icon-arrow-up" @click.stop="pickUp=true"></i>
                    </div>
                    <div class="tbody">
                        <vue-seamless-scroll :data="listData" :class-option="defaultOption">
                            <ul class="ul-scoll">
                                <li v-for="(item, index) in listData" @click="toBrand()" :key='index'>
                                    <i class="iconfont icon-pinpaibg" :class="index%2==0?'blue':'yellow'"></i>
                                    <div class="name" :style="{color:index%2==0?'#3860F4':'#FFBB20'}">{{item.categoryName}}</div>
                                    <div style='color:#7A8BA6'>
                                        <span v-for="(j, k) in item.list" :key="k">
                                            {{j.categoryName}}{{k==item.list.length-1?'':'、'}}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </vue-seamless-scroll>
                    </div>
                </div>
            </div>
            <div class="ball" @click="pickUp=!pickUp" :class="[{'ball-unfold': !pickUp}]">
                <i class="iconfont icon-pinpai"></i>
                <div>名优 <br />品牌馆</div>
            </div>
        </div>
        <div class="content" v-for="item in form" :key="item.type" :class="{bg2: item.type%2==0}" :id="'item'+item.type">
            <ul class="navigation" id="navigation">
                <li class="top">
                    品牌馆
                </li>
                <li @click="jump('item1')" :class="{'scroll-to': scroll == 0}">
                    农副产品
                </li>
                <li @click="jump('item2')" :class="{'scroll-to': scroll == 1}">
                    能源产品
                </li>
                <li @click="jump('item3')" :class="{'scroll-to': scroll == 2}">
                    金属
                </li>
                <li @click="jump('item4')" :class="{'scroll-to': scroll == 3}">
                    化工产品
                </li>
                <li @click="jump('item5')" :class="{'scroll-to': scroll == 4}">
                    建材产品
                </li>
                <li @click="jump('welcome')">
                    <i class="el-icon-download"></i>
                </li>
            </ul>
            <div class="padding-box">
                <div class="title">
                    <img src="../../../assets/img/title.png" alt="">
                    <span>{{item.type == 1?'农副产品':item.type==2?'能源产品':item.type==3?'金属':item.type==4?'化工产品':'建材产品'}}</span>
                    <img src="../../../assets/img/title.png" alt="">
                </div>
                <div class="info">
                    <div class="up" :style="{'flex-direction':item.type%2==0?'row-reverse':'row'}">
                        <div class="left padding-box2">
                            <div class="title">市场行情</div>
                            <div class="left-top">
                                <div class="left-top-left">
                                    <span class="ball"></span>
                                    <span>6月6日农副指数：</span>
                                    <span class="yellow">944</span>
                                </div>
                                <div class="left-top-right">
                                    <span>选择区域</span>
                                    <el-select size="mini" :style="{width: 100*$widthCoefficient+'px',marginRight: '10px'}" v-model="item.provence" placeholder="请选择">
                                        <el-option v-for="item in option" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <el-select size="mini" :style="{width: 100*$widthCoefficient+'px',marginRight: '10px'}" @change="getLine(item.type, item.city)" v-model="item.city" placeholder="请选择">
                                        <el-option v-for="item in cityList"  :label="item" :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="left-down">
                                <Echarts :height="'100%'" :options='item.lineOptoins'></Echarts>
                            </div>
                        </div>
                        <div class="right">
                            <div class="right-up padding-box2">
                                <div class="title">价格指数</div>
                                <div class="right-up-top">
                                    <el-breadcrumb separator="|">
                                        <el-breadcrumb-item :class="item.price == '成都'?'focus':''"><span @click="item.price = '成都';selectItem(item,'priceDatas','priceData', '成都')">成都</span></el-breadcrumb-item>
                                        <el-breadcrumb-item :class="item.price == '川北'?'focus':''"><span @click="item.price = '川北';selectItem(item,'priceDatas','priceData', '川北')">川北</span></el-breadcrumb-item>
                                        <el-breadcrumb-item :class="item.price == '川南'?'focus':''"><span @click="item.price = '川南';selectItem(item,'priceDatas','priceData', '川南')">川南</span></el-breadcrumb-item>
                                        <el-breadcrumb-item :class="item.price == '川西'?'focus':''"><span @click="item.price = '川西';selectItem(item,'priceDatas','priceData', '川西')">川西</span></el-breadcrumb-item>
                                        <el-breadcrumb-item :class="item.price == '川东'?'focus':''"><span @click="item.price = '川东';selectItem(item,'priceDatas','priceData', '川东')">川东</span></el-breadcrumb-item>
                                    </el-breadcrumb>
                                    <span>更新时间：2021-08-01</span>
                                </div>  
                                <div class="right-up-down">
                                    <swiper ref="mySwiper" class="container" :options="swiperOptions">
                                        <swiper-slide v-for="i in item.priceData">
                                            <div class="inner-slide">
                                                <div class="up">
                                                    <span>{{i.categoryName}}</span>
                                                    <div class="number" :class="i.zf==0?'number-down':''"><span v-if='i.zf == 1'>+ </span><span v-if='i.zf == 0'>- </span>{{i.increase}}%</div>
                                                </div>
                                                <div class="down" style="background: transparent">
                                                    <span class="big-number">{{i.price}}</span><span> 元/吨</span>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                            <div class="right-down padding-box2">
                                <div class="title">库存统计</div>
                                <div class="right-down-left">
                                    <el-breadcrumb separator="|" class="breadcrumb">
                                        <el-breadcrumb-item v-for="j in item.stockList" :class="item.stock == j?'focus':''"><span @click="item.stock = j;selectItem(item,'stockDatas','stockData', j)">{{j}}</span></el-breadcrumb-item>
                                    </el-breadcrumb>
                                    <ul>
                                        <li v-for="k,l in item.stockData"  :class="['row1',{ 'row2': l%2==1}]">
                                            <div class="index">
                                                <div class="double-round">
                                                    <div class="round">{{l+1}}</div>
                                                </div>
                                            </div>
                                            <div class="area ellipsis" :title="k.area">{{k.area}}</div>
                                            <div class="count"><span>{{k.value}}</span> 吨/月</div>
                                            <div class="compare" :class="k.zf==0?'compare-down':''"><span v-if='k.zf == 1'>+ </span><span v-if='k.zf == 0'>- </span>{{k.amplitude}}%</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="right-down-right">
                                    <img @click="productMap" src="../../../assets/img/productMap.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="down padding-box2">
                        <div class="title">最新产品</div>
                        <div class="down-top">
                            <el-breadcrumb separator="|" class="breadcrumb">
                                <el-breadcrumb-item v-for="j in item.latestList" :class="item.latest == j?'focus':''"><span @click="item.latest = j;getGoodSList(item.type)">{{j}}</span></el-breadcrumb-item>
                            </el-breadcrumb>
                            <span class="more" @click="toGood(item)">更多<i class="el-icon-arrow-right"></i></span>
                        </div>
                        <div class="down-down">
                            <ul>
                                <li v-for="item in item.latestData">
                                    <div class="name">
                                        <div>{{item.commodityName}}</div>
                                        <div>库存：{{item.commodityStock}}{{item.commoditySpecification}}</div>
                                    </div>
                                    <div class="count">
                                        <span>{{item.commodityPrice}}</span> 元/{{item.commoditySpecification}}
                                    </div>
                                    <div class="warehouse">
                                        <div>发货/自提仓库：{{item.warehouseName}}</div>
                                        <div>供应商：{{item.supplierName}}</div>
                                    </div>
                                    <div class="detail" @click="goodDetail(item)">查看详情</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Echarts from "../../../components/echarts.vue";
import vueSeamlessScroll from "vue-seamless-scroll";
import { getLineOption } from "@/utils/option.js";
import { mapState, mapMutations } from "vuex";
export default {
    name: "home",
    components: {
        Echarts,
        vueSeamlessScroll,
    },
    data() {
        return {
            pickUp: false,
            listData: [],
            scroll: 0,
            option: [
                {
                    value: "四川",
                    label: "四川",
                },
            ],
            form: [
              {
                lineOptoins:{},
                provence: '四川',
                city:'成都市',
                price: '成都',
                priceDatas:'',
                priceData: '',
                stockDatas: '',
                stockList: [],
                stockData: '',
                stock:'',
                latest: '全部',
                latestData: [
                    {
                        commodityName:'豆粕 饲料用',
                        commodityStock:'3.142',
                        commodityPrice:'1780',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'菜籽粕 压榨类型:200型',
                        commodityStock:'5.142',
                        commodityPrice:'6640',
                        park: '成都达海仓库',
                        provide: '成都新欣物资有限公司'
                    },
                    {
                        commodityName:'三七 川西产',
                        commodityStock:'1.386',
                        commodityPrice:'3910',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'脂松香',
                        commodityStock:'5.142',
                        commodityPrice:'1780',
                        park: '成都达海仓库',
                        provide: '中化弘润石油化工有限公司'
                    },
                    
                ],
                latestList:[
                    '全部','药材','豆类','奶制品','肉类' 
                ],
                type: '1',
              },
              {
                lineOptoins:{},
                provence: '四川',
                city:'成都市',
                price: '成都',
                priceDatas:'',
                priceData: '',
                stockDatas: '',
                stockList: [],
                stockData: '',
                stock:'',
                latest: '全部',
                latestData: [
                    {
                        commodityName:'石油焦 硫3.5矾500',
                        commodityStock:'3.142',
                        commodityPrice:'1780',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'石脑油 直馏',
                        commodityStock:'5.142',
                        commodityPrice:'6640',
                        park: '成都达海仓库',
                        provide: '成都新欣物资有限公司'
                    },
                    {
                        commodityName:'液化天然气',
                        commodityStock:'1.386',
                        commodityPrice:'3910',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'柴油 牌号:0#;凝点,C:≤0;冷滤',
                        commodityStock:'5.142',
                        commodityPrice:'1780',
                        park: '成都达海仓库',
                        provide: '中化弘润石油化工有限公司'
                    },
                    
                ],
                latestList:[
                    '全部','原煤','原油','天然气','甲醇' 
                ],
                type: '2',
              },
              {
                lineOptoins:{},
                provence: '四川',
                city:'成都市',
                price: '成都',
                priceDatas:'',
                priceData: '',
                stockDatas: '',
                stockList: [],
                stockData: '',
                stock:'',
                latest: '全部',
                latestData: [
                    {
                        commodityName:'尿素',
                        commodityStock:'3.142',
                        commodityPrice:'1590',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'苯酚',
                        commodityStock:'5.142',
                        commodityPrice:'5960',
                        park: '成都达海仓库',
                        provide: '成都新欣物资有限公司'
                    },
                    {
                        commodityName:'烧碱',
                        commodityStock:'1.386',
                        commodityPrice:'4502',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'甘油',
                        commodityStock:'5.142',
                        commodityPrice:'2680',
                        park: '成都达海仓库',
                        provide: '中化弘润石油化工有限公司'
                    },
                    
                ],
                latestList:[
                    '全部','尿素','苯酚','烧碱','甘油'
                ],
                type: '3',
              } ,
              {
                lineOptoins:{},
                provence: '四川',
                city:'成都市',
                price: '成都',
                priceDatas:'',
                priceData: '',
                stockDatas: '',
                stockList: [],
                stockData: '',
                stock:'',
                latest: '全部',
                latestData: [
                    {
                        commodityName:'钒钛',
                        commodityStock:'3.142',
                        commodityPrice:'34200',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'白银',
                        commodityStock:'5.142',
                        commodityPrice:'23400',
                        park: '成都达海仓库',
                        provide: '成都新欣物资有限公司'
                    },
                    {
                        commodityName:'高纯铜',
                        commodityStock:'1.386',
                        commodityPrice:'12000',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'电解镍',
                        commodityStock:'3.142',
                        commodityPrice:'8560',
                        park: '成都达海仓库',
                        provide: '中化弘润石油化工有限公司'
                    },
                ],
                latestList:[ 
                    '全部','钒钛','白银','高纯铜','电解镍' 
                ],
                type: '4',
              },
              {
                lineOptoins:{},
                provence: '四川',
                city:'成都市',
                price: '成都',
                priceDatas:'',
                priceData: '',
                stockDatas: '',
                stockList: [],
                stockData: '',
                stock:'',
                latest: '全部',
                latestData: [
                    {
                        commodityName:'木材',
                        commodityStock:'3.142',
                        commodityPrice:'2560',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'螺纹钢',
                        commodityStock:'5.142',
                        commodityPrice:'3560',
                        park: '成都达海仓库',
                        provide: '成都新欣物资有限公司'
                    },
                    {
                        commodityName:'水泥',
                        commodityStock:'1.386',
                        commodityPrice:'4510',
                        park: '成都达海仓库',
                        provide: '成都积微物联集团股份有限公司'
                    },
                    {
                        commodityName:'废纸',
                        commodityStock:'5.142',
                        commodityPrice:'3650',
                        park: '成都达海仓库',
                        provide: '中化弘润石油化工有限公司'
                    },
                    
                ],
                latestList:[
                    '全部','木材','螺纹钢','水泥','废纸'
                ],
                type: '5',
              }    
            ],
            swiperOptions: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                grabCursor: true,
                spaceBetween: 23,
                loop: true,
                speed: 3000,
                autoplay: {
                    delay: 3000,
                },
            },
            cityList:[],
            typeMap:{
                1: '农副',
                2: '能源',
                3: '金属',
                4: '化工',
                5: '建材',
            }
        };
    },
    created() {
        this.goodbrand();
        this.goodtype();
        this.selectCityList();
        this.form.forEach(item => {
            this.getLine(item.type, item.city)
            this.getPrice(item.type)
            this.getStock(item.type)
            this.getProductType()
            this.getGoodSList(item.type)
        });
    },
    methods: {
        ...mapMutations(["set_banerSelect"]),
        jump(id) {
            document.getElementById(id).scrollIntoView();
        },
        goodDetail(item) {
            console.log(444, item)
            var newPage = this.$router.resolve({
                path: "/goodDetail",
                query: { commodityId: item.commodityId },
            });
            window.open(newPage.href, "_blank");
        },
        productMap() {
            var newPage = this.$router.resolve({
                path: "/productMap",
                params: { id: 12313131231 },
            });
            window.open(newPage.href, "_blank");
            this.$emit("productMap");
        },
        toBrand() {
            this.$router.push({
                path: "/brandDetail",
                query: { adcode: "510400" },
            });
            this.set_banerSelect("brand");
        },
        // 名优品牌馆
        async goodbrand() {
            let { data } = await this.$api.goodbrand();
            this.listData = data;
        },
        handleScroll() {
            //获取滚动时的高度
            let scrollTop =
                // window.pageYOffset ||
                // document.documentElement.scrollTop ||
                // document.body.scrollTop;
                // document.documentElement.scrollTop||document.body.scrollTop
                document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop;
            let oneHeight = document.getElementById("item1").offsetHeight;
            if (scrollTop < 824*this.$widthCoefficient) {
                //滚动大于0的时候要做的操作
                document.getElementById("navigation").style.display = "none";
            }
            if (scrollTop >= 824*this.$widthCoefficient) {
                //滚动大于0的时候要做的操作
                document.getElementById("navigation").style.display =
                    "inline-block";
                this.scroll = 0;
                if (scrollTop > 824*this.$widthCoefficient + 1 * oneHeight) {
                    this.scroll = 1;
                    if (scrollTop > 824*this.$widthCoefficient + 2 * oneHeight) {
                        this.scroll = 2;
                        if (scrollTop > 824*this.$widthCoefficient + 3 * oneHeight) {
                            this.scroll = 3;
                            if (scrollTop > 824*this.$widthCoefficient + 4 * oneHeight) {
                                this.scroll = 4;
                            }
                        }
                    }
                }
            }
        },
        async goodtype() {
            let { data } = await this.$api.goodtype();
        },
        toGood(item) {
            console.log(2222, item)
            this.$router.push({path: '/goods', query: {productType: this.typeMap[item.type], productTypeLevelTow:'全部', categoryId:item.type}})
            this.set_banerSelect('goods')
        },
        async selectCityList() {
            let {data} = await this.$api.selectCityList()
            this.cityList = data
        },
        //折线
        async getLine(type, city) {
            let { data } = await this.$api.getLine({
                type: type,
                city: city,
            })
            var obj = {
                date: [],
                value: []
            }
            data.forEach(item => {
                obj.date.push(item.time)
                obj.value.push(item.value)
            })
            this.form[type-1].lineOptoins = getLineOption(obj)
        },
        // 价格指数
        async getPrice(type) {
           let { data } = await this.$api.getPrice({
                type: type,
            })
            this.form[type-1].priceDatas = data
            this.form[type-1].priceData = this.form[type-1].priceDatas['成都']
        },
        selectItem(item, datas, data, value) {
            console.log(item, datas, data, value)
            console.log(item[data], item[datas], data, value)
            console.log( item[data], item[datas][value])
            item[data] = item[datas][value]
            console.log(item, datas, data, value)
        }, 
        async getStock(type) {
           let { data } = await this.$api.getInventory({
                type: type,
            })
            this.form[type-1].stockDatas = data
            for (var key in data) {
                this.form[type-1].stockList.push(key) 
            }
            this.form[type-1].stockList.splice(4, this.form[type-1].stockList.length+1)
            this.form[type-1].latestList = ['全部',...this.form[type-1].stockList]
            this.form[type-1].stock = this.form[type-1].stockList[0]
            this.form[type-1].stockData = this.form[type-1].stockDatas[this.form[type-1].stockList[0]]
        },
        async getProductType(type) {
           let { data } = await this.$api.getProductType({
                type: type,
            })
        },
        async getGoodSList(type) {
            let obj = {
                pageNum: '1',
                pageSize: '10',
                productType: this.typeMap[type],
                productTypeLevelTow: this.form[type-1].latest == '全部'?'':this.form[type-1].latest,
                deliveryPlace: '',
                brand:'',
                supplier: '',
                sort: 1,
            }
            let {data} = await this.$api.getGoodSList(obj)
            this.form[type-1].latestData = data.list
            this.form[type-1].latestData.splice(4, this.form[type-1].latestData.length+1)
        },
    },
    computed: {
        defaultOption() {
            return {
                step: 1, // 数值越大速度滚动越快
                limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: 75 * this.$widthCoefficient, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
            };
        },
    },
    mounted() {
        for (let i = 0; i < 15; i++) {
            let j = {
                title: "食品、煤矿、水蜜桃、铁矿、钢材、枇杷、花岗岩" + i,
            };
            this.listData.push(j);
        }
        window.addEventListener("scroll", this.handleScroll, true);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll, true);
    },
};
</script>

<style lang="less" scoped>
.home {
    .bg {
        position: relative;
        .wh(100%, 580px);
        .bis("../../../assets/img/home_bg.png");
        overflow: hidden;
        .scroll-table {
            .wh(330px, 440px);
            border-radius: 3px;
            background-color: #fff;
            margin: 74px 240px 0 auto;
            margin-right: 12.5%;
            padding: 10px 20px 20px 20px;
            box-sizing: border-box;
            opacity: 1;
            transition: all 0.2s;
            > .content {
                .wh(100%, 100%);
                .th {
                    .flexb();
                    .wh(100%, 43px);
                    border-bottom: 1px solid #c3cffc;
                    .icon-pinpai {
                        font-size: 20px;
                        color: @yellow;
                    }
                    span {
                        font-size: 18px;
                        margin-right: 120px;
                    }
                    .el-icon-arrow-up {
                        font-size: 20px;
                        color: @fc1;
                        cursor: pointer;
                        opacity: 0.7;
                        &:hover {
                            opacity: 0.5;
                        }
                    }
                }
                .tbody {
                    height: calc(100% - 43px);
                    overflow: hidden;
                    ul {
                        .wh(100%, 100%);
                        li {
                            height: 75px;
                            box-sizing: border-box;
                            border-bottom: 1px dashed #c3cffc;
                            cursor: pointer;
                            &:hover {
                                background: @bc2;
                            }
                            .flex();
                            align-items: center;
                            .icon-pinpaibg {
                                font-size: 30px;
                                position: relative;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                opacity: 0.35;
                                margin-right: 10px;
                            }
                            .blue {
                                background-image: -webkit-linear-gradient(
                                    180deg,
                                    #2850f0 0%,
                                    rgba(255, 255, 255, 0) 100%
                                );
                            }
                            .yellow {
                                background-image: -webkit-linear-gradient(
                                    180deg,
                                    #ffbb20 0%,
                                    rgba(255, 255, 255, 0) 100%
                                );
                            }
                            .name {
                                .wh(82px, 30px);
                                text-align: center;
                                line-height: 28px;
                                position: absolute;
                            }
                        }
                    }
                }
            }
        }
        .scroll-table-pickup {
            .wh(70px, 70px);
            margin: 255px 60px 0 auto;
            border-radius: 50%;
            opacity: 0;
        }
        .ball {
            cursor: pointer;
            transition: all 0.2s;
            position: absolute;
            opacity: 1;
            background-color: @yellow;
            top: 255px;
            right: 60px;
            .wh(70px, 70px);
            border-radius: 50%;
            box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
            > .icon-pinpai {
                margin-top: 3px;
                font-size: 45px;
                color: @bc2;
                opacity: 0.2;
                .ctt();
            }
            > div {
                margin-top: 10px;
                .wh(100%, 100%);
                text-align: center;
                color: #fff;
                font-size: 16px;
                text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12);
            }
        }
        .ball-unfold {
            .wh(330px, 440px);
            border-radius: 3px;
            opacity: 0;
            top: 74px;
            right: 240px;
            background-color: #fff;
            display: none;
        }
    }
    /deep/ .el-breadcrumb__separator {
        position: relative;
        top: -2px;
    }
    .content {
        height: 1085px;
        color: @black;
        .navigation {
            .wh(80px, 336px);
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            display: none;
            border: 1px solid #e1e6f0;
            text-align: center;
            box-sizing: border-box;
            background-color: #fff;
            box-shadow: 0px 3px 15px rgba(55, 69, 103, 0.1);
            li {
                cursor: pointer;
                box-sizing: border-box;
                height: 48px;
                line-height: 48px;
                color: @fc1;
                &:first-child {
                    background-image: -webkit-linear-gradient(
                        180deg,
                        #5f87f8 0%,
                        #3860f4 100%
                    );
                    font-size: 21px;
                    font-family: YouSheBiaoTiHei;
                    color: #fff;
                }
                &:not(:last-child) {
                    border-bottom: 1px solid #e1e6f0;
                }
                &:last-child {
                    font-size: 23px;
                    transform: rotate(180deg);
                }
                &:hover {
                    background-color: @bc;
                }
            }
            .scroll-to {
                color: @blue;
                background-color: @bc2;
            }
        }
        /deep/ .el-breadcrumb__inner {
            cursor: pointer;
            &:hover {
                color: @blue;
                font-weight: bold;
            }
        }
        .focus {
            /deep/.el-breadcrumb__inner {
                color: @blue;
                font-weight: bold;
            }
        }
        .padding-box {
            > .title {
                .flex(center);
                align-items: center;
                height: 157px;
                span {
                    font-size: 26px;
                    color: @black;
                    padding: 0 20px;
                    height: 35px;
                    line-height: 35px;
                    font-weight: 600;
                }
                img {
                    .wh(15px, 15px);
                    &:nth-child(3) {
                        transform: rotate(180deg);
                    }
                }
            }
            .info {
                height: calc(100% - 157px);

                .up {
                    .wh(100%, 392px);
                    margin-bottom: 40px;
                    .flexb();
                    .left {
                        .wh(630px, 100%);
                        background-color: #fff;
                        &-top {
                            margin-top: 50px;
                            .wh(100%, 30px);
                            .flexb();
                            &-left {
                                .flex();
                                align-items: center;
                                .ball {
                                    display: inline-block;
                                    margin-right: 10px;
                                    .wh(8px, 8px);
                                    border-radius: 50%;
                                    background: @yellow;
                                }
                                .yellow {
                                    color: @yellow;
                                }
                            }
                            &-right {
                                span {
                                    margin-right: 10px;
                                }
                            }
                        }
                        &-down {
                            height: calc(100% - 80px);
                        }
                    }
                    .right {
                        .wh(770px, 100%);
                        .flexb();
                        flex-direction: column;
                        &-up {
                            .wh(100%, 176px);
                            background-color: #fff;
                            &-top {
                                margin-top: 5px;
                                margin-left: 132px;
                                .flexb();
                            }
                            &-down {
                                height: calc(100% - 25px);
                                .container {
                                    margin-top: 20px;
                                    .wh(100%, 80px);
                                    box-sizing: border-box;
                                    .inner-slide {
                                        .wh(100%, 100%);
                                        padding: 17px 15px 11px 15px;
                                        box-sizing: border-box;
                                        .wh(100%, 100%);
                                        background: #f0fbf7;
                                        .flexb();
                                        flex-direction: column;
                                        > .up {
                                            height: 14px;
                                            .flexb();
                                            margin-bottom: 0px;
                                            .number {
                                                height: 16px;
                                                background: #ff6f00;
                                                color: #fff;
                                                padding: 0 3px;
                                                box-sizing: border-box;
                                                border-radius: 0px 3px 3px 3px;
                                            }
                                            .number-down {
                                               background: #2EB854; 
                                            }
                                        }
                                        > .down {
                                            height: 22px;
                                            span {
                                                color: @fc1;
                                            }
                                            .big-number {
                                                font-size: 22px;
                                                color: @black;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        &-down {
                            .title {
                                top: 13%;
                            }
                            .wh(100%, 186px);
                            .flexb();
                            background-color: #fff;
                            &-left {
                                .wh(450px, 100%);
                                .flexb();
                                flex-direction: column;
                                .breadcrumb {
                                    height: 26px;
                                    line-height: 26px;
                                    box-sizing: border-box;
                                }
                                > ul {
                                    .wh(100%, 90px);
                                    overflow: auto;
                                    li {
                                        height: 30px;
                                        .flexb();
                                        div {
                                            text-align: center;
                                        }
                                        .index {
                                            opacity: 0.8;
                                            flex: 1;
                                            text-align: center;
                                            font-size: 12px;
                                            .double-round {
                                                .wh(20px, 20px);
                                                background-color: #cad5fd;
                                                border-radius: 50%;
                                                line-height: 20px;
                                                position: relative;
                                                left: 50%;
                                                transform: translateX(-50%);
                                                .round {
                                                    .ctt();
                                                    .wh(16px, 16px);
                                                    line-height: 17px;
                                                    border-radius: 50%;
                                                    background-color: #3860f4;
                                                    color: #fff;
                                                }
                                            }
                                        }
                                        .area {
                                            flex: 3;
                                            color: @black;
                                        }
                                        .count {
                                            flex: 2;
                                            color: @fc1;
                                            span {
                                                font-size: 16px;
                                                font-weight: 600;
                                                color: @black;
                                            }
                                        }
                                        .compare {
                                            flex: 1;
                                            color: orange;
                                            font-size: 16px;
                                        }
                                        .compare-down {
                                            color: #2EB854;
                                        }
                                    }
                                    .row1 {
                                        background: #eff2ff;
                                    }
                                    .row2 {
                                        background: #f7f9ff;
                                    }
                                }
                            }
                            &-right {
                                img {
                                    cursor: pointer;
                                    .wh(170px, 145px);
                                    margin-right: 35px;
                                    &:hover {
                                        opacity: 0.8;
                                    }
                                }
                            }
                        }
                    }
                }
                .down {
                    .wh(100%, 426px);
                    background-color: #fff;
                    &-top {
                        .flexb();
                        .wh(100%, 26px);
                        .breadcrumb {
                            margin-left: 130px;
                        }
                        .more {
                            cursor: pointer;
                            &:hover {
                                color: @blue;
                            }
                        }
                    }
                    &-down {
                        color: @fc1;
                        height: calc(100% - 26px);
                        ul {
                            .wh(100%, 100%);
                            li {
                                height: 90px;
                                box-sizing: border-box;
                                .flexb();
                                &:not(:last-child) {
                                    border-bottom: 1px dashed @bc;
                                }
                                .name {
                                    margin-left: 15px;
                                    flex: 1;
                                    div:first-child {
                                        font-size: 16px;
                                        color: @black;
                                    }
                                }
                                .count {
                                    flex: 1;
                                    span {
                                        font-size: 20px;
                                        color: @yellow;
                                        font-weight: 600;
                                    }
                                }
                                .warehouse {
                                    flex: 1;
                                }
                                .detail {
                                    opacity: 0.8;
                                    
                                    .wh(130px, 38px);
                                    border-radius: 3px;
                                    color: @blue;
                                    border: 1px solid @blue;
                                    box-sizing: border-box;
                                    cursor: pointer;
                                    text-align: center;
                                    line-height: 38px;
                                    &:hover {
                                        color: #fff;
                                        background-color: @blue;
                                    }
                                }
                            }
                        }
                    }
                }
                > .title {
                    font-size: 20px;
                    color: @black;
                }
                .padding-box2 {
                    box-sizing: border-box;
                    padding: 25px 30px;
                    position: relative;
                    color: @black;
                    box-shadow: 0px 3px 15px rgba(55, 69, 103, 0.1);
                    > .title {
                        position: absolute;
                        font-size: 20px;
                        color: @black;
                    }
                }
            }
        }
    }
    .bg2 {
        background-color: @bc2;
    }
}
</style>
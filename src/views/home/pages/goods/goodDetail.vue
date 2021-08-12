<template>
    <div class="goodDetail">
        <div class="padding-box">
            <div class="up">
                <div class="left">
                    <img :src="goodsImg[imgIndex]" alt="">
                    <!-- <img src="../../../../assets/img/goods1.jpg" alt=""> -->
                    <swiper ref="mySwiper" class="container" :options="swiperOptions">
                        <swiper-slide v-for="(item,index) in goodsImg" :key='index'>
                            <img @click="imgIndex=index" class="pre-img" :class="imgIndex==index?'img-seleted':''" :src="item" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="right">
                    <div class="row1">
                        <span>{{goodData.commodity.commodityName}}</span>
                        <div><i class="el-icon-star-on"></i>取消收藏</div>
                    </div>
                    <div class="row2">
                        <span v-if="goodData.commodityDetails">价格：<span class="big-yellow">{{goodData.commodityDetails.commodityPrice}}</span> 元/{{goodData.commodityDetails.commoditySpecification}}</span>
                        <span class="company" @click="company" v-if="goodData.parkCompanyInfo"><i class="iconfont icon-dingwei"></i>{{goodData.parkCompanyInfo.companyName}}<i class="el-icon-arrow-right"></i></span>
                    </div>
                    <div class="bg">
                        <div class="info">
                            <div v-if="goodData.commodityDetails"><span>提货方式</span>{{goodData.commodityDetails.shoppingIdeas}}</div>
                            <div v-if="goodData.commodityDetails"><span>交易方式</span>{{goodData.commodityDetails.meansTransaction}}</div>
                            <div v-if="goodData.commodityDetails"><span>库存</span>{{goodData.commodityDetails.commodityStock}}{{goodData.commodityDetails.commoditySpecification}}</div>
                            <div v-if="goodData.commodityDetails"><span>支付方式</span>{{goodData.commodityDetails.paymentMethod}}</div>
                            <div class="button">
                                <div @click="checkContact">查看电话</div>
                                <div @click="contact">立即咨询</div>
                            </div>
                        </div>
                        <div class="concact">
                            <div>
                                <vue-seamless-scroll :data="concactList" :class-option="defaultOption">
                                    <ul class="ul-scoll">
                                        <li v-for="(item, index) in concactList" :key='index'>
                                            <div>{{item}}</div>
                                        </li>
                                    </ul>
                                </vue-seamless-scroll>
                            </div>
                            <div class="zhezao"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail">
                <div class="left-top">商品详情
                    <div class="triangle">
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>商品参数</span>
                    </div>
                    <div class="details" v-if="goodData.commodityDetails">
                        <div><span class="name">商品大类</span><span>{{goodData.commodityDetails.commodityBrand}}</span></div>
                        <div><span class="name">品牌</span><span>{{goodData.commodityDetails.commodityBrand}}</span></div>
                        <div><span class="name">地区</span><span>{{goodData.commodityDetails.commodityArea}}</span></div>
                        <div><span class="name">规格</span><span>{{goodData.commodityDetails.commoditySpecification}}</span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>仓库信息</span>
                    </div>
                    <div class="details" v-if="goodData.warehouseDetails">
                        <div><span class="name">仓库名称</span><span>{{goodData.warehouseDetails.warehouseName}}</span></div>
                        <div><span class="name">面积</span><span>{{goodData.warehouseDetails.warehouseSize}}㎡</span></div>
                        <div><span class="name">类型</span><span>{{goodData.warehouseDetails.warehouseType}}</span></div>
                        <div><span class="name">服务商</span><span>{{goodData.productCompany.companyName}}</span></div>
                        <div><span class="name">联系人</span><span>{{goodData.warehouseDetails.warehouseAdministrator}}</span></div>
                        <div><span class="name">联系电话</span><span>{{goodData.warehouseDetails.administratorPhone}}</span></div>
                        <div><span class="name">详细地址</span><span>{{goodData.warehouseDetails.warehouseAddress}}</span></div>
                    </div>
                </div>
                <div class="info" id="supplier">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>供应商信息</span>
                    </div>
                    <div class="details" v-if="goodData.parkCompanyInfo">
                        <div><span class="name">公司名称</span><span>{{goodData.parkCompanyInfo.companyName}}</span></div>
                        <div><span class="name">联系人</span><span>{{goodData.parkCompanyInfo.contactPerson}}</span></div>
                        <div><span class="name">类型</span><span>{{goodData.parkCompanyInfo.companyType}}</span></div>
                        <div><span class="name">公司注册地址</span><span>{{goodData.parkCompanyInfo.registeredAddress}}</span></div>
                        <div><span class="name">联系电话</span><span>{{goodData.parkCompanyInfo.contactPhone}}</span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>产品溯源</span>
                    </div>
                    <div class="details">
                        <div class="map">
                            <div id="mapContainer"></div>
                        </div>
                        <div class="process">
                            <div class="sec-title">
                                <div class="sec-title-name">产品流向</div>
                                <div class="line"></div>
                            </div>
                            <div class="process-detail">
                                <el-timeline>
                                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
                                        <div class="show">
                                            <div>{{activity.title}}</div>
                                            <div>{{activity.time}}</div>
                                            <div v-for="item, i in activity.info" :key="i">
                                                {{item}}
                                            </div>
                                        </div>
                                        {{activity.content}}
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="sec-title">
                        <div class="sec-title-name">产地信息</div>
                        <div class="line"></div>
                    </div>
                    <div class="details" v-if="goodData.productCompany">
                        <div style="width: 100%"><span class="name">公司名称</span><span>{{goodData.productCompany.companyName}}</span></div>
                        <div style="width: 100%"><span class="name">公司注册地址</span><span>{{goodData.productCompany.address}}</span></div>
                        <div style="width: 100%"><span class="name">联系人</span><span>{{goodData.productCompany.contactPerson}}</span></div>
                        <div style="width: 100%"><span class="name">联系电话</span><span>{{goodData.productCompany.contactNumber}}</span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="sec-title">
                        <div class="sec-title-name">商品评价</div>
                        <div class="line"></div>
                    </div>
                    <div class='message'>
                        <div class="line" v-for="item, index in goodData.commodityCommentMap" :key="index">
                            <div class="userInfo">
                                <img class="avatar" :src="item[0].userIcon || require('../../../../assets/img/avatar.png')" alt="">
                                <span class="userName">{{item[0].userName}}</span>
                            </div>
                            <div class="content">
                                <div class="reply" v-for="v, i in item" :key="i" :class="item.length > 1 ? 'reply-bottom':''">
                                    <div v-if="i > 0"><span class="userName">{{v.userName}}</span> 回复：</div>
                                    <div class="infomation">
                                        {{v.commentDesc}}
                                    </div>
                                    <div class="time">
                                        {{v.commentTime}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="concact">
                    <el-input ref="concact" type="textarea" v-model='messages' :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入留言信息"></el-input>
                </div>
                <div class="button" @click="sendMessage">
                    我要留言
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { parse } from "qs";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
    name: "goodDetail",
    components: {
        vueSeamlessScroll,
    },
    data() {
        return {
            messages: "",
            commodityId: this.$route.query.commodityId || "1",
            goodData: {
                commodity: "",
            },
            goodsImg: [
                require("../../../../assets/img/goods1.jpg"),
                require("../../../../assets/img/goods2.jpg"),
                require("../../../../assets/img/goods3.jpg"),
                require("../../../../assets/img/goods4.jpg"),
                require("../../../../assets/img/goods5.png"),
            ],
            swiperOptions: {
                slidesPerView: 4,
                grabCursor: true,
                spaceBetween: 23,
                speed: 3000,
            },

            concactList: [
                "05-28 15:00:00 邓*联系了该商品所在供应商",
                "05-28 19:23:00 万**联系了该商品所在供应商",
                "05-26 11:15:30 李*联系了该商品所在供应商",
                "06-28 15:00:00 王**联系了该商品所在供应商",
                "07-08 15:00:00 刘*联系了该商品所在供应商",
                "05-28 15:00:00 赵**联系了该商品所在供应商",
            ],
            imgIndex: 0,
            activities: [],
            latitude: 116.397428,
            longitude: 39.90923,
        };
    },
    created() {
        this.getGoodDetail(this.commodityId);
    },
    mounted() {},
    methods: {
        GaodeMap() {
            var map = new AMap.Map("mapContainer", {
                center: [this.longitude, this.latitude],
                zoom: 10,
            });
            var infoWindow = new AMap.InfoWindow({
                //创建信息窗体
                isCustom: true, //使用自定义窗体
                content: `<div class='mapInfo'>生产企业：${this.goodData.productCompany.companyName}</div>`, //信息窗体的内容可以是任意html片段
                offset: new AMap.Pixel(16, -45),
            });
            var onMarkerClick = function (e) {
                infoWindow.open(map, e.target.getPosition()); //打开信息窗体
                //e.target就是被点击的Marker
            };
            let marker = new AMap.Marker({
                position: new AMap.LngLat(this.longitude, this.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: "北京",
            });
            map.add(marker);
            marker.on('click',onMarkerClick)
        },
        company() {
            var newPage = this.$router.resolve({
                path: "/companyDetail",
                query: { id: this.goodData.parkCompanyInfo.id}, 
            });
            window.open(newPage.href, "_blank");
        },
        async getGoodDetail(id) {
            let { data } = await this.$api.getGoodDetail({ commodityId: id });
            this.goodData = data;
            this.activities = [];
            this.goodData.traceabilityList.forEach((item) => {
                this.activities.push({
                    title: item.nodeType,
                    time: item.createTime,
                    info:
                        item.nodeType == "仓储信息"
                            ? [`仓库：${item.warehouseName}`]
                            : item.nodeType == "生产信息"
                            ? [
                                  `生产企业：${item.produceName}`,
                                  `生产地点：${item.produceAddress}`,
                              ]
                            : [
                                  `运输企业：${item.warehouseName || ""}`,
                                  `运输方式：${item.transportManner}`,
                              ],
                    color: "#0bbd87",
                    type: "success",
                });
            });
            this.latitude = parseFloat(this.goodData.productCompany.latitude);
            this.longitude = parseFloat(this.goodData.productCompany.longitude);
            this.GaodeMap();
        },
        checkContact() {
            document.getElementById("supplier").scrollIntoView(true);
        },
        contact() {
            document.getElementById("concact").scrollIntoView(true);
            this.$refs.concact.focus();
        },
        async sendMessage() {
            if (!this.messages) {
                this.$message.error("请输入留言");
                return;
            }
            if (!this.$store.state.userId) {
                this.$message.error("请先登录");
                return;
            }
            let obj = {
                commentId: "",
                commodityId: this.$route.query.commodityId,
                userId: this.$store.state.userId,
                commentDesc: this.messages,
            };
            await this.$api.sendMessage(obj);
        },
    },
    computed: {
        defaultOption() {
            return {
                step: 1, // 数值越大速度滚动越快
                limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: false, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: 30, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
            };
        },
    },
};
</script>

<style lang="less" scoped>
.goodDetail {
    padding-top: 30px;
    background-color: @bc2;
    font-size: 16px;
    #mapContainer {
        .wh(800px, 400px);
    }
    .mapInfo {
        padding: 3px 5px;
        background-color: #fff;
        color: @black
    }
    .up {
        overflow: hidden;
        height: 587px;
        background: #fff;
        .bs();
        padding: 41px;
        .flex();
        .left {
            .wh(398px, 100%);
            img {
                .wh(398px, 398px);
                border: 1px solid #a6b5cd;
                .bs();
            }
            .container {
                margin-top: 18px;
                cursor: default;
                .wh(100%, 88px);
                .pre-img {
                    .wh(100%, 100%);
                    border: 1px solid #a6b5cd;
                    .bs();
                }
                .img-seleted {
                    border: 2px solid @blue;
                }
            }
            margin-right: 41px;
        }
        .right {
            flex: 1;
            .row1 {
                height: 70px;
                background: url("../../../../assets/img/baner.png");
                background-size: 100% 100%;
                padding: 0 30px;
                border-radius: 6px 6px 0px 0px;
                .flexb();
                .bs();
                span {
                    font-size: 24px;
                    font-weight: 500;
                    color: #fff;
                }
                div {
                    width: 110px;
                    height: 32px;
                    background-color: #5975ce;
                    border-radius: 16px;
                    color: #ffffff;
                    .flex(center);
                    align-items: center;
                    i {
                        color: @yellow;
                        margin-right: 5px;
                    }
                }
            }
            .row2 {
                padding: 0 30px;
                .flexb();
                .bs();
                background-color: @bc2;
                height: 70px;
                .big-yellow {
                    margin: 0 3px 0 20px;
                    .bigNumer();
                }
                span {
                    .flex();
                    align-items: center;
                }
                .iconfont {
                    .wh(23px, 23px);
                    background: linear-gradient(
                        180deg,
                        #5f87f8 0%,
                        #3860f4 100%
                    );
                    border-radius: 50%;
                    color: #fff;
                    text-align: center;
                    line-height: 23px;
                    margin-right: 5px;
                }
                .company {
                    font-size: 18px;
                    color: @black;
                    cursor: pointer;
                    &:hover {
                        color: @blue;
                    }
                }
                .el-icon-arrow-right {
                    font-size: 14px;
                    color: #7a8ba6;
                }
            }
            .info {
                height: 260px;
                color: @black;
                border-bottom: 1px dashed #e1e6f0;
                .bs();
                padding: 30px;
                .flexb();
                flex-wrap: wrap;
                div {
                    width: 50%;
                    margin-bottom: 20px;
                    span {
                        display: inline-block;
                        color: @fc1;
                        width: 100px;
                    }
                }
                .button {
                    .flex();
                    width: 100%;
                    > div {
                        margin-top: 70px;
                        .detail(130px, 42px);
                        margin-right: 20px;
                    }
                }
            }
            .bg {
                .wh(920px, 367px);
                background: url(../../../../assets/img/dedetailBg.png);
                background-size: 100% 100%;
            }
            .concact {
                height: 108px;
                padding: 15px 30px;
                .bs();
                position: relative;
                > div {
                    .wh(100%, 100%);
                    overflow: hidden;
                    .ul-scoll {
                        li {
                            height: 30px;
                        }
                    }
                }
                .zhezao {
                    position: absolute;
                    .wh(100%, 100%);
                    background-image: linear-gradient(
                        to bottom,
                        transparent,
                        #fff
                    );
                    opacity: 1;
                    top: 0px;
                }
            }
        }
    }
    .detail {
        margin-top: 40px;
        background-color: #fff;
        padding: 72px 40px 0 40px;
        .bs();
        position: relative;
        .left-top {
            position: absolute;
            .wh(166px, 42px);
            background-color: @yellow;
            font-size: 20px;
            color: white;
            text-align: center;
            line-height: 42px;
            top: 0;
            left: 0;
            .triangle {
                .wh(24px, 42px);
                background: url("../../../../assets/img/triangle.png");
                background-size: 100% 100%;
                position: absolute;
                right: -24px;
                top: 0px;
            }
        }
        .info {
            margin-bottom: 40px;
            .info-title {
                height: 40px;
                .flex();
                align-items: center;
                color: @blue;
                font-weight: bold;
                background-color: @bc2;
                .square {
                    .wh(4px, 20px);
                    background-color: @blue;
                    margin-right: 10px;
                }
            }
            .details {
                .flex();
                flex-wrap: wrap;
                margin: 20px 0;
                > div {
                    .flex();
                    align-items: center;
                    width: 33%;
                    margin: 10px 0;
                    height: 30px;
                    .name {
                        display: inline-block;
                        width: 115px;
                        color: @black;
                    }
                    .login {
                        margin-left: 20px;
                        display: inline-block;
                        text-align: center;
                        line-height: 30px;
                        font-size: 14px;
                        .wh(99px, 30px);
                        background-color: #ffeef0;
                        border-radius: 3px;
                        color: #ff5d6c;
                    }
                }
                .map {
                    .wh(800px, 400px);
                    // background-image: url("../../../../assets/img/map.jpg");
                }
                .process {
                    margin-left: auto;
                    .wh(520px, 400px);
                    display: block;
                    &-detail {
                        height: calc(100% - 29px);
                        overflow: auto;
                        padding: 25px;
                        .bs();
                        .show {
                            font-size: 14px;
                            color: @fc1;
                            div {
                                margin-bottom: 10px;
                            }
                            > div:first-child {
                                font-size: 16px;
                                color: @black;
                                margin-bottom: 15px;
                            }
                        }
                    }
                }
                .message {
                }
            }
            .sec-title {
                color: @blue;
                .flex();
                &-name {
                    height: 29px;
                    .bs();
                    width: auto;
                    border-bottom: 3px solid @blue;
                }
                .line {
                    margin-top: 27px;
                    flex: 1;
                    height: 1px;
                    background-color: #c3cffc;
                }
            }
            .message {
                .line {
                    padding: 30px 0 20px 0;
                    .bs();
                    border-bottom: 1px solid #e1e6f0;
                    .flex();
                    align-items: flex-start;
                    .userInfo {
                        .avatar {
                            .wh(32px, 32px);
                            border-radius: 50%;
                            margin-right: 15px;
                        }
                        .flex();
                        align-items: center;
                        margin-right: 30px;
                    }
                    .userName {
                        color: @blue;
                    }
                    .content {
                        flex: 1;
                        margin-top: 6px;
                        .infomation {
                            color: @black;
                        }
                        .time {
                            font-size: 14px;
                        }
                        > .reply > div {
                            margin-bottom: 15px;
                        }
                        .reply-bottom {
                            &:not(:last-child) {
                                border-bottom: 1px dashed #e1e6f0;
                                margin-bottom: 20px;
                            }
                        }
                    }
                }
            }
        }
        .button {
            margin: 40px auto;
            .detail(200px, 50px);
            background-color: rgba(56, 96, 244, 0.1);
        }
    }
}
</style>
<style lang="less">
.mapInfo {
        padding: 3px 5px;
        background-color: #fff;
        color: @black
    }
</style>
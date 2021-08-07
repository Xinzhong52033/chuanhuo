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
                        <span>二级建造焦炭</span>
                        <div><i class="el-icon-star-on"></i>取消收藏</div>
                    </div>
                    <div class="row2">
                        <span>价格：<span class="big-yellow">3910</span> 元/吨</span>
                        <span class="company" @click="company"><i class="iconfont icon-dingwei"></i>达州圣达能源有限公司<i class="el-icon-arrow-right"></i></span>
                    </div>
                    <div class="bg">
                        <div class="info">
                            <div><span>提货方式</span>仓库包出</div>
                            <div><span>交易方式</span>全款现货</div>
                            <div><span>库存</span>30吨</div>
                            <div><span>支付方式</span>交易方式全款现货</div>
                            <div class="button">
                                <div>查看电话</div>
                                <div>立即咨询</div>
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
                    <div class="details">
                        <div><span class="name">商品大类</span><span>能源产品</span></div>
                        <div><span class="name">品牌</span><span>华诺</span></div>
                        <div><span class="name">地区</span><span>达州</span></div>
                        <div><span class="name">规格</span><span>粒度：80-150mm（%）/粒度：80-150mm（%）C</span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>仓库信息</span>
                    </div>
                    <div class="details">
                        <div><span class="name">仓库名称</span><span>达州产业园</span></div>
                        <div><span class="name">面积</span><span>10000000.00㎡</span></div>
                        <div><span class="name">类型</span><span>自营</span></div>
                        <div><span class="name">服务商</span><span>达州金属加工配送有限公司</span></div>
                        <div><span class="name">联系人</span><span>张*丽</span></div>
                        <div><span class="name">联系电话</span><span>180****5544<span class="login">登录后查看</span></span></div>
                        <div><span class="name">详细地址</span><span>四川省达州市达川区S218与汇通大道东段</span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>供应商信息</span>
                    </div>
                    <div class="details">
                        <div><span class="name">内容公司名称</span><span>达州圣达能源有限公司</span></div>
                        <div><span class="name">联系人</span><span>王*丽</span></div>
                        <div><span class="name">类型</span><span>自营</span></div>
                        <div><span class="name">公司注册地址</span><span>四川省达州市万源市S218与汇通大道东段</span></div>
                        <div><span class="name">联系电话</span><span>180****5544<span class="login">登录后查看</span></span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>产品溯源</span>
                    </div>
                    <div class="details">
                        <div class="map"></div>
                        <div class="process">
                            <div class="sec-title">
                                <div class="sec-title-name">产品流向</div>
                                <div class="line"></div>
                            </div>
                            <div class="process-detail">
                                <el-timeline>
                                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
                                        <div class="show">
                                            <div>仓储信息</div>
                                            <div>2020-01-01 12:00:00</div>
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
                    <div class="details">
                        <div style="width: 100%"><span class="name">公司名称</span><span>达州圣达能源有限公司</span></div>
                        <div style="width: 100%"><span class="name">公司注册地址</span><span>四川省达州市万源市S218与汇通大道东段</span></div>
                        <div style="width: 100%"><span class="name">联系人</span><span>王*丽</span></div>
                        <div style="width: 100%"><span class="name">联系电话</span><span>180****5544<span class="login">登录后查看</span></span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="sec-title">
                        <div class="sec-title-name">商品评价</div>
                        <div class="line"></div>
                    </div>
                    <div class='message'>
                        <div class="line" v-for="item, index in messages" :key="index">
                            <div class="userInfo">
                                <img class="avatar" src="../../../../assets/img/avatar.png" alt="">
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
                <div class="button">
                    我要留言
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
    name: "goodDetail",
    components: {
        vueSeamlessScroll,
    },
    data() {
        return {
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
                "05-28 15:00:00 邓***联系了该商品所在供应商",
                "05-28 19:23:00 邓***联系了该商品所在供应商",
                "05-26 11:15:30 邓***联系了该商品所在供应商",
                "06-28 15:00:00 邓***联系了该商品所在供应商",
                "07-08 15:00:00 邓***联系了该商品所在供应商",
                "05-28 15:00:00 邓***联系了该商品所在供应商",
            ],
            imgIndex: 0,
            activities: [
                {
                    title: "仓储信息",
                    time: "2020-01-01 12:00:00",
                    info: ["仓库：达州产业园"],
                    color: "#0bbd87",
                    type: "success",
                },
                {
                    title: "运输信息",
                    time: "2020-01-01 12:00:00",
                    info: [
                        "运输企业：达州圣达能源运输有限公司",
                        "运输方式：火车",
                    ],
                    color: "#0bbd87",
                    type: "success",
                },
                {
                    title: "生产信息",
                    time: "2020-01-01 12:00:00",
                    info: [
                        "生产企业：达州圣达能源限公司",
                        "生产地点：四川省达州市万源市S218与汇通大道东段",
                    ],
                    color: "#0bbd87",
                    type: "success",
                },
            ],
            messages: [
                [
                    {
                        commentId: "2",
                        commodityId: "1",
                        userId: "2",
                        commentTime: "2021-01-01 12:21:00",
                        commentDesc: "呵呵",
                        replyId: null,
                        isDelete: 0,
                        deleteTime: null,
                        userName: "阿**强",
                        mobile: null,
                    },
                    {
                        commentId: "1",
                        commodityId: "1",
                        userId: "1",
                        commentTime: "2021-01-01 12:21:00",
                        commentDesc: "哈哈",
                        replyId: "1",
                        isDelete: 0,
                        deleteTime: null,
                        userName: "达州圣达能源限公司",
                        mobile: "17636222096",
                    },
                    {
                        commentId: "1",
                        commodityId: "1",
                        userId: "1",
                        commentTime: "2021-01-01 12:21:00",
                        commentDesc: "还有任何问题欢迎咨询",
                        replyId: "1",
                        isDelete: 0,
                        deleteTime: null,
                        userName: "达州圣达能源限公司",
                        mobile: "17636222096",
                    },
                    {
                        commentId: "1",
                        commodityId: "1",
                        userId: "1",
                        commentTime: "2021-01-01 12:21:00",
                        commentDesc: "东西很一般般啊",
                        replyId: "1",
                        isDelete: 0,
                        deleteTime: null,
                        userName: "阿**强",
                        mobile: "17636222096",
                    },
                ],
                [
                    {
                        commentId: "2",
                        commodityId: "1",
                        userId: "2",
                        commentTime: "2021-01-01 12:21:00",
                        commentDesc:
                            "第二次购买，焦炭质量上乘，供应商态度良好，以后继续合作。",
                        replyId: null,
                        isDelete: 0,
                        deleteTime: null,
                        userName: "无名者",
                        mobile: null,
                    },
                ],
            ],
        };
    },
    methods: {
        company() {
            var newPage = this.$router.resolve({
                path: "/companyDetail",
                params: { id: 12313131231 },
            });
            window.open(newPage.href, "_blank");
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
                    background-image: url("../../../../assets/img/map.jpg");
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
<template>
    <div class="demandDetail">
        <header>
            <div class="top">
                <div class="padding-box">
                    <transparentHeader></transparentHeader>
                </div>
            </div>
            <div class="content padding-box">
                <div class="left">
                    <div class="want">求购沫煤</div>
                    <div class="time">发布时间：2021-05-27 16:00:00</div>
                    <div class="tag">
                        <div>现货/标准品</div>
                        <div>协议采购(长期采购)</div>
                    </div>
                </div>
                <div class="right">
                    <i class="el-icon-star-on"></i>
                    取消收藏
                </div>
            </div>
        </header>
        <div class="outer">
            <div class="section padding-box">
                <div class="left-top">需求单</div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>基础信息</span>
                    </div>
                    <div class="details">
                        <div><span class="name">截止日期</span><span>2021-06-10 16:10:00</span></div>
                        <div><span class="name">类型</span><span>现货/标准品</span></div>
                        <div><span class="name">采购类型</span><span>协议采购（长期采购）</span></div>
                        <div><span class="name">发票要求</span><span>增值税专票（不限开具方）</span></div>
                        <div><span class="name">报价要求</span><span>报价含税，报价需要包含运费</span></div>
                        <div><span class="name">收货地址</span><span>成都市成华区二仙桥某某社区</span></div>
                        <div><span class="name">期望收货日期</span><span>2021-06-10 16:10:00 至 2021-06-30 16:10:00</span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>联系方式</span>
                    </div>
                    <div class="details">
                        <div><span class="name">联系人</span><span>李易峰</span></div>
                        <div><span class="name">联系电话</span><span>180****5544<span class="login">登录后查看</span></span></div>
                        <div><span class="name">公司名称</span><span>达州****有限公司<span class="login">登录后查看</span></span></div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-title">
                        <div class="square"></div>
                        <span>商品清单</span>
                        <div class="count">合计：<span>￥40,066</span></div>
                    </div>
                    <div class="table">
                        <DataTable style="width: 100%" :columns="tableColumns" :border='true' :data="tableData" :highlightCurrentRow="true">
                            <template slot="number" slot-scope="{row}">
                                <span class="link"> {{row.number}}</span>
                            </template>
                            <template slot="pre" slot-scope="{row}">
                                <span class="link"> {{row.pre}}</span>
                            </template>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
         <el-footer class="main-footer">
            <homeFooter></homeFooter>
        </el-footer>
    </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import transparentHeader from '../layout/transparentHeader.vue'
import homeFooter from '@/views/layout/footer.vue'


const tableColumns = [
    {
        title: "序号",
        align: "center",
        name: "index",
        width: "100px",
        showOverflow: true,
    },
    {
        title: "商品名称",
        align: "center",
        name: "name",
        width: "400px",
        showOverflow: true,
    },
    {
        title: "数量(件)",
        align: "center",
        name: "__slot:number",
        width: "200px",
        showOverflow: true,
    },
    {
        title: "预算(元)",
        align: "center",
        name: "__slot:pre",
        width: "300px",
        showOverflow: true,
    },
    {
        title: "备注",
        align: "center",
        name: "remark",
        // width: "300px",
        showOverflow: true,
    },
];
export default {
    name: "demandDetail",
    components: {
        DataTable,
        transparentHeader,
        homeFooter
    },
    data() {
        return {
            tableData: [
                {
                    index: 0,
                    name: "4-2混沫煤",
                    number: "20",
                    pre: "5000",
                    remark: "纯度>50%",
                },
                {
                    index: 1,
                    name: "4-2混沫煤",
                    number: "20",
                    pre: "5000",
                    remark: "纯度>50%",
                },
                {
                    index: 2,
                    name: "4-2混沫煤",
                    number: "20",
                    pre: "5000",
                    remark: "纯度>50%",
                },
            ],
            tableColumns,

            swiperOptions: {
                slidesPerView: 4,
                grabCursor: true,
                spaceBetween: 23,
                speed: 3000,
            },
            concactList: [
                "05-28 15:00:00 邓***联系了该商品所在供应商",
                "05-28 15:00:00 邓***联系了该商品所在供应商",
                "05-28 15:00:00 邓***联系了该商品所在供应商",
                "05-28 15:00:00 邓***联系了该商品所在供应商",
                "05-28 15:00:00 邓***联系了该商品所在供应商",
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
        getRow(row) {
            console.log(row);
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
.demandDetail {
    width: 100%;
    background-color: @bc2;
    header {
        .wh(100%, 225px);
        background: url("../../assets/img/header.jpg") no-repeat;
        background-size: 100% 100%;
        // box-shadow: 0px 3px 15px #3860F4;
        .top {
            height: 40px;
            background-color: rgba(0, 0, 0, 0.15);
        }
        .content {
            height: 185px;
            .flexb();
            align-items: center;
            color: #fff;
            .left {
                .want {
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .time {
                    color: #c3cffc;
                    margin-bottom: 20px;
                }
                .tag {
                    .flex();
                    div {
                        background: rgba(255, 255, 255, 0.2);
                        padding: 0 5px;
                        height: 24px;
                        font-size: 14px;
                        line-height: 24px;
                        margin-right: 10px;
                    }
                }
            }
            .right {
                width: 110px;
                height: 32px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 3px;
                font-size: 14px;
                line-height: 32px;
                text-align: center;
                cursor: pointer;
                i {
                    font-size: 16px;
                }
            }
        }
    }
    .outer {
        background-color: @bc2;
    }

    .link {
        color: @yellow;
        font-weight: 600;
    }
    .section {
        margin-top: 40px;
        background-color: #fff;
        padding: 72px 40px 0 40px;
        font-size: 16px;
        .bs();
        position: relative;
        .left-top {
            position: absolute;
            .wh(190px, 42px);
            background-color: @yellow;
            font-size: 20px;
            color: white;
            text-align: center;
            line-height: 42px;
            top: 0;
            left: 0;
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
                .count {
                    margin-left: auto;
                    color: @fc1;
                    font-size: 16px;
                    span {
                        color: @yellow;
                        font-size: 22px;
                        margin-right: 20px;
                    }
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
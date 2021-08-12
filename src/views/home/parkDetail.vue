<template>
    <div class="parkDetail">
        <header>
            <div class="top">
                <div class="padding-box">
                    <transparentHeader></transparentHeader>
                </div>
            </div>
            <div class="content padding-box">
                <div class="left">
                    <img src="../../assets/img/company.jpg" alt="" />
                    <div>
                        <div class="want">攀枝花钒钛产业园区</div>
                        <div class="location">
                            <span><i class="el-icon-location"></i>攀枝花市金沙江大道东段1491号</span>
                        </div>
                        <div class="tag">
                            <div>土地资源</div>
                            <div>厂房租赁</div>
                            <div>仓库租售</div>
                            <div>税收优惠</div>
                            <div>写字楼</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <i class="el-icon-star-on"></i>
                    取消收藏
                </div>
            </div>
        </header>
        <div class="introduce">
            <div class="padding-box">
                <div class="carousel">
                    <el-carousel :height="540*$widthCoefficient+'px'">
                        <el-carousel-item v-for="item in imgs" :key="item">
                            <img :src="item" alt="" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="info">
                    <div>
                        <span class="underLine-title">供应商简介</span>
                        <div class="content">
                            攀枝花钒钛高新技术产业开发区（以下简称钒钛高新区）始建于2001年，公告面积
                            3.10平方公里，实际管辖面积99.77平方公里，城市控规总面积31.16平方公里，已建成工业区总面积16.5平方公里。2006年1月，经国家发改委批准为“四川攀枝花钒钛产业园区”；2013年8月，被省政府认定为省级高新技术产业园区；2015年9月，被国务院批准为国家级高新技术产业开发区，是经国务院批准的首个以金属材料产业开发为主要依托的国家级高新区。先后荣膺国家外贸转型升级专业型示范基地、四川省新型工业化示范基地、四川省循环经济试点园区、四川省知识产权试点园区、四川省生产性服务业示范基地、四川省省级出口钒钛质量安全示范区、全国产业集群区域品牌建设“钒钛产”。
                        </div>
                    </div>
                    <div>
                        <div class="underLine-title">联系方式</div>
                        <div class="contact">
                            <span class="item"><i class="iconfont icon-a-zu1350"></i>王*钢</span>
                            <span>|</span>
                            <span class="item"><i class="iconfont icon-dianhua"></i>135****7350</span>
                            <span>|</span>
                            <span class="item"><i class="iconfont icon-youxiang"></i>1435871767@qq.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="basic-info">
                <div class="padding-box">
                    <div class="title">
                        <span class="underLine-title">基本信息</span>
                    </div>
                    <div class="items">
                        <div class="left">
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">园区类型</span>
                                </div>
                                <div class="bottom">其它</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">园区类别</span>
                                </div>
                                <div class="bottom">租赁</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">园区产业</span>
                                </div>
                                <div class="bottom">其他化工、电子信息</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">人员规模</span>
                                </div>
                                <div class="bottom"><span class="number">1780</span> 人</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">工业土地均价</span>
                                </div>
                                <div class="bottom"><span class="number">17</span>万/亩</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">工业土地供应量</span>
                                </div>
                                <div class="bottom"><span class="number">170</span>亩</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">内容商办土地均价</span>
                                </div>
                                <div class="bottom"><span class="number">34</span>万/亩</div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">商办土地供应量</span>
                                </div>
                                <div class="bottom"><span class="number">5.1</span>亩</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="management">
                <div class="title">
                    <span class="underLine-title">经营情况</span>
                </div>
                <div class="title" style="font-size: 14px">
                    数据截止到2020年12月31日
                </div>
                <div class="padding-box">
                    <div class="left card">
                        <div>
                            <div><span class="number">845</span>亿元</div>
                            <div>固定资产投资</div>
                        </div>
                        <div>
                            <div><span class="number">231</span>亿元</div>
                            <div>设计产能</div>
                        </div>
                    </div>
                    <div class="right card">
                        <div>
                            <div><span class="number">32.81</span>亿元</div>
                            <div>年工业总产值</div>
                        </div>
                        <div>
                            <div><span class="number">4501</span>亿元</div>
                            <div>年入库税金</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logistics">
                <div class="title">
                    <span class="underLine-title">推荐物流公司</span>
                </div>
                <div class="padding-box">
                    <div class="card" v-for="item in 12" :key="item">
                        <img src="../../assets/img/wuliu.jpg" alt="" />
                        <div>
                            <div class="bb">思益物流</div>
                            <div>常运路线：广东 、汕头、深圳</div>
                        </div>
                    </div>
                </div>
                <div class="title">
                    <div class="button">查看更多</div>
                </div>
            </div>
            <div class="logistics route">
                <div class="title">
                    <span class="underLine-title">推荐路线</span>
                </div>
                <div class="padding-box">
                    <div class="card" v-for="item in 6" :key="item">
                        <div>
                            <div class="bb">成都 ------ 北京</div>
                            <div>铁路运输、公路运输</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logistics company">
                <div class="title">
                    <span class="underLine-title">企业名录</span>
                </div>
                <div class="padding-box">
                    <div class="table">
                        <DataTable style="width: 100%" :columns="tableColumns" :border="true" :data="list.items" :highlightCurrentRow="true" :total='list.total'>
                            <template slot="detail" slot-scope="{ row }">
                                <span class="link" @click="company"> 查看> </span>
                            </template>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
         <el-footer class="main-footer">
            <homeFooter></homeFooter>
        </el-footer>
        <el-dialog title="收货地址" width="1200px" :visible.sync="dialogVisible">
            <template slot="title">
                <span class="dialog-title">四川东科管道设备有限公司</span>
            </template>
            <div class="content">
                <table class="tableForm" cellspacing=0>
                    <tr>
                        <td class="name">统一社会信用代码</td>
                        <td class="value">9156673MA6121235</td>
                        <td class="name">纳税人识别号</td>
                        <td class="value">9156673MA6121235</td>
                    </tr>
                     <tr>
                        <td class="name">法定代表人</td>
                        <td class="value">张三</td>
                        <td class="name">企业类型</td>
                        <td class="value">民营</td>
                    </tr>
                     <tr>
                        <td class="name">成立日期</td>
                        <td class="value">2001-03-01</td>
                        <td class="name">注册资本</td>
                        <td class="value">1000万元</td>
                    </tr>
                     <tr>
                        <td class="name">联系电话</td>
                        <td class="value">18203345677</td>
                        <td class="name">注册地址</td>
                        <td class="value">四川省-成都市-新都区</td>
                    </tr>
                     <tr>
                        <td class="name">公司地址</td>
                        <td class="value">xxxx路xxxx街道xx号</td>
                        <td class="name">主营行业</td>
                        <td class="value">现代物流、现代商贸</td>
                    </tr>
                   <tr>
                        <td class="name">人员规模</td>
                        <td class="value">50-100人</td>
                        <td class="name">经营期限至</td>
                        <td class="value">长期有效</td>
                    </tr>
                     <tr>
                        <td class="name">主营产品</td>
                        <td class="value">现代物流、现代商贸</td>
                        <td class="name">经营范围</td>
                        <td class="value">从事货物进出口及技术进出口的对外贸易经营；网上销售商品；批发零售食品、日用百货、工艺美术品、家用电器、五金交电、针纺织品、度量衡器具、保健用品、汽车、汽车装饰用品、健身器材、电讯器材、摄影器材、家具、建筑装饰材料、皮革制品；仓储（不含危险品）；物流信息咨询；餐饮服务；组织策划文化交流活动。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。</td>
                    </tr>
                </table>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import transparentHeader from "../layout/transparentHeader.vue";
import Pagenation from "@/components/pagenation.vue";
import homeFooter from '@/views/layout/footer.vue'
import axios from 'axios'
const tableColumns = [
    {
        title: "序号",
        align: "center",
        name: "index",
        width: "100px",
        showOverflow: true,
    },
    {
        title: "企业名称",
        align: "center",
        name: "name",
        width: "400px",
        showOverflow: true,
    },
    {
        title: "注册资金(万元)",
        align: "center",
        name: "capital",
        width: "200px",
        showOverflow: true,
    },
    {
        title: "注册时间",
        align: "center",
        name: "time",
        width: "200px",
        showOverflow: true,
    },
    {
        title: "经营范围",
        align: "center",
        name: "fanwei",
        // width: "300px",
        showOverflow: true,
    },
    {
        title: "详细信息",
        align: "center",
        name: "__slot:detail",
        width: "120px",
        showOverflow: true,
    },
];
export default {
    name: "parkDetail",
    components: {
        DataTable,
        transparentHeader,
        Pagenation,
        homeFooter
    },
    data() {
        return {
            dialogVisible: false,
            imgs: [
                require("../../assets/img/cm01.png"),
                require("../../assets/img/cm02.png"),
                require("../../assets/img/cm03.png"),
            ],
            tableColumns,
            currentPage: 1,
            pageSize: 10,
            select: {
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            },
            list: {
                total: 11,
                currentPage: 1,
                pageSize: 10,
                items: [
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 1,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 2,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 3,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 4,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 5,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 6,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 7,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 8,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 9,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 10,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                    {
                        index: 11,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        time: "2016-10-01",
                        fanwei: "从事货物进出口及技术进出口的对外贸...",
                        detail: "",
                    },
                ],
            },
            parkId: {

            }
        };
    },
    methods: {
        getRow(row) {
            console.log(row);
        },
        company() {
            this.dialogVisible = true;
        },
        async getParKInfo() {
           let {data} =  await axios.get(
                `http://loading.spsict.com/china_maps/${this.$route.query.adcode}.json`
            );
        }
    },
};
</script>

<style lang="less" scoped>
.parkDetail {
    font-size: 16px;
    width: 100%;
    background-color: @bc2;
    header {
        .wh(100%, 225px);
        background: url("../../assets/img/header.jpg") no-repeat;
        background-size: 100% 100%;
        box-shadow: 0px 3px 5px grey;
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
                .flex();
                img {
                    .wh(166px ,125px);
                    border: 1px solid #ffffff;
                    .bs();
                }
                > div {
                    .flexb();
                    flex-direction: column;
                    align-items: flex-start;
                    margin-left: 20px;
                    .want {
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .location {
                        .flex();
                        span {
                            margin-right: 20px;
                            opacity: 0.7;
                            .flex();
                            align-items: center;
                            i {
                                margin-right: 3px;
                            }
                        }
                        .park {
                            cursor: pointer;
                            &:hover {
                                opacity: 1;
                            }
                        }
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
    .link {
        color: @blue;
        cursor: pointer;
        &:hover {
            color: @yellow;
        }
    }
    .introduce {
        height: 640px;
        background-color: @bc2;
        .padding-box {
            position: relative;
        }
        .carousel {
            .wh(720px, 540px);
            // background-color: pink;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            border: 1px solid #e1e6f0;
            .bs();
            img {
                .wh(720px, 540px);
            }
        }
        .info {
            position: absolute;
            padding: 30px;
            .bs();
            .wh(780px, 445px);
            background: #ffffff;
            box-shadow: 0px 5px 20px rgba(56, 96, 244, 0.2);
            top: 50%;
            right: 20px;
            transform: translate(0, -50%);
            .flexb();
            flex-direction: column;
            align-items: flex-start;
            .content {
                line-height: 30px;
                margin-bottom: 20px;
            }
            > div {
                width: 100%;
            }
            .contact {
                width: 100%;
                i {
                    color: @blue;
                    margin-right: 16px;
                    // font-weight: 600;
                }
                .flexb();
            }
        }
    }
    .section {
        overflow: hidden;
        background-color: #fff;
        .title {
            text-align: center;
        }
        .basic-info {
            background-color: #fff;
            padding: 40px 0;
            .title {
                margin-bottom: 20px;
            }
            .items {
                .flexb();
                .left {
                    width: 100%;
                    height: 320px;
                    .flexb();
                    flex-wrap: wrap;
                    align-content: space-between;
                    .card {
                        .wh(330px, 140px);
                    }
                }
                .card {
                    // background: url(../../assets/img/logisticsCompany.png);
                    // background-size: 100% 100%;
                    background-color: #fff;
                    border: 1px solid #e1e6f0;
                    .bs();
                    padding: 36px;
                    .flexb();
                    flex-direction: column;
                    align-items: flex-start;
                    position: relative;
                    .top {
                        .flex();
                        align-items: center;
                        .item {
                            color: @blue;
                            font-weight: 600;
                        }
                    }
                    .number {
                        color: @yellow;
                        font-size: 20px;
                        font-weight: 600;
                        margin-right: 5px;
                    }
                    &:hover {
                        background: #ffffff;
                        box-shadow: 0px 5px 15px rgba(56, 96, 244, 0.25);
                    }
                }
            }
        }
        .management {
            background: @bc2;
            padding: 40px 0;
            font-size: 18px;
            .padding-box {
                margin-top: 30px;
                .flexb();
                .card {
                    .wh(700px, 150px);
                    .flex(space-around);
                    align-items: center;
                    color: #fff;
                    .number {
                        .bigNumer(40px);
                        margin-right: 5px;
                    }
                }
                .left {
                    background: url(../../assets/img/manageLeft.jpg);
                    background-size: 100% 100%;
                }
                .right {
                    background: url(../../assets/img/manageRight.jpg);
                    background-size: 100% 100%;
                }
            }
        }
        .logistics {
            padding: 40px;
            .padding-box {
                margin-top: 40px;
                .flexb();
                flex-wrap: wrap;
                .card {
                    .wh(453px, 130px);
                    border: 1px solid #e1e6f0;
                    background: url(../../assets/img/logisticsCompany.png);
                    background-size: 100% 100%;
                    padding-left: 40px;
                    .bs();
                    img {
                        .wh (47px, 40px);
                        margin-right: 10px;
                    }
                    margin-bottom: 40px;
                    .flex();
                    align-items: center;
                    .bb {
                        font-size: 20px;
                        color: @black;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }
                }
            }
            .button {
                margin: 0 auto;
                .detail(200px, 50px);
            }
        }
        .route {
            background-color: @bc2;
            .padding-box {
                .card {
                    background: url(../../assets/img/path.jpg);
                    background-size: 100% 100%;
                    border: none;
                    &:hover {
                        background: url(../../assets/img/pathHover.jpg);
                        background-size: 100% 100%;
                        box-shadow: 0px 3px 15px #f2a086;
                    }
                    .bb {
                        color: #fff;
                    }
                }
            }
            color: #bbb;
        }
        .company {
            .padding-box {
                margin-top: 0;
                .table {
                    width: 100%;
                }
            }
        }
    }
    // 公共样式
    .underLine-title {
        display: inline-block;
        font-size: 24px;
        color: @black;
        background-image: -webkit-linear-gradient(
            top,
            #fff,
            #fff 70%,
            rgba(48, 12, 231, 0.3)
        );
        margin-bottom: 20px;
    }
    .ball {
        display: inline-block;
        .wh(18px, 18px);
        background-image: linear-gradient(to left, #ffffff, #3860f4);
        border-radius: 50%;
        margin-right: 10px;
    }
    /deep/.el-dialog {
        border-radius: 6px 6px 0px 0px;
        .el-dialog__header {
            height: 70px;
            background: linear-gradient(90deg, #5f87f8 0%, #3860f4 100%);
            border-radius: 6px 6px 0px 0px;
            padding: 0 50px;
            .bs();
        }
        .dialog-title {
            font-size: 24px;
            color: #fff;
            line-height: 70px;
        }
        .el-dialog__headerbtn {
            right: 50px;
            .wh(32px, 32px);
            border-radius: 50%;
            background: rgba(95, 135, 248, 1);
            .el-dialog__close {
                color: #fff;
                font-size: 24px;
            }
        }
        .content {
            padding: 10px 30px;
        }
    }
    .tableForm {
        width: 100%;
        font-size: 16px;
        tr {
          width: 100%;
        }
        td {
            height: 56px;
            text-align: left;
            border-right: 1px solid #E1E6F0;
            border-bottom: 1px solid #E1E6F0;
            padding: 10px;
        }
        .name {
            background-color: @bc2;
            width: 15%;
            color: @fc1;
        }
        .value {
          width: 35%;
            color: @black;
        }
        border-top:  1px solid #E1E6F0;
        border-left: 1px solid #E1E6F0;;  
    }
}
</style>
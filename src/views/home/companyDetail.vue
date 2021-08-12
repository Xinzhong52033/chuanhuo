<template>
    <div class="companyDetail">
        <header>
            <div class="top">
                <div class="padding-box">
                    <transparentHeader></transparentHeader>
                </div>
            </div>
            <div class="content padding-box">
                <div class="left">
                    <img :src="headImg || require('../../assets/img/company.jpg')" alt="" />
                    <div>
                        <div class="want">{{companyInfo.companyName}}</div>
                        <div class="location">
                            <span><i class="el-icon-location"></i>{{companyInfo.companyAddress}}</span><span v-if="companyInfo.parkName">|</span><span class="park" @click="park" v-if="companyInfo.parkName"><i class="iconfont icon-yuanqu"></i>{{companyInfo.parkName}}</span>
                        </div>
                        <div class="tag">
                            <div v-if="companyInfo.mainProducts">主营：{{companyInfo.mainProducts}}</div>
                            <!-- <div>高钒铁</div>
                                  <div>钒氮合金</div>
                                  <div>钒铝合金</div> -->
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
                <div class="carousel" v-if="imgs1">
                    <el-carousel :height="540*$widthCoefficient+'px'">
                        <el-carousel-item v-for="item in imgs1" :key="item">
                            <img :src="item" alt="" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="info">
                    <div>
                        <span class="underLine-title">供应商简介</span>
                        <div class="content">
                            <!-- 攀钢集团钒钛资源股份有限公司成立于1993年03月27日，注册地位于攀枝花市东区弄弄坪，法定代表人为谢俊勇。<br />
              经营范围包括生产销售钒钛制品（含危险化学品，凭许可证许可范围及期限从事经营，有效期至2021年9月28日）；生产销售金属制品；销售（含互联网销售）：矿产品（不含煤炭及制品）、冶金辅料、金属材料、五金、交电、劳保用品；钒钛产品检验服务；电力供应；机械设备维修服务；仓储服务（含危险化学品，凭许可证许可范围及期限从事经营，有效期至2021年5月2日）；货物运输代理服务；钒钛制品生产技术开发、技术咨询、技术服务、技术转让；货物与技术进出口业务。 -->
                            {{companyInfo.companyDesc}}
                        </div>
                    </div>
                    <div>
                        <div class="underLine-title">联系方式</div>
                        <div class="contact">
                            <span class="item"><i class="iconfont icon-a-zu1350"></i>{{companyInfo.contactPerson?companyInfo.contactPerson:'暂无'}}</span>
                            <span>|</span>
                            <span class="item"><i class="iconfont icon-dianhua"></i>{{companyInfo.contactNumber?companyInfo.contactNumber:'暂无'}}</span>
                            <span>|</span>
                            <span class="item"><i class="iconfont icon-youxiang"></i>{{companyInfo.contactEmail?companyInfo.contactEmail:'暂无'}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="padding-box">
                <div class="title">
                    <span class="underLine-title">供应商品</span>
                </div>
                <!-- <div class="classify">
          <span class="button">全部</span>
          <span class="button">钒系列</span>
          <span class="button">钛系列</span>
        </div> -->
                <ul class="goodsList">
                    <li v-for="(item, index) in list.items" :key="index">
                        <div class="item-top">
                            <div class="demand">
                                <div class="want big-black">{{item.commodityName}}</div>
                                <div class="company">
                                    <span><i class="iconfont icon-cangku"></i>{{item.warehouseName}}</span><span>|</span><span><i class="iconfont icon-qiye"></i>{{item.supplierName}}</span>
                                </div>
                            </div>
                            <div>库存：{{item.commodityStock}}{{item.commoditySpecification}}</div>
                        </div>
                        <div class="item-top item-bottom">
                            <div class="demand">
                                <span class="big-number">{{item.commodityPrice}}</span> 元/{{item.commoditySpecification}}
                            </div>
                            <div class="detail" @click=checkDetail(item)>查看详情</div>
                        </div>
                    </li>
                </ul>
                <Pagenation class="pagenation" v-if="list.total>10" :total="list.total" :page-size="list.pagesize" :current-page="list.currentPage" @page-size-change="handlePageSizeChange" @page-change="handlePageChange"></Pagenation>
            </div>
            <div class="business-info">
                <div class="padding-box">
                    <div class="title">
                        <span class="underLine-title">工商信息</span>
                    </div>
                    <div class="items">
                        <div class="left">
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">企业注册名称</span>
                                </div>
                                <div class="bottom">
                                    {{companyInfo.companyName}}
                                </div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">认证信息</span>
                                </div>
                                <div class="bottom">
                                    {{companyInfo.authenticate=='1'?'已认证':'未认证'}}
                                </div>
                                <img class="unverified" v-if="companyInfo.authenticate!='1'" src="../../assets/img/unverified.png" alt="">
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">法定代表人</span>
                                </div>
                                <div class="bottom">
                                    {{companyInfo.legalPerson}}
                                </div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">注册资金</span>
                                </div>
                                <div class="bottom">
                                    {{companyInfo.registeredCapital}}
                                </div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">成立日期</span>
                                </div>
                                <div class="bottom">
                                    {{companyInfo.approvedDate}}
                                </div>
                            </div>
                            <div class="card">
                                <div class="top">
                                    <span class="ball"></span>
                                    <span class="item">税号/统一社会信用代码</span>
                                </div>
                                <div class="bottom">
                                    {{companyInfo.agencyCode}}
                                </div>
                            </div>
                        </div>
                        <div class="right card">
                            <div class="top">
                                <span class="ball"></span>
                                <span class="item">营业执照</span>
                            </div>
                            <!-- <img src="../../assets/img/zz.jpg" alt=""> -->
                            <div class="businessLicense" v-if="companyInfo.businessLicense!=''">
                                <el-image style="width: 100%; height: 100%" :src="companyInfo.businessLicense" :preview-src-list="srclist">
                                </el-image>
                            </div>
                            <div class="businessLicense" v-if="companyInfo.businessLicense==''">
                                <el-image style="width: 100%; height: 100%" :src="require('../../assets/img/zz.jpg')" >
                                </el-image>
                            </div>
                        </div>
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
import transparentHeader from "../layout/transparentHeader.vue";
import Pagenation from "@/components/pagenation.vue";
import homeFooter from "@/views/layout/footer.vue";

export default {
    name: "demandDetail",
    components: {
        DataTable,
        transparentHeader,
        Pagenation,
        homeFooter,
    },
    data() {
        return {
            id: this.$route.query.id || "1",
            imgs: [
                require("../../assets/img/cm01.png"),
                require("../../assets/img/cm02.png"),
                require("../../assets/img/cm03.png"),
            ],
            imgs1: [
                require("../../assets/img/cm01.png"),
                require("../../assets/img/cm02.png"),
                require("../../assets/img/cm03.png"),
            ],
            headImg: "",
            srclist: [],
            currentPage: 1,
            pageSize: 10,
            select: {
                pageNum: "",
                pageSize: "",
                supplierId: this.$route.query.id,
            },
            list: {
                total: 0,
                currentPage: this.currentPage,
                pageSize: this.pageSize,
                items: {},
            },
            companyInfo: {},
        };
    },
    created() {
        this.getCompanyInfo();
        this.getGoodSList()
    },
    methods: {
        getRow(row) {
            console.log(row);
        },
        checkDetail(item) {
            var newPage = this.$router.resolve({
                path: "/goodDetail",
                query: { commodityId: item.commodityId },
            });
            window.open(newPage.href, "_blank");
        },
        park() {
            var newPage = this.$router.resolve({
                path: "/parkDetail",
                query: { id: this.companyInfo.parkId},
            });
            window.open(newPage.href, "_blank");
        },
        async getCompanyInfo() {
            let { data } = await this.$api.getCompanyInfo({ id: this.id });
            this.companyInfo = data;
            this.imgs = this.companyInfo.icon.split(";");
            this.headImg = this.imgs[0];
            this.srclist = [this.companyInfo.businessLicense];
        },
        handlePageSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.getGoodSList();
        },
        handlePageChange(page) {
            this.currentPage = page;
            this.getGoodSList();
        },
        async getGoodSList(pageNum) {
            this.select.pageNum = this.currentPage
            this.select.pageSize =  this.pageSize
            let { data } = await this.$api.getGoodSList(this.select);
            this.list.total = data.total,
            this.list.currentPage = data.pageNum,
            this.list.pageSize = data.pageSize,
            this.list.items = data.list;
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
.companyDetail {
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
                .flex(space-around);
            }
        }
    }
    .section {
        padding-top: 40px;
        overflow: hidden;
        background-color: #fff;
        .title {
            text-align: center;
        }
        .classify {
            margin: 40px 0 50px 0;
            .flex(center);
            .button {
                .detail(160px, 46px);
                background-color: rgba(122, 139, 166, 0.1);
                margin: 0 20px;
            }
        }
        .goodsList {
            margin-top: 20px;
            .flexb();
            flex-wrap: wrap;
            li {
                height: 200px;
                .wh(48%, 200px);
                border-radius: 3px;
                background-color: #fff;
                margin-bottom: 30px;
                border: 1px solid #e1e6f0;
                &:hover {
                    box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.15);
                }
                .item-top {
                    height: 107px;
                    padding: 0 40px;
                    .bs();
                    .flexb();
                    .demand {
                        .want {
                            margin-bottom: 10px;
                        }
                        .company {
                            i {
                                color: @blue;
                                margin-right: 5px;
                                font-size: 18px;
                            }
                            .flex();
                            align-items: center;
                            span {
                                margin-right: 20px;
                            }
                        }
                    }
                }
                .item-bottom {
                    height: calc(100% - 107px);
                    background: @bc2;
                }
                .bs();
                .detail {
                    .detail(120px, 40px);
                }
                .big-number {
                    color: @yellow;
                    font-size: 36px;
                    font-weight: 600;
                }
                .mb-14 {
                    margin-bottom: 14px;
                }
                .big-black {
                    color: @black;
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }
        .pagenation {
            text-align: center;
            margin-bottom: 30px;
        }
        .business-info {
            background-color: @bc2;
            padding: 40px 0;
            .title {
                margin-bottom: 20px;
            }
            .items {
                .flexb();
                .left {
                    width: 1172px;
                    height: 320px;
                    .flexb();
                    flex-wrap: wrap;
                    align-content: space-between;
                    .card {
                        .wh(364px, 140px);
                    }
                }
                .right {
                    .wh(228px, 320px);
                }
                .card {
                    background: #fff;
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
                        }
                    }
                    img {
                        .wh(147px, 205px);
                        border: 1px solid #e1e6f0;
                        box-sizing: border-box;
                    }
                    .businessLicense {
                        .wh(147px, 205px);
                        border: 1px solid #e1e6f0;
                        box-sizing: border-box;
                    }
                    .unverified {
                        .wh(80px, 80px);
                        .ctt();
                        left: 75%;
                        border: none;
                    }
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
            transparent,
            #fff 70%,
            rgba(205, 215, 252, 1)
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
}
</style>
<template>
    <div class="collect">
        <div class="button">
            <div @click="select='川货商品'" :class="select=='川货商品'?'select':''">川货商品</div>
            <div @click="select='川货供应商'" :class="select=='川货供应商'?'select':''">川货供应商</div>
            <div @click="select='需求'" :class="select=='需求'?'select':''">需求</div>
            <div @click="select='产业园区'" :class="select=='产业园区'?'select':''">产业园区</div>
        </div>
        <div class="outer" v-if="select=='川货商品'">
            <ul class="goodsList">
                <li v-for="(item, index) in 10" :key="index">
                    <div class="item-up">
                        <div class="demand">
                            <div class="want big-black">豆粕 - 饲料用</div>
                            <div>库存：3.142吨</div>
                        </div>
                        <div class="company">
                            <span><i class="el-icon-location-outline"></i>成都达海仓库</span><span>|</span><span><i class="el-icon-location-outline"></i>成都积微物联集团股份有限公司</span>
                        </div>
                    </div>
                    <div class="item-top item-bottom">
                        <div class="demand">
                            <span class="big-number">40666</span> 元/吨
                        </div>
                        <div class="detail"><i class="el-icon-star-on" style="margin-right: 5px"></i>取消收藏</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="outer" v-if="select=='川货供应商'">
            <ul class="companyList">
                <li v-for="item in 6">
                    <div class="img">
                        <img src="../../../../../../assets/img/company.jpg" alt="">
                        <div class="cancel">
                            取消收藏
                        </div>
                    </div>
                    <div class="info">
                        <div class="companyName">攀钢集团钒钛资源股份有限公司</div>
                        <div class="location"><span><i class="el-icon-location-outline"></i>攀枝花市金沙江大道东段1491号</span></div>
                        <div class="location"><span><i class="el-icon-location-outline"></i>攀枝花钒钛产业园区</span></div>
                        <div class="tag">
                            <div>五氧化二钒</div>
                            <div>高钒铁</div>
                            <div>钒氮合金</div>
                            <div>钒铝合金</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="outer" v-if="select=='需求'">
            <ul class="demandList">
                <li v-for="(item, index) in 4" :key="index">
                    <div class="item-top">
                        <div class="demand">
                            <div class="want big-black">
                                <span>求购沫煤</span><span class="tags">现货/标准品</span> <span class="tags">协议采购(长期采购)</span>
                            </div>
                            <div class="number">
                                <span> 采购数量：2000吨</span><span><span class="big-number">40666</span> 元/吨</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-top item-bottom">
                        <div class="demand">
                            <div class="want big-black">
                                商品清单：4-2混沫煤、5号上层原沫煤
                            </div>
                            <div class="time">
                                发布时间：2021-05-27 16:00:00
                            </div>
                            <div class="time">
                                截止时间：2021-06-10 16:00:00
                            </div>
                        </div>
                        <div class="detail">
                            <i class="el-icon-star-on" style="margin-right: 0px"></i>
                            取消收藏
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="outer" v-if="select=='产业园区'">
            <ul class="companyList park">
                <li v-for="item in 6">
                    <div class="img">
                        <img src="../../../../../../assets/img/company.jpg" alt="">
                        <div class="cancel">
                            取消收藏
                        </div>
                    </div>
                    <div class="info">
                        <div class="companyName">攀枝花钒钛产业园区</div>
                        <div class="location"><span><i class="el-icon-location-outline"></i>攀枝花市金沙江大道东段1491号</span></div>
                        <div class="tag">
                            <div class="blueTag">土地资源</div>
                            <div class="blueTag">厂房租赁</div>
                            <div class="blueTag">仓库租售</div>
                            <div class="blueTag">写字楼</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "collect",
    data() {
        return {
            select: "川货商品",
        };
    },
};
</script>

<style lang="less" scoped>
.collect {
    .wh(100%, 100%);
    font-size: 16px;
    .button {
        .flex();
        > div {
            .detail(160px, 46px);
            margin-right: 20px;
            background-color: rgba(122, 139, 166, 0.1);
            border: none;
        }
        border-bottom: 1px solid #e1e6f0;
    }
    .select {
        background: linear-gradient(90deg, #5f87f8 0%, #3860f4 100%);
        color: #fff !important;
        border: none;
    }
    .outer {
        padding: 20px 0;
        height: 680px;
        overflow: auto;
    }
    .goodsList {
        .flexb();
        flex-wrap: wrap;
        li {
            height: 180px;
            .wh(48%, 180px);
            border-radius: 3px;
            background-color: #fff;
            margin-bottom: 30px;
            border: 1px solid #e1e6f0;
            &:hover {
                box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.15);
            }
            .item-up {
                height: 100px;
                padding: 0 40px;
                .flex(space-around);
                flex-direction: column;
                .demand {
                    .flexb();
                    margin-top: 10px;
                }
                .company {
                    i {
                        color: @blue;
                        margin-right: 5px;
                        font-weight: 600;
                    }
                    .flex();
                    align-items: center;
                    span {
                        margin-right: 10px;
                    }
                }
            }
            .item-top {
                height: 100px;
                padding: 0 40px;
                .bs();
                .flexb();
                align-items: center;
                .demand {
                    .want {
                        margin-bottom: 10px;
                    }
                    .company {
                        i {
                            color: @blue;
                            margin-right: 5px;
                            font-weight: 600;
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
                height: calc(100% - 100px);
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
    .companyList {
        .flexb();
        flex-wrap: wrap;
        li {
            .wh(30.5%, 392px);
            border: 1px solid #e1e6f0;
            border-radius: 3px;
            margin-bottom: 20px;
            padding: 20px;
            .bs();
            .flexb();
            align-items: flex-start;
            flex-direction: column;
        }
        .img {
            .wh(305px, 230px);
            position: relative;
            img {
                .wh(100%, 100%);
            }
            .cancel {
                .wh(100px, 30px);
                background: rgba(0, 0, 0, 0.25);
                position: absolute;
                top: 10%;
                right: -1px;
                text-align: center;
                line-height: 30px;
                box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.2);
                color: #fff;
                cursor: pointer;
                &:hover {
                    opacity: 0.5;
                }
            }
        }
        .info {
            flex: 1;
            .flexb();
            align-items: flex-start;
            flex-direction: column;
            .companyName {
                margin-top: 10px;
                font-size: 18px;
                color: @black;
                font-weight: 600;
            }
            .location {
                i {
                    color: @blue;
                    margin-right: 5px;
                }
                font-size: 14px;
            }
            .tag {
                .flex();
                div {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 0 5px;
                    height: 20px;
                    font-size: 12px;
                    line-height: 20px;
                    margin-right: 10px;
                    &:first-child {
                        background: rgba(37, 203, 242, 0.1);
                        color: rgba(37, 203, 242, 1);
                    }
                    &:nth-child(2) {
                        background: rgba(17, 201, 134, 0.1);
                        color: rgba(17, 201, 134, 1);
                    }
                    &:nth-child(3) {
                        background: rgba(161, 53, 244, 0.1);
                        color: rgba(161, 53, 244, 1);
                    }
                    &:nth-child(4) {
                        background: rgba(242, 200, 37, 0.1);
                        color: rgba(242, 200, 37, 1);
                    }
                }
                .blueTag {
                    opacity: 0.5;
                    border: 1px solid #3860f4;
                    background: #ffffff !important;
                    color: @blue !important;
                    border-radius: 3px;
                }
            }
        }
    }
    .park {
       li {
           height: 360px;
       } 
    }
    .demandList {
        .flexb();
        flex-wrap: wrap;
        li {
            height: 190px;
            .wh(48%, 190px);
            border-radius: 3px;
            background-color: #fff;
            margin-bottom: 30px;
            border: 1px solid #e1e6f0;
            &:hover {
                box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.15);
            }
            .item-top {
                height: 80px;
                padding: 0 40px;
                .bs();
                .flexb();
                .demand {
                    width: 100%;
                    .want {
                        .flex();
                        align-items: center;
                        margin-bottom: 10px;
                        span:first-child {
                            margin-right: 10px;
                        }
                        .tags {
                            font-weight: normal;
                            margin-right: 10px;
                            font-size: 12px;
                            display: inline-block;
                            padding: 2px 5px;
                            color: rgba(56, 96, 244, 1);
                            background: rgba(56, 96, 244, 0.1);
                            border-radius: 0px 3px 3px 3px;
                            opacity: 0.8;
                        }
                    }
                    .number {
                        .flexb();
                    }
                }
            }
            .item-bottom {
                height: calc(100% - 80px);
                background: @bc2;
                .want {
                    font-size: 16px;
                    color: @black;
                }
                .time {
                    font-size: 14px;
                }
            }
            .bs();
            .detail {
                .detail(150px, 40px);
            }
            .big-number {
                color: @yellow;
                font-size: 22px;
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
}
</style>
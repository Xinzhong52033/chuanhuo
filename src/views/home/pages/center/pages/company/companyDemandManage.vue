<template>
  <div class="companyDemandManage">
     <div class="button">
            <div @click="select='全部'" :class="select=='全部'?'select':''">全部</div>
            <div @click="select='已通过'" :class="select=='已过期'?'select':''">已通过</div>
            <div @click="select='待审核'" :class="select=='待审核'?'select':''">待审核</div>
            <div @click="select='未通过'" :class="select=='未通过'?'select':''">未通过</div>
            <div @click="select='已过期'" :class="select=='已过期'?'select':''">已过期</div>
        </div>
        <div class="outer">
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
                        <div class="img" v-if="true">
                           <img src="../../../../../../assets/img/unverified.png" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name: 'companyDemandManage',
    data() {
        return {
            select: '全部',
        }
    }
}
</script>

<style lang="less" scoped>
.companyDemandManage {
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
            .img {
                img {
                    .wh(64px, 64px);
                }
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
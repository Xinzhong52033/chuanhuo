<template>
    <div class="demand">
        <div class="padding-box">
            <div class="top">
                <leftMenu :menuList='menuList' class="left-menu"></leftMenu>
                <div class="right">
                    <selfFilter :list='list.items'></selfFilter>
                </div>
            </div>
            <order class="order" :orderType="orderType"></order>
            <ul class="goodsList">
                <li v-for="(item, index) in goodsList" :key="index">
                    <div class="item-top">
                        <div class="demand">
                            <div class="want big-black">
                                {{item.name}}
                            </div>
                            <div class="number">
                                采购数量：{{item.count}}吨
                            </div>
                        </div>
                        <div>
                            <span class="big-number">{{item.price}}</span> 元/吨
                        </div>
                    </div>
                    <div class="item-top item-bottom">
                        <div class="demand">
                            <div class="want big-black">
                                商品清单：{{item.list}}
                            </div>
                            <div class="time">
                                发布时间：{{item.fabutime}}
                            </div>
                            <div class="time">
                                截止时间：{{item.endtime}}
                            </div>
                        </div>
                        <div class="detail" @click="checkDetail">
                            查看详情
                        </div>
                    </div>
                </li>
            </ul>
            <pagenation class="pagenation" :total="list.total" :page-size="list.pagesize" :current-page="list.currentPage" @page-size-change="handlePageSizeChange" @page-change="handlePageChange"></pagenation>
        </div>
    </div>
</template>
<script>
import leftMenu from "../../components/leftMenu.vue";
import selfFilter from "../../components/selfFilter.vue";
import order from "../../components/order.vue";
import Order from "../../components/order.vue";
import pagenation from "@/components/pagenation.vue";
import Pagenation from '../../../../components/pagenation.vue';

export default {
    name: "demand",
    components: {
        leftMenu,
        selfFilter,
        Order,
        pagenation
    },
    data() {
        return {
            orderType: ['综合排序', '发布时间', '截止时间'],
            order: 1,
            menuList: [
                {name: "农副", value: '/personInfo'},
                {name: "能源", value: '/personInfo'},
                {name: "化工", value: '/personInfo'},
                {name: "金属", value: '/personInfo'},
                {name: "建材", value: '/personInfo'},
            ],
            goodsList: [
                {
                    name: "求购沫煤",
                    count: "200吨",
                    price: "40,066",
                    list: "4-2混沫煤、5号上层原沫煤",
                    fabutime: "2021-05-27  16:00:00",
                    endtime:"2021-06-10  16:00:00"
                },
                {
                    name: "求购石脑油",
                    count: "80吨",
                    price: "364,586",
                    list: "加氢石脑油",
                    fabutime: "2021-05-06  16:00:00",
                    endtime:"2021-08-10  16:00:00"
                },
                {
                    name: "求购沥青",
                    count: "50吨",
                    price: "268,882",
                    list: "重交沥青、70#",
                    fabutime: "2021-05-27  16:00:00",
                    endtime:"2021-06-10  16:00:00"
                },
                {
                    name: "求购燃料油",
                    count: "10吨",
                    price: "50,091",
                    list: "180CST",
                    fabutime: "2021-05-27  16:00:00",
                    endtime:"2021-06-10  16:00:00"
                },
                {
                    name: "求购沫煤",
                    count: "150吨",
                    price: "42,066",
                    list: "4-2混沫煤",
                    fabutime: "2021-06-22  16:00:00",
                    endtime:"2021-09-15  16:00:00"
                },
                {
                    name: "求购石脑油",
                    count: "75吨",
                    price: "364,302",
                    list: "加氢石脑油",
                    fabutime: "2021-05-16  16:00:00",
                    endtime:"2021-09-10  16:00:00"
                },
                {
                    name: "求购沥青",
                    count: "69吨",
                    price: "26,395",
                    list: "70#",
                    fabutime: "2021-08-01  16:00:00",
                    endtime:"2021-09-10  16:00:00"
                },
                {
                    name: "求购燃料油",
                    count: "23吨",
                    price: "60,091",
                    list: "180CST",
                    fabutime: "2021-07-27  16:00:00",
                    endtime:"2021-09-10  16:00:00"
                },
                
                
            ],
            currentPage: 1,
            pageSize: 10,
            select: {
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            },
            list: {
                total: 15,
                currentPage: 1,
                pageSize: 10,
                items: [
                    {
                        classification: "品类",
                        items: [
                            '全部',
                            '焦炭',
                            '石焦油',
                            '石脑油',
                            '原油',
                            '沥青',
                            '原煤',
                            '天然气',
                            '液化气',
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                    {
                        classification: "类型",
                        items: [
                            '全部',
                            '现货/标准品',
                            '加工/定制品'
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                    {
                        classification: "贸易类型",
                        items: [
                            '全部',
                            '内贸',
                            '外贸', 
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                    {
                        classification: "采购类型",
                        items: [
                            "全部",
                            "单次采购",
                            "协议采购（长期采购）",
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                     {
                        classification: "价格说明",
                        items: [
                            "全部",
                            "可议价",
                            "不可议价",
                            "面议",
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                ],
            },
        };
    },
    methods: {
        handlePageSizeChange(pageSize) {
            this.pagesize = pageSize;
            console.log(pageSize)
        },
        handlePageChange(page) {
            console.log(page)
        },
        checkDetail() {
            var newPage = this.$router.resolve({path: '/detail', params: {id: 12313131231}})
            window.open(newPage.href,'_blank')
        }
    },
};
</script>

<style lang="less" scoped>
.demand {
    font-size: 16px;
    background-color: @bc2;
    overflow: hidden;
    .top {
        margin: 30px 0;
        .wh(100%, 320px);
        .flex();
        .left-menu {
            .wh(150px, 100%);
        }
        .right {
            flex: 1;
            height: 100%;
            border: 1px solid #e1e6f0;
            border-left: none;
            .bs();
            padding: 0 30px;
            overflow: auto;
            background-color: #fff;
        }
    }
    .order {
        margin-bottom: 30px;
    }
    .goodsList {
        .flexb();
        flex-wrap: wrap;
        li {
            height: 228px;
            .wh(48%, 228px);
            border-radius: 3px;
            background-color: #fff;
            margin-bottom: 30px;
            border: 1px solid #E1E6F0;
            &:hover {
                box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.15);
            }
            .item-top {
                height: 100px;
                padding: 0 40px;
                .bs();
                .flexb();
                .demand {
                    background-color: transparent;
                    .want {
                        margin-bottom: 10px;
                    }
                }
            }
            .item-bottom {
                height: calc(100% - 100px);
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
            // .flexb();
            .name {
                flex: 1;
            }
            .price {
                flex: 1;
            }
            .where {
                flex: 1.5;
            }
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
       margin-bottom: 60px;
    }
}
</style>
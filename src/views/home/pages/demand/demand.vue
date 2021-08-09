<template>
    <div class="demand">
        <div class="padding-box">
            <div class="top">
                <leftMenu ref="leftMenu" :menuList='menuList' @selectItem='selectItem' class="left-menu"></leftMenu>
                <div class="right">
                    <selfFilter :list='type' @selectlevelTwo="selectlevelTwo" ref="selfFilter"></selfFilter>
                </div>
            </div>
            <order class="order" :select="select" :orderType="orderType" @selectOrder='()=>getGoodSList(1)'></order>
            <ul class="goodsList">
                <li v-for="(item, index) in list.items" :key="index">
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
        order,
        pagenation
    },
    data() {
        return {
            orderType: ["综合排序", "库存", "价格"],
            order: 1,
            menuList: [
                { name: "农副", categoryId: "1" },
                { name: "能源", categoryId: "2" },
                { name: "化工", categoryId: "3" },
                { name: "金属", categoryId: "4" },
                { name: "建材", categoryId: "5" },
            ],
            goodsList: [
            ],
            currentPage: 1,
            pageSize: 10,
            type: [
                {
                    classification: "品类",
                    items: [
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "发货地",
                    items: [
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "品牌",
                    items: [],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "供应商",
                    items: [
                        
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
            ],
            select: {
                pageNum: '',
                pageSize: '',
                productType: "农副",
                productTypeLevelTow: '',
                deliveryPlace:'',
                brand:'',
                supplier: '',
                sort: "1",
            },
            list: {
                total: 15,
                currentPage: 1,
                pageSize: 10,
                items: {},
            },
        };
    },
    mounted() {
        this.selectItem({ name: '农副', categoryId: 1 });
        this.getGoodSList();
    },
    computed: {
        productTypeLevelTowValue() {
            return this.type[0].select == "全部" ? "" : this.type[0].select;
        },
        deliveryPlaceValue() {
            return this.type[2].select == "全部" ? "" : this.type[2].select;
        },
        brandValvue() {
            return this.type[1].select == "全部" ? "" : this.type[1].select;
        },
        supplierValue() {
            return this.type[3].select == "全部" ? "" : this.type[3].select;
        }
    },
    methods: {
        checkDetail() {
            var newPage = this.$router.resolve({path: '/detail', params: {id: 12313131231}})
            window.open(newPage.href,'_blank')
        },
        handlePageSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.getGoodSList()
        },
        handlePageChange(page) {
           this.currentPage = page
           this.getGoodSList()
        },
        checkDetail() {
            var newPage = this.$router.resolve({
                path: "/goodDetail",
                params: { id: 12313131231 },
            });
            window.open(newPage.href, "_blank");
        },
        selectItem(param) {
            this.select.productType = param.name;
            this.getType(param.categoryId);
            this.getGoodSList(1)
        },
        async getType(categoryId) {
            let { data } = await this.$api.getDemandType({
                categoryId: categoryId,
            });
            this.type = [];
            Object.keys(data).forEach((item) => {
                data[item].unshift("全部");
                this.type.push({
                    classification: item,
                    items: data[item],
                    stateChange: false,
                    state: true,
                    select: "全部",
                });
            });
            this.$refs.selfFilter.checkHight();
        },
        async getGoodSList(pageNum) {
            let obj = {
                pageNum: this.currentPage,
                pageSize: this.pageSize,
                productType: this.select.productType,
                productTypeLevelTow: this.productTypeLevelTowValue,
                deliveryPlace: this.deliveryPlaceValue,
                brand:this.brandValvue,
                supplier: this.supplierValue,
                sort: this.select.sort,
            }
            let {data} = await this.$api.getGoodSList(obj)
            this.list.total = data.total,
            this.list.currentPage = data.pageNum,
            this.list.pageSize = data.pageSize,
            this.list.items = data.list
        },
        selectlevelTwo() {
            this.getGoodSList(1)
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
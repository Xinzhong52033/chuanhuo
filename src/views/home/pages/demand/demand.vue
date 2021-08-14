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
                                <span class="title-width ellipsis ">{{item.demandTitle}}</span><span class="tags">{{item.commodityStatus}}</span> <span class="tags">{{item.purchaseType}}</span>
                            </div>
                            <!-- <div class="number">
                                采购数量：{{item.count}}吨
                            </div> -->
                        </div>
                        <div></div>
                        <div>
                            <span class="big-number">{{item.total}}</span> 元
                        </div>
                    </div>
                    <div class="item-top item-bottom">
                        <div class="demand">
                            <div class="want big-black ellipsis">
                                商品清单：{{item.wantList}}
                            </div>
                            <div class="time">
                                发布时间：{{item.createTime}}
                            </div>
                            <div class="time">
                                截止时间：{{item.endTime}}
                            </div>
                        </div>
                        <div class="detail" @click="checkDetail(item.demandId)">
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
            orderType: ["综合排序", "发布时间", "截止时间"],
            order: 1,
            menuList: [
                { name: "农副", categoryId: "1" },
                { name: "能源", categoryId: "2" },
                { name: "金属", categoryId: "3" },
                { name: "化工", categoryId: "4" },
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
                    classification: "类型",
                    items: [
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "贸易类型",
                    items: [],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "采购类型",
                    items: [
                        
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "价格说明",
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
                type: '',
                tradingType: '',
                purchaseType: '',
                priceInstruction: '',
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
        typeValue() {
            return this.type[1].select == "全部" ? "" : this.type[1].select;
        },
        tradingType() {
            return this.type[2].select == "全部" ? "" : this.type[2].select;
        },
        purchaseTypeValvue() {
            return this.type[3].select == "全部" ? "" : this.type[3].select;
        },
        priceInstructionValue() {
            return this.type[4].select == "全部" ? "" : this.type[4].select;
        }
    },
    methods: {
        handlePageSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.getGoodSList()
        },
        handlePageChange(page) {
           this.currentPage = page
           this.getGoodSList()
        },
        checkDetail(id) {
            var newPage = this.$router.resolve({path: '/detail', query: {demandId: id}})
            window.open(newPage.href,'_blank')
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
                type: this.typeValue,
                tradingType: this.tradingTypeValue,
                purchaseType: this.purchaseTypeValvue,
                priceInstruction: this.priceInstructionValue,
                sort: this.select.sort,
            }
            let {data} = await this.$api.getDemandList(obj)
            this.list.total = data.total,
            this.list.currentPage = data.pageNum,
            this.list.pageSize = data.pageSize,
            this.list.items = data.list
            // 商品清单和总额
            var wantList = ''  
            var total = 0
            this.list.items.forEach(item => {
                total = 0
                wantList = ''
                item.list.forEach(v=> {
                    total += v.budget * v.count
                    wantList += v.commodityName + v.count + v.unit + " " 
                }) 
                item.total = total
                item.wantList = wantList
            })
            // console.log(this.list.items)
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
                        // margin-bottom: 10px;
                        .title-width {
                            max-width: 210px;
                            margin-right: 5px
                        }
                        .flex();
                        align-items: center;
                        .tags {
                            font-weight: normal;
                            margin-left: 5px;
                            margin-right: 5px;
                            font-size: 12px;
                            display: inline-block;
                            padding: 2px 5px;
                            color: rgba(56, 96, 244, 1);
                            background: rgba(56, 96, 244, 0.1);
                            border-radius: 0px 3px 3px 3px;
                            opacity: 0.8;
                        }
                    }
                }
            }
            .item-bottom {
                height: calc(100% - 100px);
                background: @bc2;
                .want {
                    width: 450px;
                    font-size: 16px;
                    color: @black;
                    margin-bottom: 10px;
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
       margin-bottom: 30px;
    }
}
</style>
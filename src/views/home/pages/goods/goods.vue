<template>
    <div class="goods">
        <div class="padding-box">
            <div class="top">
                <leftMenu ref="leftMenu" :menuList='menuList' @selectItem='selectItem' class="left-menu"></leftMenu>
                <div class="right">
                    <selfFilter :list='type' @selectlevelTwo="selectlevelTwo" ref="selfFilter"></selfFilter>
                </div>
            </div>
            <order class="order" :select='select' @selectOrder='()=>getGoodSList(1)' :orderType="orderType"></order>
            <ul class="goodsList">
                <li v-for="(item, index) in list.items" :key="index">
                    <div class="name">
                        <div class="mb-14 big-black">{{item.commodityName}}</div>
                        <div>库存：{{item.commodityStock}}</div>
                    </div>
                    <div class="price">
                        <span class="big-number">{{item.commodityPrice}}</span> 元/吨
                    </div>
                    <div class="where">
                        <div class="mb-14">发货/自提仓库：{{item.warehouseName}}</div>
                        <div>供应商：{{item.supplierName}}</div>
                    </div>
                    <div class="detail" @click="checkDetail(item)">查看详情</div>
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
import Pagenation from "../../../../components/pagenation.vue";

export default {
    name: "goods",
    components: {
        leftMenu,
        selfFilter,
        Order,
        pagenation,
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
            // productType: this.$route.param.productType,
            // productTypeLevelTow: this.$route.param.productTypeLevelTow,
        };
    },
    created() {
        console.log(2222, this.$route.query)
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
        handlePageSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.getGoodSList()
        },
        handlePageChange(page) {
           this.currentPage = page
           this.getGoodSList()
        },
        checkDetail(item) {
            console.log(item)
            var newPage = this.$router.resolve({
                path: "/goodDetail",
                query: { commodityId: item.commodityId },
            });
            window.open(newPage.href, "_blank");
        },
        selectItem(param) {
            this.select.productType = param.name;
            this.getType(param.categoryId);
            this.getGoodSList(1)
        },
        async getType(categoryId) {
            let { data } = await this.$api.getGoodType({
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
.goods {
    font-size: 16px;
    background-color: @bc2;
    padding-bottom: 0px;
    // overflow: hidden;
    .top {
        padding: 30px 0;
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
        li {
            height: 112px;
            .wh(100%, 112px);
            border-radius: 3px;
            background-color: #fff;
            margin-bottom: 30px;
            &:hover {
                box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.15);
            }
            padding: 30px 40px;
            .bs();
            .flexb();
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
        padding-bottom: 60px;
    }
}
</style>
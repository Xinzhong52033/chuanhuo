<template>
    <div class="goods">
        <div class="padding-box">
            <div class="top">
                <leftMenu :menuList='menuList' @selectItem='selectItem' class="left-menu"></leftMenu>
                <div class="right">
                    <selfFilter :list='type'></selfFilter>
                </div>
            </div>
            <order class="order" :orderType="orderType"></order>
            <ul class="goodsList">
                <li v-for="(item, index) in goodsList" :key="index">
                    <div class="name">
                        <div class="mb-14 big-black">{{item.name}}</div>
                        <div>库存：{{item.kucun}}</div>
                    </div>
                    <div class="price">
                        <span class="big-number">{{item.price}}</span> 元/吨
                    </div>
                    <div class="where">
                        <div class="mb-14">{{item.fahuo}}</div>
                        <div>{{item.gongyingshang}}</div>
                    </div>
                    <div class="detail" @click="checkDetail">查看详情</div>
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
            orderType: ["综合排序", "销量", "价格"],
            order: 1,
            menuList: [
                { name: "能源", categoryId: "2" },
                { name: "农副", categoryId: "1" },
                { name: "化工", categoryId: "3" },
                { name: "金属", categoryId: "4" },
                { name: "建材", categoryId: "5" },
            ],
            goodsList: [
                {
                    name: "二级建造焦炭",
                    kucun: "2.343吨",
                    price: "1780",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "西昌盘江煤焦油",
                    kucun: "8.248吨",
                    price: "4560",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "石脑油",
                    kucun: "5.369吨",
                    price: "2530",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "甲醇",
                    kucun: "3.343吨",
                    price: "1800",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "Brent原油",
                    kucun: "2.36吨",
                    price: "2333",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "西昌盘江煤焦油",
                    kucun: "2.568吨",
                    price: "2693",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "煤焦油",
                    kucun: "1.343吨",
                    price: "3600",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "西昌盘江煤焦油",
                    kucun: "7.205吨",
                    price: "2780",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "煤焦油",
                    kucun: "3.233吨",
                    price: "3636",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
                {
                    name: "甲醇",
                    kucun: "3.33吨",
                    price: "1500",
                    fahuo: "发货/自提仓库：攀盘江",
                    gongyingshang: "供应商：攀枝花盘江煤焦化有限公司",
                },
            ],
            currentPage: 1,
            pageSize: 10,
            select: {
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            },
            type: [
                {
                    classification: "品类",
                    items: [
                        "全部",
                        "焦炭",
                        "石焦油",
                        "石脑油",
                        "原油",
                        "沥青",
                        "原煤",
                        "天然气",
                        "液化气",
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "发货地",
                    items: [
                        "全部",
                        "成都",
                        "绵阳",
                        "乐山",
                        "德阳",
                        "宜宾",
                        "泸州",
                        "眉山",
                        "广安",
                        "达州",
                        "广元",
                        "雅安",
                        "巴中",
                        "内江",
                        "攀枝花",
                        "自贡",
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "品牌",
                    items: ["全部", "西昌盘江", "攀钢钒", "西昌钢钒"],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
                {
                    classification: "供应商",
                    items: [
                        "全部",
                        "西昌盘江煤焦化有限公司",
                        "攀枝花盘江煤焦化有限公司",
                    ],
                    stateChange: false,
                    state: true,
                    select: "全部",
                },
            ],
            list: {
                total: 15,
                currentPage: 1,
                pageSize: 10,
                items: [
                    {
                        classification: "品类",
                        items: [
                            "全部",
                            "焦炭",
                            "石焦油",
                            "石脑油",
                            "原油",
                            "沥青",
                            "原煤",
                            "天然气",
                            "液化气",
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                    {
                        classification: "发货地",
                        items: [
                            "全部",
                            "成都",
                            "绵阳",
                            "乐山",
                            "德阳",
                            "宜宾",
                            "泸州",
                            "眉山",
                            "广安",
                            "达州",
                            "广元",
                            "雅安",
                            "巴中",
                            "内江",
                            "攀枝花",
                            "自贡",
                        ],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                    {
                        classification: "品牌",
                        items: ["全部", "西昌盘江", "攀钢钒", "西昌钢钒"],
                        stateChange: false,
                        state: true,
                        select: "全部",
                    },
                    {
                        classification: "供应商",
                        items: [
                            "全部",
                            "西昌盘江煤焦化有限公司",
                            "攀枝花盘江煤焦化有限公司",
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
            console.log(pageSize);
        },
        handlePageChange(page) {
            console.log(page);
        },
        checkDetail() {
            var newPage = this.$router.resolve({
                path: "/goodDetail",
                params: { id: 12313131231 },
            });
            window.open(newPage.href, "_blank");
        },
        selectItem(param) {
            console.log(11111, param);
            this.getType(param.categoryId)
            
        },
        async getType(categoryId) {
            let {data} = await this.$api.getGoodType({
            categoryId: categoryId
            })
            this.type = []
            Object.keys(data).forEach((item) => {
                this.type.push({
                    classification: item,
                    items: data[item],
                    stateChange: false,
                    state: true,
                    select: "全部",
                });
            });
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
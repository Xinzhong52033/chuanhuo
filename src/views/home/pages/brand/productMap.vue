<template>
    <div class="productMap">
        <div id="container">
            <Echarts :options='mapState' :mapData='scLine' mapName='sc' @chartClick='chartClick' @chartOver='chartOver' @chartOut='chartOut' />
            <div class="wrap"></div>
        </div>
        <div class="left box">
            <div class="search">
                <el-input placeholder="请输入关键词" style="width: 100%; margin-bottom: 15px" size="medium" v-model="input">
                    <template slot="append"><i class="iconfont icon-sousuo"></i></template>
                </el-input>
                <el-select v-model="select" v-if="false" style="width: 100%; margin-bottom: 15px" size="medium" placeholder="请选择">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="商品" value="2"></el-option>
                    <el-option label="供应商" value="3"></el-option>
                    <el-option label="园区" value="4"></el-option>
                </el-select>
                <el-select v-model="select" style="width: 100%; margin-bottom: 50px" size="medium" placeholder="按品类进行筛选">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="商品" value="2"></el-option>
                    <el-option label="供应商" value="3"></el-option>
                    <el-option label="园区" value="4"></el-option>
                </el-select>
            </div>
            <div class="hot">
                <div class="title">
                    <span class="ball"></span>
                    <span>能源产品</span>
                </div>
                <div class="hot-brand">
                    <ul>
                        <li class="li-selected">沥青</li>
                        <li>石脑油</li>
                        <li>天然气</li>
                        <li>石焦油</li>
                        <li>汽油</li>
                        <li>焦炭</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right box">
            <div class="title">
                <span class="ball"></span>
                <span>沥青供应商</span>
            </div>
            <div class="table">
                <DataTable style="width: 100%" :height="665*$widthCoefficient" size='medium' :columns="tableColumns" :border='false' :showBottomBar='false' :data="tableData" :highlightCurrentRow="true">
                    <template slot="number" slot-scope="{row}">
                        <span class="link"> {{row.number}}</span>
                    </template>
                    <template slot="pre" slot-scope="{row}">
                        <span class="link"> {{row.pre}}</span>
                    </template>
                </DataTable>
            </div>
        </div>
        <div class='select'>
            <div>
                <el-checkbox v-model="checked"></el-checkbox><span class="ball light-blue"></span><span>能源</span>
            </div>
            <div>
                <el-checkbox></el-checkbox><span class="ball green"></span><span>化工</span>
            </div>
            <div>
                <el-checkbox></el-checkbox><span class="ball purple"></span><span>金属</span>
            </div>
            <div>
                <el-checkbox></el-checkbox><span class="ball yellow"></span><span>建材</span>
            </div>
            <div>
                <el-checkbox></el-checkbox><span class="ball blue"></span><span>农副</span>
            </div>
        </div>
    </div>
</template>

<script>
import Echarts from "@/components/echarts.vue";
import scLine from "@/assets/json/sc_line.json";
import { mapStatefun } from "./map/productOption.js";
import DataTable from "@/components/DataTable.vue";
import axios from "axios";
let $widthCoefficient =  document.documentElement.clientWidth / 1920;
const tableColumns = [
    {
        title: "城市",
        align: "center",
        name: "index",
        width: 80*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "供应商名称",
        align: "center",
        name: "name",
        showOverflow: true,
    },
    {
        title: "库存(吨)",
        align: "center",
        name: "__slot:number",
        width: 80*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "价格(元)",
        align: "center",
        name: "__slot:pre",
        width: 100*$widthCoefficient+'px',
        showOverflow: true,
    },
];
export default {
    name: "productMap",
    components: {
        Echarts,
        DataTable,
    },
    data() {
        return {
            tableData: [
                {
                    index: "达州",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000",
                },
                {
                    index: "成都",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "50.26",
                },
                {
                    index: "攀枝花",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000.25",
                },
                {
                    index: "达州",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000",
                },
                {
                    index: "成都",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "50.26",
                },
                {
                    index: "攀枝花",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000.25",
                },
                {
                    index: "达州",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000",
                },
                {
                    index: "成都",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "50.26",
                },
                {
                    index: "攀枝花",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000.25",
                },
                {
                    index: "达州",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000",
                },
                {
                    index: "成都",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "50.26",
                },
                {
                    index: "攀枝花",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000.25",
                },
                {
                    index: "达州",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000",
                },
                {
                    index: "成都",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "50.26",
                },
                {
                    index: "攀枝花",
                    name: "洪达沥青砼有限公司",
                    number: "20",
                    pre: "5000.25",
                },
            ],
            tableColumns,
            detail: false,
            center: [116.397428, 39.90923],
            input: "",
            select: "",
            mapState: mapStatefun(),
            scLine,
            data: {},
            checked: true,
        };
    },
    created() {
        this.initMap();
    },
    mounted() {},
    methods: {
        async initMap() {
            let { data } = await axios.get(
                "http://loading.spsict.com/china_maps/510100.json"
            );
            console.log(1111, mapStatefun(data));
        },
        chartOver(param) {
            console.log("地图移动到", param);
            this.detail = true;
        },
        chartOut(param) {
            console.log("移出");
            this.detail = false;
        },
        chartClick(param) {
            alert(param.data.adcode);
        },
    },
};
</script>

<style lang="less" scoped>
.productMap {
    .wh(100%, 858px);
    position: relative;
    #container {
        position: absolute;
        .wh(100%, 100%);
        z-index: 22;
        background: url("../../../../assets/img/mapbg.png");
        background-size: 100% 100%;
        .wrap {
            position: absolute;
            .wh(100%, 100%);
            background: #f8fbff;
            background: rgba(248, 251, 255, 0.5);
            top: 0;
            left: 0;
            z-index: -1;
        }
    }
    // .flexb();
    .box {
        position: absolute;
        top: 50px;
        .wh(330px, 758px);
        padding: 30px;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
        overflow: auto;
        background-color: #fff;
    }
    .title {
        height: 20px;
        line-height: 20px;
        .flex();
        align-items: center;
        .ball {
            display: inline-block;
            .wh(18px, 18px);
            background-image: linear-gradient(to left, #ffffff, #3860f4);
            border-radius: 50%;
            margin-right: 10px;
        }
        span {
            font-size: 20px;
            color: @blue;
            font-weight: 500;
        }
        margin-bottom: 20px;
    }
    .left {
        position: absolute;
        left: 50px;
        // margin-left: 50px;
        z-index: 1000;
        /deep/.search {
            .el-input-group__append {
                background-color: @black;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        .hot {
            .hot-brand {
                height: calc(100% - 176px);
                overflow: auto;
                ul {
                    .flexb();
                    flex-wrap: wrap;
                    li {
                        width: 46%;
                        height: 46px;
                        box-sizing: border-box;
                        border: 1px solid @blue;
                        color: @blue;
                        cursor: pointer;
                        background: rgba(56, 96, 244, 0.1);
                        &:hover {
                            background-image: linear-gradient(
                                to right,
                                #5f87f8,
                                #3860f4
                            );
                            color: #fff;
                            box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.3);
                        }
                        margin-bottom: 15px;
                        line-height: 46px;
                        text-align: center;
                        font-size: 16px;
                    }
                    .li-selected {
                        background-image: linear-gradient(
                            to right,
                            #5f87f8,
                            #3860f4
                        );
                        color: #fff;
                        box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.3);
                    }
                }
            }
        }
    }
    .right {
        width: 420px;
        z-index: 10000;
        right: 50px;
        color: @fc1;
        /deep/.table {
            width: 100%;
            height: calc(100% - 40px);
            .link {
                color: @yellow;
                font-weight: 600;
            }
            .el-table__header {
              height: 20px !important;
            }
        }
    }
    .select {
        position: absolute;
        .wh(160px, 165px);
        background-color: #fff;
        box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.25);
        right: 25%;
        z-index: 1000;
        bottom: 10%;
        padding: 20px 25px;
        .bs();
        .flex(space-around);
        flex-direction: column;
        > div {
            .flex();
            align-items: center;
            font-size: 16px;
            color: @black;
            .ball {
                width: 14px;
                height: 14px;
                opacity: 1;
                border-radius: 10px;
                margin: 0 15px 0 20px;
            }
            .light-blue {
                background: #25cbf2;
            }
            .green {
                background: #11c986;
            }
            .purple {
                background: #a135f4;
            }
            .yellow {
                background: @yellow;
            }
            .blue {
                background: @blue;
            }
        }
    }
}
</style>
<style lang="less">
.tooltip {
    // width: 280px;
    border: 1px solid #11C986;
    border-left: 4px solid #11C986;
     padding: 20px;
    background: #fff;
    .bs();
    &-title {
        font-size: 18px;
        font-weight: 600;
        line-height: 31px;
        color: @black;
        margin-bottom: 10px;
    }
    > .info {
        // .wh(100%, 100%);
        font-size: 14px;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        .flex();
        align-items: flex-start;
        .name {
            flex: 1;
            width: 130px;
            color: @fc;
        }
        .value {
            flex: 2;
            color: @black;

            // width: 210px;
        }
    }
}
</style>
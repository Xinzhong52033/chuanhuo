<template>
    <div class="searchTabs">
        <div class="up">
            <div class="logo" @click="goHome">
                <img src="../../../assets/img/logo.png" alt="">
                <span>川货供需展示和对接系统 </span>
            </div>
            <div class="searchBar">
                <el-input placeholder="输入关键词搜索" style="width: 78%" size="small" v-model="input" class="input-with-select">
                    <el-select v-model="select" slot="prepend" :style="{width: `${90*$widthCoefficient}px`}" placeholder="请选择">
                        <el-option label="全部" value="1"></el-option>
                        <el-option label="商品" value="2"></el-option>
                        <el-option label="供应商" value="3"></el-option>
                        <el-option label="园区" value="4"></el-option>
                    </el-select>
                    <el-button slot="append" class="iconfont icon-sousuo search"></el-button>
                </el-input>
                <el-button size="small" class="need" @click="sendDemand">发需求</el-button>
            </div>
        </div>
        <div class="down">
            <el-select ref="elSelect" :automaticDropdown="true" v-model="value" placeholder="" class="select" style="100%" propper-class='selectDown' :popper-append-to-body='false'>
                <template slot="prefix">
                    <div class="prefix">
                        <img src="../../../assets/img/type.png" alt="">
                        <span>川货品类</span>
                    </div>
                </template>
                <el-option v-for="item in selectGroup" :key="item.categoryId" :label="item.categoryId" :value="item.categoryId">
                    <div class="item" @click.stop="">
                        <div class="title">
                            <img :src="imgs[item.categoryName]" alt=""><span>{{item.categoryName}}</span>
                        </div>
                        <div class="content">
                            <span v-for="innerItem in item.list" @click="toGood(innerItem)" :key="innerItem.categoryId">
                                {{innerItem.categoryName}}
                            </span>
                        </div>
                    </div>
                </el-option>
            </el-select>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
                <el-tab-pane label="首页" name="home"></el-tab-pane>
                <el-tab-pane label="品牌馆" name="brand"></el-tab-pane>
                <el-tab-pane label="川货汇" name="goods"></el-tab-pane>
                <el-tab-pane label="求购场" name="demand"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations} from "vuex";
export default {
    name: "searchTabs",
    data() {
        return {
            select: "1",
            input: "",
            options: [
            ],
            value: "",
            value1: "",
            selectGroup: {},
            imgs: {
                农副产品: require("../../../assets/img/farm.png"),
                能源产品: require("../../../assets/img/energe.png"),
                金属: require("../../../assets/img/metal.png"),
                化工产品: require("../../../assets/img/chemistry.png"),
                建材产品: require("../../../assets/img/build.png"),
            },
            activeName: this.$store.state.activeName || 'home',
            typeMap:{
                1: '农副',
                2: '能源',
                3: '金属',
                4: '化工',
                5: '建材',
            }
        };
    },
    created() {
        this.selectGroupCategory();
        this.activeName = this.banerSelect
    },
    mounted() {
        if(this.$route.path=='/home') {
             this.$refs.elSelect.focus()
        }
    },
    computed: {
        ...mapState({
             banerSelect: (state) => state.banerSelect,
        })
    },
    watch: {
        banerSelect(val) {
            this.activeName = val
        }
    },
    methods: {
        ...mapMutations(['set_banerSelect']),
        
        async selectGroupCategory() {
            let { data } = await this.$api.selectGroupCategory();
            this.selectGroup = data;
            this.selectGroup.forEach(item => {
                item.list.splice(4, item.list.length+1)
            });
        },
        toGood(item) {
            this.$router.push({path: '/goods', query: {methods: 'jump',productType: this.typeMap[item.parentId],categoryId:item.parentId, productTypeLevelTow: item.categoryName}})
            this.closeSelect()
            this.set_banerSelect('goods')
        },
        handleClick(tab, event) {
           this.$router.push({path:tab.name})
           if (tab.name == 'home' && this.$route.path=='/home') {
               this.$refs.elSelect.focus()
           }
           this.set_banerSelect(tab.name)
        },
        sendDemand() {
            var newPage = this.$router.resolve({path: '/sendDemand', params: {id: 12313131231}})
            window.open(newPage.href,'_blank')
        },
        goHome() {
            this.$router.push({path:'/home'})
        },
        closeSelect() {
            this.$refs.elSelect.blur()
        },
        
    },
};
</script>

<style lang="less" scoped>
.searchTabs {
    .up {
        .wh(100%, 136px);
        .flexb();
        .logo {
            cursor: pointer;
            &:hover {
                opacity: 0.8
            }
            .flex();
            img {
                .wh(46px, 49px);
                margin-right: 15px;
            }
            font-size: 36px;
            font-weight: 800;
            color: #374567;
        }
        .searchBar {
            .wh(400px, 32px);
            .flexb();
            align-items: center;
            .search {
                background: @black;
                &:hover {
                    opacity: 0.8;
                }
            }
            .need {
                background-color: @yellow;
                color: #fff;
            }
            .input-with-select {
                overflow: hidden;
            }
        }
    }
    .down {
        .wh(100%, 50px);
        .flex();
        .select {
            .wh(300px, 50px);
            margin-right: 50px;
            /deep/.el-input__inner {
                width: 100%;
                height: 50px;
                line-height: 50px;
                border-radius: 3px 3px 0px 0px;
                background: linear-gradient(90deg, #5f87f8 0%, #3860f4 100%);
                border: 1px solid #fff;
                border-bottom: none;
                box-sizing: border-box;
            }
            .prefix {
                color: #fff;
                display: inline-block;
                .wh(100%, 100%);
                font-size: 18px;
                .flex();
                align-items: center;
                padding: 0;
                box-sizing: border-box;
                padding-left: 20px;
                img {
                    .wh(17.2px, 17.2px);
                    margin-right: 13px;
                }
            }
            /deep/.el-icon-arrow-up {
                color: #fff;
                font-size: 18px;
                position: relative;
                left: -10px;
            }
            /deep/ .el-popper[x-placement^="bottom"] .popper__arrow {
                display: none;
            }
            /deep/ .el-popper {
                top: 39px !important;
                height: 515px;
                box-sizing: border-box;
                border-radius: 0px 0px 3px 3px !important;
                .el-scrollbar,
                .el-select-dropdown__wrap {
                    min-height: 515px;
                    overflow: hidden;
                }
                .el-select-dropdown__list {
                    .el-select-dropdown__item {
                        cursor: default;
                        height: 100px;
                        padding-right: 28px;
                        box-sizing: border-box;
                        &:not(:last-child) {
                            .item {
                                box-sizing: border-box;
                                border-bottom: 1px dashed grey;
                            }
                        }
                        &.selected {
                            color: @fc1;
                            font-weight: normal;
                        }
                        .item {
                            height: 100%;
                            .flex(space-around);
                            flex-direction: column;
                            .title {
                                height: 20px;
                                line-height: 20px;
                                font-size: 16px;
                                .flex();
                                align-items: center;
                                img {
                                    .wh(20px, 20px);
                                    margin-right: 11px;
                                }
                                color: @black;
                                margin-top: 15px;
                            }
                            .content {
                                .flex();
                                flex-wrap: wrap;
                                span {
                                    margin-right: 20px;
                                    &:hover {
                                        color: @yellow;
                                        font-weight: 600;
                                    }
                                    height: 20px;
                                    line-height: 20px;
                                }
                                margin-bottom: 10px;
                                color: @fc1;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
        .tabs {
            margin-top: 10px;
            /deep/ .el-tabs__header {
                background-color: transparent;
                box-sizing: border-box;
                font-size: 18px;
            }
            /deep/.el-tabs__nav-wrap::after {
                background-color: transparent;
            }
            /deep/ .el-table .blue {
                background-color: transparent;
            }
            /deep/ .el-tabs__item {
                font-size: 18px;
                color: @black;
                padding: 0 40px
            }
            /deep/ .is-active {
                color: @yellow;
            }
            /deep/ .el-tabs__active-bar {
                height: 3px;
                background-color: @yellow;
            }
            /dee/ .el-tabs__nav-wrap, .el-tabs__nav, .el-tabs__nav-scroll {
                height: 100%;
            }
        }
    }
}

</style>>

<template>
    <div class="center">
        <header>
            <div class="top">
                <div class="padding-box">
                    <transparentHeader></transparentHeader>
                </div>
            </div>
            <div class="content padding-box">
                <div class="logo">
                    <img src="../../../../assets/img/logo.png" alt="">
                    <span>川货供需展示和对接系统 </span>
                </div>
                <div class="searchBar">
                    <el-input placeholder="输入关键词搜索" style="width: 100%" size="small" v-model="input" class="input-with-select">
                        <el-select v-model="select" slot="prepend" :style="{width: `${90*$widthCoefficient}px`}" placeholder="请选择">
                            <el-option label="全部" value="1"></el-option>
                            <el-option label="商品" value="2"></el-option>
                            <el-option label="供应商" value="3"></el-option>
                            <el-option label="园区" value="4"></el-option>
                        </el-select>
                        <el-button slot="append" class="iconfont icon-sousuo search"></el-button>
                    </el-input>
                </div>
            </div>
        </header>
        <router-view class="router-container" />
        <el-footer class="main-footer">
            <homeFooter></homeFooter>
        </el-footer>
    </div>
</template>

<script>
import homeHeader from "../../../layout/header.vue";
import transparentHeader from "../../../layout/transparentHeader.vue";
import homeFooter from '@/views/layout/footer.vue'

export default {
    components: {
        transparentHeader,
        homeFooter
    },
    name: "center",
    data() {
        return {
            select: '',
            input: '',
        };
    },
    mounted() {},
    watch: {},
    methods: {},
};
</script>

<style lang="less" scoped>
.center {
    width: 100%;
    header {
        .wh(100%, 176px);
        background: url("../../../../assets/img/headerLow.jpg") no-repeat;
        background-size: 100% 100%;
        box-shadow: 0px 3px 5px grey;
        .top {
            height: 40px;
            background-color: rgba(0, 0, 0, 0.15);
        }
        .content {
            height: 136px;
            .flexb();
            align-items: center;
            color: #fff;
            .logo {
                .flex();
                img {
                    .wh(46px, 49px);
                    margin-right: 15px;
                }
                font-size: 36px;
                font-weight: 800;
                color: #fff;
            }
            .searchBar {
                .wh(312px, 32px);
                .flexb();
                align-items: center;
                .search {
                    background: @yellow;
                    &:hover {
                        opacity: 0.8;
                    }
                    .icon-sousuo:before {
                        color: #fff;
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
    }
}
</style>
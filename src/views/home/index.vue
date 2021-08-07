<template>
    <div class="index">
        <el-header class="main-header">
            <div class="padding-box">
                <homeHeader></homeHeader>
            </div>
        </el-header>
        <div class="searchTabsShadow">
            <div class='padding-box'>
                <searchTabs ref="searchTabs"></searchTabs>
            </div>
        </div>
        <router-view @productMap="productMap" class="router-container" />
        <el-footer class="main-footer">
            <homeFooter></homeFooter>
        </el-footer>
    </div>
</template>

<script>
import homeHeader from "../layout/header.vue";
import searchTabs from "./components/searchTabs.vue";
import homeFooter from '@/views/layout/footer.vue'
export default {
    components: {
        searchTabs,
        homeHeader,
        homeFooter
    },
    name: "index",
    data() {
        return {};
    },
    mounted() {},
    watch: {},
    methods: {
        productMap() {
            this.$refs.searchTabs.closeSelect()
        }
    },
};
</script>

<style lang="less" scoped>
.index {
    width: 100%;
    .main-header {
        .wh(100%, 40px);
        background: #f7f9fc;
    }
    .searchTabsShadow {
        box-shadow: 0px 10px 15px rgba(56, 96, 244, 0.05);
        position: relative;
        z-index: 9999999;
    }
}
</style>
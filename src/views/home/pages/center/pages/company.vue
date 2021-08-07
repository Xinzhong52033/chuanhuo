<template>
    <div class="company">
        <div class="padding-box">
            <div class="left-menu">
                <div class="top">
                    <img src="../../../../../assets/img/avatar.png" alt="">
                    <span class="name">攀钢集团</span>
                </div>
                <div class="menu">
                    <leftMenu :menuList="menuList" @select="select" @selectItem='selectItem'></leftMenu>
                </div>
            </div>
            <div class="right">
                <router-view class="router-container" />
            </div>
        </div>
    </div>
</template>

<script>
import leftMenu from "../../../components/leftMenu.vue";
export default {
    components: {
        leftMenu
    },
    data() {
        return {
            menuList: [
                {name: "账号信息", value: '/companyInfo'},
                {name: "商品管理", value: '/productManage'},
                {name: "企业信息管理", value: '/companyInfoManage'},
                {name: "评论管理", value: '/commentManage'},
                {name: "收藏夹", value: '/companyCollect'},
                {name: "需求管理", value: '/companyDemandManage'}
            ],
        };
    },
    methods: {
        select(param) {
            console.log(param)
            // this.$router.push({path: param.value})
        },
        selectItem(item) {
            this.$router.push({path: item.value})
        }
    }
};
</script>

<style lang="less" scoped>
.company {
    background-color: @bc2;
    // height: 900px;
    padding: 40px 0;
    .bs();
    .padding-box {
        .flexb();
        align-items: flex-start;
    }
    .left-menu {
        flex-shrink: 0;
        .wh(240px, 800px);
        box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.1);
        border-radius: 3px 3px 0px 0px;
        .bs();
        margin-right: 20px;
        .top {
            padding-left: 20px;
            height: 76px;
            background: #374567;
            border-radius: 3px 3px 0px 0px;
            .bs();
            .flex();
            align-items: center;
            img {
                .wh(50px, 50px);
                border-radius: 50%;
                margin-right: 5px;
            }
            .name {
                font-size: 26px;
                font-family: YouSheBiaoTiHei;
                font-weight: 400;
                line-height: 34px;
                color: #fdfdff;
            }
        }
        .menu {
            .wh(100%, 100%);
            height: calc(100% - 76px);
        }
    }
    .right {
        flex: 1;
        min-height: 800px;
        background-color: #fff;
        padding: 20px;
        .bs();
    }
}
</style>
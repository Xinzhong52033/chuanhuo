<template>
    <div class="person">
        <div class="padding-box">
            <div class="left-menu">
                <div class="top">
                    <img src="../../../../../assets/img/avatar.png" alt="">
                    <span class="name">欧阳娜娜</span>
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
                {name: "账号信息", value: '/personInfo'},
                {name: "收藏夹", value: '/collect'},
                {name: "需求管理", value: '/demandManage'}
            ],
        };
    },
    methods: {
        // select(param) {
        //     console.log(param)
        //     this.$router.push({path: param.value})
        // },
        selectItem(item) {
            this.$router.push({path: item.value})
        }
    }
};
</script>

<style lang="less" scoped>
.person {
    background-color: @bc2;
    height: 900px;
    padding: 40px 0;
    .bs();
    .padding-box {
        .flexb();
    }
    .left-menu {
        .wh(240px, 100%);
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
        height: 100%;
        background-color: #fff;
        padding: 20px;
        .bs();
    }
}
</style>
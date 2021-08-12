<template>
    <div class="homeHeader" id="welcome">
        <div class="left-info">
            <div class="welcome">
                欢迎来到川货供需展示和对接系统~
            </div>
            <el-breadcrumb separator="|" class="info">
                <el-breadcrumb-item><span>入驻商家<span class="number">{{count.supplierCount}}</span>家</span></el-breadcrumb-item>
                <el-breadcrumb-item><span>注册用户<span class="number">{{count.onlineCount}}</span>人</span></el-breadcrumb-item>
                <el-breadcrumb-item><span>在线<span class="number">{{count.buyerCount}}</span>人</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="login">
            <el-breadcrumb separator="|" v-if="status=='0'">
                <el-breadcrumb-item><span class="focus" @click="login">登录</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="focus" @click="register">注册</span></el-breadcrumb-item>
            </el-breadcrumb>
            <div class="center" v-if="status=='1'" @click="center">个人中心</div>
            <div class="button" @click="loginOut" v-if="status=='1'">退出登录</div>
            <!-- <div class="button" @click="center">运营中心</div> -->
        </div>
    </div>
</template>                 

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "homeHeader",
    data() {
        return {
            count: {
                supplierCount: 290,
                onlineCount: 344,
                buyerCount: 135,
            },
        };
    },
    created() {
        this.selectCountData();
    },
    computed: {
        ...mapState({
            name: (state) => state.name,
            status: (state) => state.status,
            type: (state) => state.type,
        }),
    },
    methods: {
        ...mapMutations("login", ["changeloginName"]),
        ...mapMutations(['set_name','set_status']),
        async selectCountData() {
            let { data } = await this.$api.selectCountData();
            this.count = data;
        },
        center() {
            var newPage = this.$router.resolve({
                path: this.type == 1 ?"/companyInfo":'/personInfo',
                params: { id: 12313131231 },
            });
            window.open(newPage.href, "_blank");
        },
        login() {
            this.$router.push({ path: "/login" });
            this.changeloginName("Login");
        },
        register() {
            this.$router.push({ path: "/login" });
            this.changeloginName("Regis");
        },
        loginOut() {
            this.set_status(0)
        }
    },
};
</script>

<style lang="less" scoped>
.homeHeader {
    .wh(100%, 100%);
    .flexb();
    .left-info {
        .flex();
        align-items: center;
    }
    align-items: center;
    .info {
        margin-left: 20px;
        span {
            color: @fc1;
        }
        .number {
            font-size: 16px;
            color: @blue;
            margin: 0 5px;
        }
    }
    .login {
        .flexc();
        span {
            color: @fc1;
        }
        .button {
            .wh(78px, 24px);
            line-height: 24px;
            color: @blue;
            background-color: #d4dcf7;
            text-align: center;
            border-radius: 3px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    .userInfo {
        margin-right: 10px;
    }
    .center {
        cursor: pointer;
        &:hover {
            color: @blue; 
        }
        margin-right: 10px;
    }
    .focus {
        cursor: pointer;
        &:hover {
            color: @blue !important;
            font-weight: 600;
        }
    }
}
</style>>

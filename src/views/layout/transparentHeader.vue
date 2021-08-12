<template>
    <div class="transparentHeader" id="welcome">
        <div class="welcome">
            欢迎来到川货供需展示和对接系统~
        </div>
        <div class="login">
            <el-breadcrumb separator="|" v-if="status=='0'">
                <el-breadcrumb-item><span class="focus" @click="login">登录</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="focus" @click="register">注册</span></el-breadcrumb-item>
            </el-breadcrumb>
            <div class="center" v-if="status=='1'" @click="center">个人中心</div>
            <div class="button" @click="loginOut" v-if="status=='1'">退出登录</div>
        </div>
    </div>
</template>                 

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "transparentHeader",
    data() {
        return {
            count: {
                supplierCount: 0,
                onlineCount: 0,
                buyerCount: 0,
            },
        };
    },
    created() {},
    computed: {
        ...mapState({
            name: (state) => state.name,
            status: (state) => state.status,
            type: (state) => state.type,
        }),
    },
    methods: {
        ...mapMutations("login", ["changeloginName"]),
        ...mapMutations(["set_name", "set_status"]),
        center() {
            var newPage = this.$router.resolve({
                path: "/companyInfo",
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
            this.set_status(0);
        },
    },
};
</script>

<style lang="less" scoped>
.transparentHeader {
    color: #fff;
    .wh(100%, 40px);
    .flexb();
    align-items: center;
    .info {
        margin-right: 550px;
        span {
            color: #fff;
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
            color: #fff;
            opacity: 0.8;
        }
        .button {
            margin-left: 20px;
            .wh(78px, 24px);
            line-height: 24px;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.15);
            text-align: center;
            border-radius: 3px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    .focus {
        cursor: pointer;
        &:hover {
            color: #fff !important;
            font-weight: 600;
            opacity: 1;
        }
    }
    .center {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
        margin-right: 10px;
    }
}
</style>>

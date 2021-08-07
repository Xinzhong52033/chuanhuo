<template>
    <div class="peisonnalHeader" id="welcome">
        <div class="welcome">
            欢迎来到川货供需展示和对接系统~
        </div>
        <div class="login">
            <el-breadcrumb separator="|">
                <el-breadcrumb-item><span class="focus">登录</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="focus">注册</span></el-breadcrumb-item>
            </el-breadcrumb>
            <div class="button">运营中心</div>
        </div>
    </div>
</template>                 

<script>
export default {
    name: 'peisonnalHeader',
    data() {
        return {
            count: {
                supplierCount: 0,
                onlineCount: 0,
                buyerCount: 0
            },
        }
    },
    created() {
        // this.selectCountData()
    },
    methods: {
       async selectCountData() {
           let {data} = await this.$api.selectCountData()
           this.count = data
       } 
    }
}
</script>

<style lang="less" scoped>
    .peisonnalHeader {
        color:#fff;
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
    }
</style>>

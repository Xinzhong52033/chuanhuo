<template>
    <div class="homefooter">
        <div class="top">
            <div class="padding-box">
                <div class="logo">
                    <img src="../../assets/img/logo.png" alt="">
                    <span>川货供需展示和对接系统 </span>
                </div>
                <el-breadcrumb separator="|" class="tabs">
                    <el-breadcrumb-item><span @click="handleClick('home')" class="item" :class="activeName=='home'?'focus':''">首页</span></el-breadcrumb-item>
                    <el-breadcrumb-item><span @click="handleClick('brand')" class="item" :class="activeName=='brand'?'focus':''">品牌馆</span></el-breadcrumb-item>
                    <el-breadcrumb-item><span @click="handleClick('goods')" class="item" :class="activeName=='goods'?'focus':''">川货汇</span></el-breadcrumb-item>
                    <el-breadcrumb-item><span @click="handleClick('demand')" class="item" :class="activeName=='demand'?'focus':''">求购场</span></el-breadcrumb-item>
                </el-breadcrumb>
                <div class="nouse"></div>
            </div>
        </div>
        <div class="center">
            <div class="padding-box">
                <div class="concact">
                    <div class="row">
                        <i class="iconfont icon-dianhua"></i><span>400-888-8888</span>
                    </div>
                    <div class="row">
                        <i class="iconfont icon-youxiang"></i><span>888888888888@163.com</span>
                    </div>
                    <div class="row">
                        <i class="iconfont icon-dingwei"></i><span>四川省成都市高新区XXXXX号</span>
                    </div>
                </div>
                <div class="wechat">
                    <img src="../../assets/img/wechat.png" alt="">
                    <span>官方微信</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <span>© 2010-2021 sc goods.com 版权所有</span>
        </div>
    </div>
</template>                 

<script>
import { mapState, mapMutations} from "vuex";
export default {
    name: "homefooter",
    data() {
        return {
            number: 10000,
            activeName: this.$store.state.banerSelect || 'home',
        };
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
        handleClick(name) {
           this.$router.push({path:name})
           this.set_banerSelect(name)
        },
    },
    
};
</script>

<style lang="less" scoped>
.homefooter {
    .wh(100%, 100%);
    color: #fff;
    background-color: #333648;
    background-image: url("../../assets/img/foot_bg.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 1200px 330px;
    .top {
        .wh(100%, 117px);
        border-bottom: 1px solid #616472;
        box-sizing: border-box;
        .padding-box {
            .flexb();
            align-items: center;
            .logo {
                .flex();
                .wh(330px, 40px);
                img {
                    .wh(30px, 32px);
                    margin-right: 10px;
                }
                font-size: 24px;
            }
            .tabs {
                font-size: 18px;
                span {
                    color: #fff;
                }
                .focus {
                    color: @yellow;
                }
                .item {
                    padding: 0 45px;
                    cursor: pointer;
                    &:hover {
                        color: @yellow;
                    }
                }
            }
            /deep/.el-breadcrumb__separator {
                position: relative;
                top: -2px;
                font-size: 15px;
                color: #7a8ba6;
            }
            .nouse {
                width: 330px;
                height: 100%;
            }
        }
    }
    .center {
        .wh(100%, 185px);
        font-size: 16px;
        .padding-box {
            .flexb();
            align-items: center;
            .concact {
                .flexb();
                align-items: flex-start;
                flex-direction: column;
                .wh(300px, 130px);
                .row {
                    .flexb(flex-start);
                    align-items: center;
                    i {
                        font-size: 22px;
                        margin-right: 17px;
                    }
                }
            }
            .wechat {
                .flexb();
                flex-direction: column;
                .wh(90px, 130px);
                > img {
                    .wh(90px, 90px);
                }
                > span {
                    text-align: center;
                }
            }
        }
    }
    .bottom {
        height: 50px;
        background-color: #555;
        opacity: 0.5;
        text-align: center;
        line-height: 50px;
    }
}
</style>>

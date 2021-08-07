<template>
  <div class="login-page">
      <div class="main">
          <div class="center">
              <img src="@/assets/img/login/logo2.png" alt="">
              <p class="title">欢迎登陆川货供需展示和对接系统</p>
              <components :is="activeKey"></components>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Login from './components/Login.vue';
import Forget from './components/Forget.vue';
import Regis from './components/Regis.vue';
import ResetPwd from './components/ResetPwd.vue';

export default {
    components:{
        Login,
        Forget,
        Regis,
        ResetPwd
    },
    data(){
        return {
            activeKey:this.loginName
        }
    },
    computed: {
        ...mapState("login", ["loginName"]),
    },
    watch: {
        loginName(val) {
            this.activeKey = this.loginName;
        },
    },
    created(){
        this.activeKey = this.loginName;
    },
    methods:{
    }
}
</script>

<style lang="less" scoped>
.login-page{
    .wh(100vw,100vh);
    // .bis('~@/assets/img/login/bg.png');
    background: #F7F9FB;
    .flex(center);
    align-items: center;
    .main{
        font-size: 16px;
        .wh(1080px,700px);
        background: #fff url('~@/assets/img/login/l-1.png') 100% 0 no-repeat;
        background-size: 540px 700px;
        box-shadow: 0px 8px 20px rgba(0, 27, 61, 0.1);
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 5%;
        box-sizing: border-box;
        .center{
            width: 352px;
            height: 441px;
            .flexc();
            flex-direction: column;
            .title{
                color: #CAD0D8FF;
                line-height: 0.4rem;
            }
            img {
                .wh(352px, 32px);
                margin-bottom: 10px;
            }
            /deep/.nav{
                margin-top: 30px;
                width: 100%;
                color: #5F6366FF;
                border-bottom: 1px solid #E1E7EFFF;
                .flexb();
                .item{
                    display: inline-block;
                    padding-bottom: 5px;
                    border-bottom: 3px solid #3891FF;
                    &:nth-child(2) {
                        margin-right: 40px;
                    }
                    cursor: pointer;
                }
                .item-unselect {
                    border-bottom: 3px solid transparent;
                }
            }
            /deep/.el-form{
                margin-top: 20px;
                width: 100%;
                color: @black;
                .el-input-group--prepend{
                    width: 100%;
                    margin-bottom: 5px;
                    border: 1px solid #EFF2F9;
                    background: #EFF2F9;
                    box-sizing: border-box;
                    &:last-child{
                        margin-bottom: 0;
                    }
                    .el-input-group__prepend{
                        padding: 0;
                        border: none;
                        box-sizing: border-box;
                        .wh(40px,40px);
                        border: none;
                        box-sizing: border-box;
                        background-color: #374567;
                        clip-path: polygon(0 0,80% 0,100% 50%,80% 100%,0 100%);
                        text-align: center;
                        color: #fff;
                        i {
                            margin-right: 2px;
                        }
                    }
                    .el-input__inner{
                        border: none;
                        background-color: #EFF2F9;
                        color: @black;
                    }
                }
            }
            .pwd-content{
                width: 100%;
                margin-bottom: 40pxrem;
                .flex();
                span{
                    color: #3891FF;
                    font-size: 14px;
                    cursor: pointer;
                }
            }
            /deep/.submit-btn{
                cursor: pointer;
               .wh(100%,40px);
               background: #3891FF;
               border-radius: 8px;
               color: #fff;
               box-shadow: 0px 4px 8px rgba(0, 27, 61, 0.1);
           }
           .res-content{
               margin-top: 16px;
               width: 100%;
               .flex(flex-end);
               span{
                   color: #3891FF;
                    font-size: 14pxrem;
                    cursor: pointer;
               }
           }
        }
    }
}
</style>
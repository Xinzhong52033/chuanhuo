<template>
  <div class="login">
      <div class="nav">
          <div class="item">账号密码登录</div>
      </div>
      <el-form :model="formData" :rules="rules" ref="ruleForm">
            <el-form-item prop="name">
                <el-input placeholder="账户（用户名或手机号）" auto-complete="new-password" v-model="formData.name">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-lujing243"></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input placeholder="密码" type="password" :show-password="true" auto-complete="new-password" v-model="formData.pwd">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-zu303"></i>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="pwd-content">
            <el-checkbox v-model="checked" @change="saveChange">记住密码</el-checkbox>
            <span @click="changeloginName('Forget')">忘记密码？</span>
        </div>
        <button class="submit-btn" @click="submitForm">登录</button>
        <div class="res-content">
            <span @click="changeloginName('Regis')">注册账户</span>
        </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const rules = {
    name: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
    ],
    pwd: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
}
export default {
    data(){
        return {
            formData:{
                name:'',
                pwd:'',
            },
            rules,
            checked:false
        }
    },
    created() {
        this.formData.name = this.$cookies.get('name') || ''
        this.formData.pwd = this.$cookies.get('pwd') || ''
    },
    methods:{
        ...mapMutations("login", ["changeloginName"]),
        ...mapMutations(['set_name', 'set_status', 'set_type', 'set_userId', 'set_icon']),
        saveChange(e){
            if(e){
                // this.changeData(this.formData);
                this.formData.name && this.$cookies.set('name',this.formData.name,-1);
                this.formData.pwd && this.$cookies.set('pwd',this.formData.pwd,-1);
            }else{
                this.$cookies.isKey('name') && this.$cookies.remove('name');
                this.$cookies.isKey('pwd') && this.$cookies.remove('pwd');
            }
        },
        submitForm() {
            this.$refs.ruleForm.validate(async (res) => {
                if (res) {
                    let {data} = await this.$api.login(this.formData);
                    if (data.result == true) {
                       this.$cookies.set('name',this.formData.name,-1) 
                       this.$message.success("登陆成功")
                       this.set_name(this.formData.name)
                       this.set_status(1)
                       this.set_type(data.code)
                       this.set_userId(data.data.uId)
                       this.set_icon(data.data.icon)
                       this.$router.push({path: '/home'})
                    } else {
                        this.$message.error(data.message);
                    }   
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    .nav{
        margin-top: 0.3rem;
        width: 100%;
        color: #5F6366FF;
        border-bottom: 1px solid #E1E7EFFF;
        .item{
            display: inline-block;
            padding-bottom: 0.05rem;
            border-bottom: 3px solid #3891FF;
        }
    }
    
    .pwd-content{
        width: 100%;
        margin-bottom: 0.4rem;
        .flexb();
        align-items: center;
        span{
            color: #3891FF;
            font-size: 0.14rem;
            cursor: pointer;
        }
    }
    .login-btn{
        .wh(100%,0.4rem);
        background: #3891FF;
        border-radius: 8px;
        color: #fff;
    }
    .res-content{
        margin-top: 0.16rem;
        width: 100%;
        .flex(flex-end);
        span{
            color: #3891FF;
            font-size: 0.14rem;
            cursor: pointer;
        }
    }
}
</style>
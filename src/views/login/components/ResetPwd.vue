<template>
  <div class="forget-page">
      <div class="nav">
          <div class="item">重置密码</div>
      </div>
      <el-form :model="formData" :rules="rules" ref="ruleForm">
            <el-form-item prop="pwd">
                <el-input placeholder="请输入新密码" v-model="formData.pwd">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-zu303"></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="repwd">
                <el-input placeholder="请输入新密码" v-model="formData.repwd">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-zu303"></i>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <button class="submit-btn" @click="submitForm">登录</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const rules = {
    pwd: [
        { required: true, message: '请输入新密码', trigger: 'blur' }
    ],
    repwd: [
        { required: true, message: '请重复密码', trigger: 'blur' }
    ]
}
export default {
    data(){
        return {
            formData:{
                pwd:'',
                repwd:''
            },
            rules,
            checked:false
        }
    },
    methods:{
      ...mapMutations("login", ["changeloginName"]),
        submitForm() {
            this.$refs.ruleForm.validate(async (res) => {
            if (res) {
                // let temp = await login(this.formData);
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
.forget-page{
    width: 100%;
    .pwd-content{
        width: 100%;
        margin-bottom: 0.4rem;
        .flex();
        span{
            color: #3891FF;
            font-size: 0.14rem;
            cursor: pointer;
        }
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
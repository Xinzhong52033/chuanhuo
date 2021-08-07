<template>
  <div class="forget-page">
      <div class="nav">
          <div class="item">找回密码</div>
      </div>
      <el-form :model="formData" :rules="rules" ref="ruleForm">
            <el-form-item prop="email">
                <el-input placeholder="请输入邮箱" v-model="formData.email">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-lujing257"></i>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <button class="submit-btn" @click="submitForm">下一步</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const rules = {
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
    ]
}
export default {
    data(){
        return {
            formData:{
                email:''
            },
            rules,
            checked:false
        }
    },
    methods:{
      ...mapMutations("login", ["changeloginName"]),
        submitForm() {
          this.changeloginName('ResetPwd');
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
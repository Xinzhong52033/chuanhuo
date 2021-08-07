<template>
    <div class="regis-page">
        <div class="nav">
            <div class="item" :class="formData.userType=='2'?'item-unselect':''" @click="formData.userType='1'">供应商注册</div>
            <div class="item" :class="formData.userType=='1'?'item-unselect':''" @click="formData.userType='2'">个人注册</div>
        </div>
        <el-form :model="formData" :rules="rules" ref="ruleForm">
            <el-form-item prop="user.loginName">
                <el-input :placeholder="formData.userType=='1'?'供应商名称':'用户名称'"  v-model="formData.user.loginName">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-lujing243"></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="user.email">
                <el-input placeholder="请输入邮箱（邮箱作为找回密码使用）" auto-complete="new-password" v-model="formData.user.email">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-lujing257"></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="user.password">
                <el-input placeholder="6 - 16位密码，区分大小写" type="password" auto-complete="new-password" :show-password="true" v-model="formData.user.password">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-zu303"></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="user.repassword">
                <el-input placeholder="确认密码" type="password" :show-password="true" autocomplete='off' v-model="formData.user.repassword">
                    <template slot="prepend">
                        <i class="icon iconfont icon-a-zu303"></i>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="lr-div">
            <button class="submit-btn" @click="submitForm">注册</button>
            <span @click="changeloginName('Login')">使用已有账户登录</span>
        </div>

    </div>
</template>

<script>
import { mapMutations } from "vuex";

const rules = {
    "user.loginName": [{ required: true, message: "请输入用户民", trigger: "blur" }],
    "user.password": [{ required: true, message: "请输入密码", trigger: "blur" }],
    "user.repassword": [{ required: true, message: "请输入密码", trigger: "blur" }],
};
export default {
    data() {
        return {
            formData: {
                user: {
                    loginName: "",
                    userName: "",
                    password: "",
                    repassword:''
                },
                userType: "1",
            },
            rules,
            checked: false,
        };
    },
    methods: {
        ...mapMutations("login", ["changeloginName"]),
        submitForm() {
            this.$refs.ruleForm.validate(async (res) => {
                if (res) {
                    // let obj = JSON.stringify(this.formData)
                    let temp = await this.$api.register(this.formData);
                    if (temp.msg == "ok") {
                        this.$cookies.set("userName", this.formData.name, -1);
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        this.$router.go(-1);
                    }
                    this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.regis-page {
    width: 100%;
    .lr-div {
        .flex();
        align-items: center;
        .submit-btn {
            width: 140px !important;
            margin-right: 20px;
        }
        span {
            .sc(14px,@af);
            cursor: pointer;
        }
    }
}
</style>
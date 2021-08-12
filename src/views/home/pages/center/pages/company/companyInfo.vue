<template>
    <div class="companyInfo">
        <div class="info-title">
            <div class="square"></div>
            <span>账号信息</span>
            <div class="button" @click="dialogShow">修改</div>
        </div>
        <table class="table" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td class="name">头像</td>
                <td class="value">
                    <img class="avatar" :src="userInfo.icon || require('../../../../../../assets/img/avatar.png')" alt="" />
                </td>
            </tr>
            <tr>
                <td class="name">名称</td>
                <td class="value">{{userInfo.userName}}</td>
            </tr>
            <tr>
                <td class="name">手机号码</td>
                <td class="value">{{userInfo.mobile}}</td>
            </tr>
        </table>
        <div class="psd" @click="psdDialog">修改密码</div>
        <FormDialog size='small' title="修改信息" ref="FormDialog" @submit='updateUserInfo'>
            <el-form ref="userForm" :model="userForm" label-position="left" :label-width="80*$widthCoefficient+'px'" size="medium" class="demo-ruleForm">
                <el-form-item label="头像" class="avaterItem">
                    <img class="avatar" :src="userForm.icon || require('../../../../../../assets/img/avatar.png')" alt="" style="margin-right: 20px" />
                    <el-upload class="upload-demo" action="" :http-request="httpRequest" :before-upload="beforeUpload" :show-file-list="false">
                        <el-button size="mini">更换头像</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="名称" prop="userName" :rules="{ required: true, message: '请输入名称', trigger: 'blur' }">
                    <el-input  v-model="userForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="mobile" :rules="{ required: true, message: '请输入手机', trigger: 'blur' }">
                    <el-input  v-model="userForm.mobile"></el-input>
                </el-form-item>
                <!-- <el-form-item label="验证码">
                    <el-input type="password" v-model="form.psd" style="width:55%; margin-right: 20px"></el-input>
                    <el-button>获取验证码</el-button>
                </el-form-item> -->
            </el-form>
        </FormDialog>
        <FormDialog title="修改密码" ref="psdDialog" size="small">
            <el-form ref="form" :model="form" label-position="left" :label-width="100*$widthCoefficient+'px'" size="medium" class="demo-ruleForm">
                <el-form-item label="旧密码：">
                    <el-input type="password" v-model="form.psd"></el-input>
                </el-form-item>
                <el-form-item label="新密码：">
                    <el-input type="password" v-model="form.psd"></el-input>
                </el-form-item>
                <el-form-item label="重复密码：">
                    <el-input type="password" v-model="form.psd"></el-input>
                </el-form-item>
            </el-form>
        </FormDialog>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FormDialog from "@/components/FormDialog.vue";
import axios from "axios";
export default {
    components: { FormDialog },
    name: "companyInfo",
    data() {
        return {
            form: {},
            userInfo: "",
            userForm: {
              icon: '',
              userName:'',
              mobile: ''
            }
        };
    },
    created() {
        this.getUserInfo();
    },
    computed: {
        ...mapState({
            type: (state) => state.type,
            userId: (state) => state.userId,
        }),
    },
    methods: {
        dialogShow() {
            this.$refs.FormDialog.show = true;
            this.userForm = {...this.userInfo}
        },
        psdDialog() {
            this.$refs.psdDialog.show = true;
        },
        async getUserInfo() {
            let obj = {
                uId: this.userId,
                userType: this.type,
            };
            let { data } = await this.$api.getUserInfo(obj);
            this.userInfo = data;
            this.userForm.icon = this.userInfo.icon
        },
        // 上传前验证
        beforeUpload(file) {
            var testmsg = /^(jpg|png)$/.test(
                file.name.split(".").pop()
            );
            if (!testmsg) {
                this.$message.error('图片格式不正确');
                return false;
            }
            return testmsg;
        },
        // 上传
        httpRequest(data) {
            let _this = this;
            let fileObj = data.file;
            this.fileForm = new FormData();
            this.fileForm.append("file", fileObj);
            this.fileForm.append("type", "common");
            console.log(3333, this.baseUrl)
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // token: getToken(),
                },
                baseURL: 'http://192.168.130.126:9303/',
                withCredentials: true,
            };
            // // 上传成功之前通过拦截显示加载状态
            // axios.interceptors.request.use(
            //     (config) => {
            //         // 在发送请求之前开始加载
            //         this.fullscreenLoading = true;
            //         return config;
            //     },
            //     function (error) {
            //         return Promise.reject(error);
            //     }
            // );

            // // 添加响应拦截器
            // axios.interceptors.response.use(
            //     (response) => {
            //         // 对响应数据做点什么
            //         this.fullscreenLoading = false;
            //         return response;
            //     },
            //     function (error) {
            //         return Promise.reject(error);
            //     }
            // );
            axios
                .post("/sc-server/file/img/upload", this.fileForm, config)
                .then(async (res) => {
                    if (res.data.code == 1) {
                       // 表单添加头像地址
                       this.userForm.icon = res.data.data.value
                    } else if (res.data.code == -4) {
                        // MSG.errorMsg(res.data.msg);
                        // router.push({ path: "/login" });
                        // return false;
                    } else {
                        this.$message(res.data.msg)
                        return false;
                    }
                });
        },
        // 更新用户信息
        async updateUserInfo() {
          this.$refs.userForm.validate( async (valid) => {
                if (valid) {
                    await this.$api.updateUserInfo(this.userForm);
                    this.$message({
                        message: "信息修改成功",
                        type: "success",
                    });
                    this.$refs.psdDialog.show = false;
                } else {
                    this.$message.error('请填写完整');
                    return false;
                }
          });
        }
    },
};
</script>

<style lang="less" scoped>
.companyInfo {
    .wh(100%, 100%);
    .bs();
    .table {
        width: 100%;
        font-size: 16px;
        tr {
            width: 100%;
        }
        td {
            height: 50px;
            text-align: left;
            border-right: 1px solid #e1e6f0;
            border-bottom: 1px solid #e1e6f0;
            .bs();
            padding: 10px;
        }
        .name {
            background-color: @bc2;
            width: 188px;
            color: @fc1;
        }
        .value {
            // width: 35%;
            color: @black;
        }
        border-top: 1px solid #e1e6f0;
        border-left: 1px solid #e1e6f0;
        .bs();
    }
    .avatar {
        .wh(60px, 60px);
        border-radius: 50%;
    }
    .psd {
        margin-top: 30px;
        .detail(150px, 46px);
    }
    /deep/.avaterItem {
        .flex(flex-start);
        align-items: center;
        .el-form-item__content {
            padding-top: 10px;
            .bs();
            margin-left: 0 !important;
            .flex();
            align-items: center;
        }
    }
}
</style>
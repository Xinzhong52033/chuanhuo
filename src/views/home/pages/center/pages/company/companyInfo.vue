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
          <img
            class="avatar"
            src="../../../../../../assets/img/avatar.png"
            alt=""
          />
        </td>
      </tr>
      <tr>
        <td class="name">名称</td>
        <td class="value">攀钢集团</td>
      </tr>
      <tr>
        <td class="name">手机号码</td>
        <td class="value">13511223366</td>
      </tr>
    </table>
    <div class="psd" @click="psdDialog">修改密码</div>
    <FormDialog  size='small' title="修改信息" ref="FormDialog" >
      <el-form
        ref="form"
        :model="form"
        label-position="left"
        :label-width="80*$widthCoefficient+'px'"
        size="medium"
        class="demo-ruleForm"
      >
        <el-form-item  label="头像" class="avaterItem">
          <img
            class="avatar"
            src="../../../../../../assets/img/avatar.png"
            alt=""
            style="margin-right: 20px"
          />
          <el-button size="mini">更换头像</el-button>
        </el-form-item>
        <el-form-item label="名称">
          <el-input type="password" v-model="form.psd"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input type="password" v-model="form.psd"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input type="password" v-model="form.psd" style="width:55%; margin-right: 20px"></el-input><el-button>获取验证码</el-button>
        </el-form-item>
      </el-form>
    </FormDialog>
    <FormDialog title="修改密码" ref="psdDialog" size="small">
      <el-form
        ref="form"
        :model="form"
        label-position="left"
        :label-width="100*$widthCoefficient+'px'"
        size="medium"
        class="demo-ruleForm"
      >
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
import FormDialog from "@/components/FormDialog.vue";
export default {
  components: { FormDialog },
  name: "companyInfo",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    dialogShow() {
      this.$refs.FormDialog.show = true;
    },
    psdDialog() {
      this.$refs.psdDialog.show = true;
    },
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
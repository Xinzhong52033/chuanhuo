<template>
    <div class="companyInfoManage">
        <div class="info-title">
            <div class="square"></div>
            <span>基础信息</span>
            <div class="button" @click="dialogShow">
                修改
            </div>
        </div>
        <table class="table" border="0" cellspacing=0 cellpadding=0>
            <tr>
                <td class="name">封面图</td>
                <td class="value">
                    <img class="avatar" src="../../../../../../assets/img/company.jpg" alt="">
                </td>
            </tr>
            <tr>
                <td class="name">公司名称</td>
                <td class="value">攀钢集团钒钛资源股份有限公司</td>
            </tr>
            <tr>
                <td class="name">所属园区</td>
                <td class="value">攀枝花钒钛产业园区</td>
            </tr>
            <tr>
                <td class="name">公司地址</td>
                <td class="value">攀枝花市金沙江大道东段1491号</td>
            </tr>
            <tr>
                <td class="name">主营产品</td>
                <td class="value">五氧化二钒、高钒铁、钒氮合金、钒铝合金</td>
            </tr>
            <tr>
                <td class="name">主营行业</td>
                <td class="value">能源产品</td>
            </tr>
            <tr>
                <td class="name">简介</td>
                <td class="value">攀钢集团钒钛资源股份有限公司（以下简称“公司”）成立于1993年3月27日，1996年11月15日在深圳证券交易所上市（股票代码：000629）。总部坐落在被誉为“钒钛之都 ”的四川省攀枝花市。</td>
            </tr>
        </table>
        <div class="info-title">
            <div class="square"></div>
            <span>联系方式</span>
            <div class="button" @click="dialogShow">
                修改
            </div>
        </div>
        <table class="table" border="0" cellspacing=0 cellpadding=0>
            <tr>
                <td class="name">联系人</td>
                <td class="value">王钢</td>
            </tr>
            <tr>
                <td class="name">联系电话</td>
                <td class="value">13511223366</td>
            </tr>
            <tr>
                <td class="name">邮箱地址</td>
                <td class="value">1435871767@qq.com</td>
            </tr>
        </table>
        <div class="info-title">
            <div class="square"></div>
            <span>工商信息</span>
            <div class="button success">
                认证成功
            </div>
            <div class="button" @click="dialogShow">
                修改
            </div>
        </div>
        <table class="table" border="0" cellspacing=0 cellpadding=0>
            <tr>
                <td class="name">企业注册名称</td>
                <td class="value">攀钢集团钒钛资源股份有限公司</td>
            </tr>
            <tr>
                <td class="name">法人代表</td>
                <td class="value">谢俊勇</td>
            </tr>
            <tr>
                <td class="name">注册资本（万元）</td>
                <td class="value">1000万元</td>
            </tr>
            <tr>
                <td class="name">成立日期</td>
                <td class="value">2016-10-01</td>
            </tr>
            <tr>
                <td class="name">税号/统一社会信用代码</td>
                <td class="value">91530100719427566H</td>
            </tr>
            <tr>
                <td class="name">营业执照</td>
                <td class="value">
                    <img class="license" src="../../../../../../assets/img/zz.jpg" alt="">
                </td>
            </tr>
        </table>
        <div class="info-title">
            <div class="square"></div>
            <span>工商信息</span>
            <div class="button failed">
                认证失败
            </div>
            <div class="button" @click="dialogShow">
                修改
            </div>
        </div>
        <table class="table" border="0" cellspacing=0 cellpadding=0>
            <tr>
                <td class="name">企业注册名称</td>
                <td class="value">攀钢集团钒钛资源股份有限公司</td>
            </tr>
            <tr>
                <td class="name">法人代表</td>
                <td class="value">谢俊勇</td>
            </tr>
            <tr>
                <td class="name">注册资本（万元）</td>
                <td class="value">1000万元</td>
            </tr>
            <tr>
                <td class="name">成立日期</td>
                <td class="value">2016-10-01</td>
            </tr>
            <tr>
                <td class="name">税号/统一社会信用代码</td>
                <td class="value">91530100719427566H</td>
            </tr>
            <tr>
                <td class="name">营业执照</td>
                <td class="value">
                    <img class="license" src="../../../../../../assets/img/zz.jpg" alt="">
                </td>
            </tr>
            <tr>
                <td class="name">失败原因</td>
                <td class="value" style="color:#FF5D6C">营业执照已过期</td>
            </tr>
        </table>
        <companyInfoDialog ref='companyInfoDialog'></companyInfoDialog>
    </div>
</template>

<script>
import companyInfoDialog from "./dialog/companyInfoDialog.vue"
import FormDialog from "@/components/FormDialog.vue";
export default {
    components: { FormDialog,companyInfoDialog },
    name: "companyInfoManage",
    data() {
        return {
            form: {},
        };
    },
    methods: {
        dialogShow() {
            this.$refs.companyInfoDialog.openDialog()
        },
        psdDialog() {
            this.$refs.psdDialog.show = true;
        },
    },
};
</script>

<style lang="less" scoped>
.companyInfoManage {
    .success {
        padding: 0 20px;
        margin-left: 20px;
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
    }
    .failed {
       padding: 0 20px;
       margin-left: 20px; 
    }
    .license {
        .wh(100px, 140px)
    }
    .wh(100%, 100%);
    .bs();
    .table {
        width: 100%;
        font-size: 16px;
        margin-bottom: 20px;
        tr {
            width: 100%;
        }
        td {
            height: 50px;
            text-align: left;
            border-right: 1px solid #e1e6f0;
            border-bottom: 1px solid #e1e6f0;
            .bs();
            padding: 10px 20px;
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
        .wh(81px, 60px);
    }
    .psd {
        margin-top: 30px;
        .detail(150px, 46px);
    }
}
</style>
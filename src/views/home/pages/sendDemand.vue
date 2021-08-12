<template>
    <div class="sendDemand">
        <div class="padding-box">
            <div class="detail">
                <div class="left-top">需求单
                    <div class="triangle">
                    </div>
                </div>
                <div class="info">
                    <el-form ref="form" :rules="rules" :model="form" :inline="true" label-position="top" label-width="100px" size="medium" class="demo-ruleForm">
                        <div class="info-title">
                            <div class="square"></div>
                            <span>基础信息</span>
                        </div>
                        <el-form-item label="标题" prop="demandDetails.demandTitle" style="width: 48%">
                            <el-input v-model="form.demandDetails.demandTitle" placeholder="" style="width: 60%"></el-input>
                        </el-form-item>
                        <el-form-item label="类型" prop="demandDetails.commodityStatus" style="width: 48%">
                            <el-radio-group v-model="form.demandDetails.commodityStatus">
                                <el-radio label="现货/标准品">现货/标准品</el-radio>
                                <el-radio label="加工/定制品">加工/定制品</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <div class="info-title">
                            <div class="square"></div>
                            <span>商品信息</span>
                        </div>
                        <el-form-item class="product-info-item" prop="demandCommodityList.commodityName" label="* 商品名称" style="width: 20%">
                            <template slot="label"><span style="color: red">*</span> 商品名称</template>
                        </el-form-item>
                        <el-form-item class="product-info-item" prop="demandCommodityList.platformCategory" label="平台类目" style="width: 20%">
                            <template slot="label"><span style="color: red">*</span> 平台类目</template>
                        </el-form-item>
                        <el-form-item class="product-info-item" prop="demandCommodityList.count" label="数量" style="width: 10%">
                            <template slot="label"><span style="color: red">*</span> 数量</template>
                        </el-form-item>
                        <el-form-item class="product-info-item" prop="demandCommodityList.unit" label="单位" style="width: 10%">
                        </el-form-item>
                        <el-form-item class="product-info-item" prop="demandCommodityList.budget" label="预算（单位：元）" style="width: 15%">
                        </el-form-item>
                        <el-form-item class="product-info-item" prop="demandCommodityList.remarks" label="备注" style="width: 15%">
                        </el-form-item>
                        <div class="product-info" v-for="item, key in form.demandCommodityList" :key="key">
                            <el-form-item style="width: 20%" :prop="`demandCommodityList[${key}].commodityName`" :rules="{ required: true, message: '请输入商品名称', trigger: 'blur' }">
                                <el-input v-model="form.demandCommodityList[key].commodityName" style="width: 100%"></el-input>
                            </el-form-item>
                            <el-form-item style="width: 20%" :prop="`demandCommodityList[${key}].platformCategory`" :rules="{ required: true, message: '请选择类目', trigger: 'change' }">
                                <el-cascader v-model="form.demandCommodityList[key].platformCategory" style="width: 100%" :options="selectGroup" :props="props" clearable=""></el-cascader>
                            </el-form-item>
                            <el-form-item style="width: 10%" :prop="`demandCommodityList[${key}].count`" :rules="{ required: true, message: '请输入数量', trigger: 'blur' }">
                                <el-input type="number" v-model="form.demandCommodityList[key].count" style="width: 100%"></el-input>
                            </el-form-item>
                            <el-form-item style="width: 10%">
                                <el-select v-model="form.demandCommodityList[key].unit" style="width: 100%" placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item style="width: 15%">
                                <el-input v-model="form.demandCommodityList[key].budget" style="width: 100%"></el-input>
                            </el-form-item>
                            <el-form-item style="width: 15%">
                                <el-input v-model="form.demandCommodityList[key].remarks" style="width:85%"></el-input>
                                <i @click="deleteOne(key)" v-if="form.demandCommodityList.length>1" class="el-icon-remove-outline"></i>
                            </el-form-item>
                        </div>
                        <div class="addOne">
                            <i class="el-icon-plus" @click="addOne()"></i><span>添加一项</span>
                        </div>
                        <div class="info-title">
                            <div class="square"></div>
                            <span>采购需求</span>
                        </div>
                        <el-form-item label="截止时间" prop="demandDetails.endTime" style="width: 35%">
                            <el-date-picker v-model="form.demandDetails.endTime" value-format="yyyy-MM-dd" tyle="width: 100%" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="报价要求" style="width: 55%">
                            <el-checkbox-group v-model="form.demandDetails.quotationRequest">
                                <el-checkbox label="报价含税"></el-checkbox>
                                <el-checkbox label="报价需要包含运费"></el-checkbox>
                                <el-checkbox label="允许提供单部分商品"></el-checkbox>
                                <el-checkbox label="供应商报价可改数量"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <div class="info-title">
                            <div class="square"></div>
                            <span>采购类型</span>
                        </div>
                        <el-form-item label="采购类型" prop="demandDetails.purchaseType" style="width: 35%">
                            <el-radio-group v-model="form.demandDetails.purchaseType">
                                <el-radio label="单次采购">单次采购</el-radio>
                                <el-radio label="协议采购（长期采购）">协议采购（长期采购）</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="期望收货日期" style="width: 55%">
                            <el-date-picker value-format="yyyy-MM-dd" v-model="form.demandDetails.expectTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="发票要求" prop="demandDetails.invoiceClaim" style="width: 100%">
                            <el-radio-group v-model="form.demandDetails.invoiceClaim">
                                <el-radio label="增值税专票（一般纳税人开具）">增值税专票（一般纳税人开具）</el-radio>
                                <el-radio label="增值税专票（不限开具方）">增值税专票（不限开具方）</el-radio>
                                <el-radio label="增值税普通发票">增值税普通发票</el-radio>
                                <el-radio label="不用发票">不用发票</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <div class="info-title">
                            <div class="square"></div>
                            <span>联系方式</span>
                        </div>
                        <el-form-item label="联系人" prop="demandDetails.contactPerson" style="width: 25%">
                            <el-input v-model="form.demandDetails.contactPerson" style="width: 100%"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" prop="demandDetails.phoneNumber" style="width: 25%">
                            <el-input v-model="form.demandDetails.phoneNumber" style="width: 100%"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="短信验证码" style="width: 35%">
                            <el-input v-model="form.demandDetails.phoneNumber" style="width: 71%;margin-right: 10px"></el-input>
                            <el-button type="primary" plain>获取验证码</el-button>
                        </el-form-item> -->
                        <el-form-item label="公司名称" style="width: 25%">
                            <el-input v-model="form.demandDetails.companyName" style="width: 100%"></el-input>
                        </el-form-item>
                        <el-form-item label="收货地址" style="width: 25%">
                            <el-input v-model="form.demandDetails.receiptAddress" style="width: 100%"></el-input>
                        </el-form-item>
                        <el-form-item label="截止时间" style="width: 25%">
                            <el-date-picker v-model="form.demandDetails.endTime" style="width: 100%" align="right" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- <div>
                    <TableForm :tableData="headerData" :tableRules='headerRules' :list='headerList'></TableForm>
                </div> -->
                <div style="text-align: center;margin: 30px">
                    <el-button style="margin: 0 auto" type="primary" size="large" @click="submitForm">提交需求</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormDialog from "@/components/FormDialog.vue";
import TableForm from "@/components/TableForm.vue";
// const rules = {};
// const headerData = [
//     {
//         name: "name",
//         label: "Header名称",
//         inputType: "String",
//         placeholder: "请输入",
//     },
// ];
// const headerRules = {
//     name: [{ required: true, message: "请输入标题", trigger: "blur" }],
// };
export default {
    components: { FormDialog, TableForm },
    name: "sendDemand",
    data() {
        return {
            form: {
                demandDetails: {
                    demandId: "",
                    demandTitle: "",
                    commodityStatus: "0",
                    endTime: "",
                    purchaseType: "0",
                    quotationRequest: [],
                    expectTime: "",
                    invoiceClaim: "0",
                    contactPerson: "",
                    phoneNumber: "",
                    companyName: "",
                    receiptAddress: "",
                    lastTime: "",
                    annex: "",
                    createTime: "",
                    deleteTime: "",
                    isDelete: "",
                    userId: "",
                    expectTime: "",
                },
                demandCommodityList: [
                    {
                        commodityId: "",
                        commodityName: "",
                        platformCategory: "",
                        count: "",
                        budget: "",
                        unit: "吨",
                        remarks: "",
                        annex: "",
                        demandId: "",
                    },
                ],
            },
            radio: 3,

            headerList: [],
            checkList: [],
            value1: [],
            rules: {
                "demandDetails.demandTitle": [
                    { required: true, message: "请输入标题", trigger: "blur" },
                ],
                "demandDetails.commodityStatus": [
                    { required: true, message: "请选择类型", trigger: "blur" },
                ],
                "demandDetails.endTime": [
                    {
                        required: true,
                        message: "请输入截止时间",
                        trigger: "blur",
                    },
                ],
                "demandDetails.purchaseType": [
                    {
                        required: true,
                        message: "请选择采购类型",
                        trigger: "change",
                    },
                ],
                "demandDetails.invoiceClaim": [
                    {
                        required: true,
                        message: "请选择发票要求",
                        trigger: "change",
                    },
                ],
                "demandDetails.contactPerson": [
                    {
                        required: true,
                        message: "请输入联系人名称",
                        trigger: "blur",
                    },
                ],
                "demandDetails.phoneNumber": [
                    {
                        required: true,
                        message: "请输入联系电话",
                        trigger: "blur",
                    },
                ],
            },
            selectGroup: [],
            props: {
                value: "categoryId",
                label: "categoryName",
                children: "list",
            },
            options: [
                {
                    value: "吨",
                },
                {
                    value: "件",
                },
                {
                    value: "个",
                },
                {
                    value: "台",
                },
                {
                    value: "箱",
                },
                {
                    value: "套",
                },
                {
                    value: "米",
                },
            ],
        };
    },
    created() {
        this.selectGroupCategory();
    },
    methods: {
        dialogShow() {
            this.$refs.FormDialog.show = true;
        },
        psdDialog() {
            this.$refs.psdDialog.show = true;
        },
        addOne() {
            this.form.demandCommodityList.push({
                commodityId: "",
                commodityName: "",
                platformCategory: "",
                count: "",
                budget: "吨",
                unit: "",
                remarks: "",
                annex: "",
                demandId: "",
            });
        },
        deleteOne(index) {
            this.form.demandCommodityList.splice(index, 1);
        },
        async selectGroupCategory() {
            let { data } = await this.$api.selectGroupCategory();
            this.selectGroup = data;
        },
        async submitForm() {
            this.$refs.form.validate( async (valid) => {
                if (valid) {
                    await this.submit();
                    this.$message({
                        message: "需求提交成功",
                        type: "success",
                    });
                } else {
                    this.$message.error('请填写完整');
                    return false;
                }
            });
        },
        async resetForm() {
            this.$refs.form.resetFields();
        },
        async submit() {
            // 复制一份数据
            let obj = JSON.parse(JSON.stringify(this.form));
            // 修改数据结构
            obj.demandCommodityList.forEach((item) => {
                item.platformCategory = item.platformCategory[1];
            });
            if (obj.demandDetails.expectTime) {
                obj.demandDetails.expectTime =
                    obj.demandDetails.expectTime.join(",");
            }
            obj.demandDetails.quotationRequest = obj.demandDetails.quotationRequest.join(',')
            console.log(JSON.stringify(obj))
            await this.$api.sendDemand({id:JSON.stringify(obj)});
        },
    },
};
</script>

<style lang="less" scoped>
.sendDemand {
    padding: 30px 0;
    background-color: @bc2;
    font-size: 16px;
    .info-title {
        margin-bottom: 10px;
    }
    .el-icon-remove-outline {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    .detail {
        overflow: hidden;
        background-color: #fff;
        padding: 72px 40px 0 40px;
        .bs();
        position: relative;
        .left-top {
            position: absolute;
            .wh(166px, 42px);
            background-color: @yellow;
            font-size: 20px;
            color: white;
            text-align: center;
            line-height: 42px;
            top: 0;
            left: 0;
            .triangle {
                .wh(24px, 42px);
                background: url("../../../assets/img/triangle.png");
                background-size: 100% 100%;
                position: absolute;
                right: -24px;
                top: 0px;
            }
        }
        .product-info {
            // margin-bottom: 20px;
            .el-input {
                margin-right: 10px;
            }
            i {
                font-size: 20px;
                color: #ff5d6c;
            }
        }
        .product-info-item {
            margin-bottom: 0;
        }
        .addOne {
            height: 20px;
            .flex();
            align-items: center;
            color: @yellow;
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 20px;
            &:hover {
                opacity: 0.8;
            }
            i {
                font-size: 12px;
                .wh(16px, 16px);
                line-height: 14px;
                border: 1px solid @yellow;
                margin-right: 10px;
                text-align: center;
                .bs();
            }
            span {
                height: 20px;
            }
        }
    }
}
</style>
<template>
    <div class="productManage">
        <div class="button">
            <div @click="select = '已上架'" :class="select == '已上架' ? 'select' : ''">
                已上架
            </div>
            <div @click="select = '已下架'" :class="select == '已下架' ? 'select' : ''">
                已下架
            </div>
            <el-button size="mini" type="primary" style="margin-left: auto" @click="openDialog">新增</el-button>
        </div>
        <div class="table">
            <DataTable style="width: 100%" :columns="tableColumns" :border="true" :data="list.items" :total="list.total">
                <template slot="option" slot-scope="{ row }">
                    <div class="option">
                        <div class="check button" @click="openDialog"><i class="iconfont icon-xiangqing"></i></div>
                        <div class="edit button" @click="openDialog"><i class="iconfont icon-bianji"></i></div>
                        <div class="download button" @click="openDialog">
                            <i class="iconfont icon-xiajia"></i>
                        </div>
                        <div class="delete button" @click="openDialog"><i class="iconfont icon-shanchu"></i></div>
                    </div>
                </template>
            </DataTable>
        </div>
        <FormDialog title="编辑商品" ref="dialog" size="big" class="form-dialog" @submit="editProduct">
            <el-form ref="form" :model="form" label-position="top" label-width="100px" size="medium" :inline='true' class="demo-ruleForm">
                <div class="info-title">
                    <div class="square"></div>
                    <span>基础信息</span>
                </div>
                <div>
                    <el-form-item label="商品图" prop='commodityDetails.icon' class="imgrow" :rules="{ required: true, message: '请上传图片', trigger: 'change'}">
                        <div class="img-outer" v-for="(item, index) in imgs" :key='index'>
                            <img class="img" :src="item" alt="">
                            <i @click="deleteImg(index)" class="el-icon-remove delete"></i>
                        </div>
                        <el-upload v-if="imgs.length < 4" class="upload-demo" action="" :http-request="httpRequest" :before-upload="beforeUpload" :show-file-list="false">
                            <span class="add-img img">
                                <i class="el-icon-plus"></i>
                            </span>
                        </el-upload>
                        <span class="tips">注：最多可选4张图片，支持jpg、png、jpeg、bmp格式，大小不超过5M。</span>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="商品名" prop="commodity.commodityName" :rules="{ required: true, message: '请输入商品名', trigger: 'blur'}">
                        <el-input v-model="form.commodity.commodityName"></el-input>
                    </el-form-item>
                    <el-form-item label="价格（元）" prop="commodityDetails.commodityPrice" :rules="{ required: true, message: '请输入', trigger: 'blur'}">
                        <el-input style="width:" v-model="form.commodityDetails.commodityPrice">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="提货方式" prop="commodityDetails.shoppingIdeas" :rules="{ required: true, message: '请选择提货方式', trigger: 'blur'}">
                        <el-select v-model="form.commodityDetails.shoppingIdeas" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in shoppingIdeasOptions" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="row">
                    <!-- <el-form-item label="交易方式">
                        <el-select v-model="form.commodityDetails.meansTransaction" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in meansTransactionOptions" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="支付方式">
                        <el-select v-model="form.commodityDetails.paymentMethod" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in paymentMethodOptions" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="库存">
                        <el-input v-model="form.commodityDetails.commodityStock"></el-input>
                    </el-form-item>
                </div>
                <div class="info-title">
                    <div class="square"></div>
                    <span>商品参数</span>
                </div>
                <div class="row">
                    <el-form-item label="商品类目" prop="commodity.categoryId" :rules="{ required: true, message: '请选择类目', trigger: 'change' }">
                        <el-cascader style="width: 100%" v-model="form.commodity.categoryId" :options="selectGroup" :props="props" clearable=""></el-cascader>
                    </el-form-item>
                    <el-form-item label="品牌" prop="commodityDetails.commodityBrand" :rules="{ required: true, message: '请填写商品品牌', trigger: 'blur' }">
                        <el-input v-model="form.commodityDetails.commodityBrand"></el-input>
                    </el-form-item>
                    <el-form-item label="地区" prop="commodityDetails.commodityArea" :rules="{ required: true, message: '请选择地区', trigger: 'change' }">
                        <!-- <el-cascader clearable="" v-model="form.commodityDetails.commodityArea" style="width: 100%" :options="options2" @change="handleChange"></el-cascader> -->
                        <el-select style="width: 100%" v-model="form.commodityDetails.commodityArea" placeholder="请选择">
                            <el-option v-for="item, i in cityList" :label="item" :value="item" :key="i+'city'">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="规格" prop="commodityDetails.commoditySpecification" :rules="{ required: true, message: '请选择规格', trigger: 'change' }">
                        <el-select v-model="form.commodityDetails.commoditySpecification" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in unit" :key="item.value" :label="item.value" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 无字段 -->
                    <!-- <el-form-item label="备注"> 
                        <el-select v-model="form.commodityDetails.commoditySpecification" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item> -->
                </div>
                <div class="info-title">
                    <div class="square"></div>
                    <span>仓库信息</span>
                </div>
                <div class="row">
                    <el-form-item label="仓库名称" prop="warehouseDetails.warehouseName" :rules="{ required: true, message: '请填写仓库名称', trigger: 'blur' }">
                        <el-input v-model="form.warehouseDetails.warehouseName"></el-input>
                    </el-form-item>
                    <el-form-item label="面积">
                        <el-input v-model="form.warehouseDetails.warehouseSize"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-input v-model="form.warehouseDetails.warehouseType"></el-input>
                    </el-form-item>
                </div>
                <div class="row">
                    <!-- 无字段 -->
                    <el-form-item label="服务商">
                        <el-input v-model="form.warehouseDetails.warehouseServe"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                         <el-input v-model="form.warehouseDetails.warehouseAdministrator"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="form.warehouseDetails.administratorPhone"></el-input>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="详细地址">
                        <el-input v-model="form.warehouseDetails.warehouseAddress"></el-input>
                    </el-form-item>
                </div>
                <div class="info-title">
                    <div class="square"></div>
                    <span>商品参数</span>
                    <div class="button" style="padding: 0 5px" @click="addOne">添加节点</div>
                </div>
                <div class="sec-title">
                    <div class="sec-title-name">产地信息</div>
                    <div class="line"></div>
                </div>
                <!-- 无字段 -->
                <div class="row">
                    <el-form-item label="公司名称">
                        <el-input v-model="form.productCompany.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-select v-model="form.productCompany.contactPerson" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="form.productCompany.contactNumber"></el-input>
                        
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="公司注册地区">
                        <el-cascader v-model="form.productCompany.ad" :options="areaJson" style="width:100%"></el-cascader>
                    </el-form-item>
                    <el-form-item label="详细地址">
                        <el-input v-model="form.productCompany.address"></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <div class="sec-title">
                <div class="sec-title-name">产品流向 </div>
                <div class="line"></div>
            </div>
            <el-form ref="form2" :model="form" label-position="left" label-width="80px" size="medium" :inline='true' class="demo-form-inline">
                <el-timeline style="margin-top: 20px">
                    <el-timeline-item type="success" v-for="h, j in form.traceabilityList" :key="j+'node'">
                        <div class="row-leftlabel">
                            <el-form-item label="选择节点">
                                <el-select v-model="h.nodeId" placeholder="请选择" style="width: 300px">
                                    <el-option v-for="item in node" :key="item.value" :label="item.name" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时间">
                                <el-date-picker v-model="h.time" value-format="yyyy-MM-dd" style="width: 300px"  type="date" placeholder="选择日期">
                            </el-date-picker>
                            </el-form-item>
                             <i @click="deleteOne(j)" class="el-icon-remove delete"></i>
                        </div>
                        <div class="row-leftlabel" v-if="h.nodeId == 0">
                            <el-form-item label="仓库">
                                <el-input v-model="h.warehouseName" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="备注">
                                <el-input v-model="h.remarks" style="width: 300px"></el-input>
                            </el-form-item>
                        </div>
                        <div class="row-leftlabel" v-if="h.nodeId == 1">
                            <el-form-item label="运输企业">
                                <el-input v-model="h.transportName" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="运输方式">
                                <el-select v-model="h.transportManner" placeholder="请选择" style="width: 300px">
                                    <el-option v-for="item in transportManner" :key="item" :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="备注">
                                <el-input v-model="h.remarks" style="width: 300px"></el-input>
                            </el-form-item>
                        </div>
                        <div class="row-leftlabel" v-if="h.nodeId == 2">
                            <el-form-item label="生产企业">
                                <el-input v-model="h.produceName" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="生产地点">
                                <el-input v-model="h.produceAddress" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="备注">
                                <el-input v-model="h.remarks" style="width: 300px"></el-input>
                            </el-form-item>
                           
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </el-form>
        </FormDialog>
    </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import FormDialog from "@/components/FormDialog.vue";
import areaJson from "@/assets/json/AreaJson";
let $widthCoefficient = document.documentElement.clientWidth / 1920;
import axios from "axios";
const tableColumns = [
    {
        title: "编号",
        align: "center",
        type: "index",
        width: 50  + "px",
        showOverflow: true,
    },
    {
        title: "标题",
        align: "center",
        name: "name",
        showOverflow: true,
    },
    {
        title: "库存",
        align: "center",
        name: "capital",
        width: 60  + "px",
        showOverflow: true,
    },
    {
        title: "发货/自提仓库",
        align: "center",
        name: "send",
        width: 120  + "px",
        showOverflow: false,
    },
    {
        title: "价格",
        align: "center",
        name: "price",
        width: 60  + "px",
        showOverflow: true,
    },
    {
        title: "浏览量",
        align: "center",
        name: "watch",
        width: 70 + "px",
        showOverflow: true,
    },
    {
        title: "联系人",
        align: "center",
        name: "concact",
        width: 70,
        showOverflow: true,
    },
    {
        title: "联系电话",
        align: "center",
        name: "phone",
        width: 120 + "px",
        showOverflow: true,
    },
    {
        title: "创建日期",
        align: "center",
        name: "time",
        width: 100 + "px",
        showOverflow: false,
    },
    {
        title: "操作",
        align: "center",
        name: "__slot:option",
        width: 200  + "px",
        showOverflow: true,
    },
];

export default {
    name: "productManage",
    components: {
        DataTable,
        FormDialog,
    },
    data() {
        return {
            props: {
                value: "categoryId",
                label: "categoryName",
                children: "list",
            },
            transportManner: [
                '火车','货车','水运','空运','其他',
            ],
            node:[
                {name:'仓储信息' , value: '0' },
                {name:'运输信息' , value: '1' },
                {name:'生产信息' , value: '2' }
            ],
            selectGroup: [],
            shoppingIdeasOptions: ["仓库包出", "买家自提", "其他"],
            meansTransactionOptions: ["全款现货"],
            paymentMethodOptions: ["网银转账"],
            areaJson,
            unit: [
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
            form: {
                commodity: {
                    categoryId: "",
                    commodityId: "",
                    commodityName: "",
                    userId: this.$store.state.userId, // 公司id
                },
                commodityDetails: {
                    commodityArea: "",
                    commodityBrand: "",
                    commodityId: "",
                    commodityPrice: "",
                    commoditySpecification: "吨",
                    commodityStock: "",
                    icon: "",
                    meansTransaction: "",
                    paymentMethod: "",
                    shoppingIdeas: "",
                    userId: this.$store.state.userId,
                    // warehouseId: "1",
                },
                warehouseDetails: {
                    administratorPhone: "",
                    warehouseAddress: "",
                    warehouseAdministrator: "",
                    warehouseName: "",
                    warehouseSize: "",
                    warehouseType: "",
                    warehouseServe: "",
                    warehouseId:"",
                },
                traceabilityList: [
                    {
                        commodityId: "",
                        nodeId: "",
                        nodeType: "",
                        orderNum: 0,
                        produceAddress: "",
                        produceName: '',
                        remarks: '',
                        time: "",
                        transportManner: "",
                        transportName: '',
                        warehouseName: "",
                    },
                ],
                productCompany: {
                    address: "",
                    ad: [],
                    area: "",
                    city: "",
                    companyName: "",
                    contactNumber: "",
                    contactPerson: "",
                    id: "",
                    province: "",
                    street: "",
                },
            },
            select: "已上架",
            list: {
                total: 11,
                currentPage: 1,
                pageSize: 10,
                items: [
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                    {
                        index: 0,
                        name: "四川东科管道设备有限公司",
                        capital: "1000",
                        send: "攀盘江",
                        price: "4500",
                        watch: "189",
                        concact: "王海洋",
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                    },
                ],
            },
            tableColumns,
            currentPage: 1,
            pageSize: 10,
            select1: {
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            },
            options: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            value: "",
            cityList: "",
        };
    },
    computed: {
        imgs() {
            if (this.form.commodityDetails.icon) {
                return this.form.commodityDetails.icon.split(",");
            } else {
                return [];
            }
        },
    },
    created() {
        this.selectGroupCategory();
        this.selectCityList();
    },
    methods: {
        async editGood() {
            // console.log(333, obj)

        },
        addOne() {
            this.form.traceabilityList.push({
                commodityId: "",
                nodeId: "0",
                nodeType: "仓储信息",
                orderNum: 0,
                produceAddress: "",
                produceName: "",
                remarks: "",
                time: "",
                transportManner: "",
                transportName: "",
                warehouseName: "",
            });
        },
        deleteOne(index) {
            this.form.traceabilityList.splice(index, 1)
        },
        async selectCityList() {
            let { data } = await this.$api.selectCityList();
            this.cityList = data;
        },
        async selectGroupCategory() {
            let { data } = await this.$api.selectGroupCategory();
            this.selectGroup = data;
        },
        openDialog() {
            this.$refs.dialog.show = true;
        },
        handleChange() {},
        deleteImg(index) {
            let arr = this.form.commodityDetails.icon.split(",");
            arr.splice(index, 1);
            this.form.commodityDetails.icon = arr.join(",");
        },
        // 上传前验证
        beforeUpload(file) {
            var testmsg = /^(jpg|png)$/.test(file.name.split(".").pop());
            if (!testmsg) {
                this.$message.error("图片格式不正确");
                return false;
            }
            if(file.size/1024/1024 > 5) {
                this.$message.error("图片过大");
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
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                baseURL: "http://139.155.81.36:9309/",
                withCredentials: true,
            };
            axios
                .post("/sc-server/file/img/upload", this.fileForm, config)
                .then(async (res) => {
                    if (res.data.code == 1) {
                        let temp = this.form.commodityDetails.icon
                            ? this.form.commodityDetails.icon.split(",")
                            : [];
                        temp.push(res.data.data.value);
                        // 添加图片
                        this.form.commodityDetails.icon = temp.join(",");
                    } else if (res.data.code == -4) {
                        // MSG.errorMsg(res.data.msg);
                        // router.push({ path: "/login" });
                        // return false;
                    } else {
                        this.$message(res.data.msg);
                        return false;
                    }
                });
        },
        editProduct() {
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    let obj = JSON.parse(JSON.stringify(this.form))
                    obj.productCompany.ad.forEach(e => {
                        obj.productCompany.province =  obj.productCompany.ad[0]
                        obj.productCompany.city = obj.productCompany.ad[1]
                        obj.productCompany.area = obj.productCompany.ad[2]
                    });
                    obj.commodity.categoryId = obj.commodity.categoryId[1]
                    await this.$api.editGood({id: JSON.stringify(obj)})
                    this.$message({
                        message: "商品添加成功",
                        type: "success",
                    });
                    this.$refs.dialog.show = false;
                } else {
                    this.$message.error("请填写完整");
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.productManage {
    .wh(100%, 100%);
    font-size: 16px;
    > .button {
        .flex();
        > div {
            .detail(160px, 46px);
            margin-right: 20px;
            background-color: rgba(122, 139, 166, 0.1);
            border: none;
        }
        align-items: center;
        border-bottom: 1px solid #e1e6f0;
        margin-bottom: 20px;
    }
    .select {
        background: linear-gradient(90deg, #5f87f8 0%, #3860f4 100%);
        color: #fff !important;
        border: none;
    }
    .table {
        // background-color: pink;
        height: calc(100% - 70px);
        overflow: hidden;
        /deep/.data-table {
            height: 100%;
        }
        .option {
            .flex(space-around);
            align-items: center;
        }
        .button {
            width: 26px;
            height: 26px;
            border-radius: 4px;
            text-align: center;
            line-height: 26px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
            font-size: 16px;
        }
        .check {
            color: rgba(56, 96, 244, 1);
            background: rgba(56, 96, 244, 0.1);
        }
        .edit {
            color: rgba(28, 206, 187, 1);
            background: rgba(28, 206, 187, 0.1);
        }
        .download {
            color: rgba(255, 187, 32, 1);
            background: rgba(255, 187, 32, 0.1);
        }
        .delete {
            color: rgba(255, 93, 108, 1);
            background: rgba(255, 93, 108, 0.1);
        }
    }
    .form-dialog {
        /deep/.imgrow {
            .el-form-item__content {
                .flex();
                align-items: flex-end;
            }
            .img-outer {
                width: 60px;
                height: 60px;
                position: relative;

                .bs();
                margin-right: 10px;
                i {
                    font-size: 18px;
                    opacity: 1;
                    color: #ff5d6c;
                    cursor: pointer;
                    &:hover {
                        opacity: 0.7;
                    }
                    position: absolute;
                    top: -4px;
                    right: -4px;
                }
            }
            .img {
                width: 60px;
                height: 60px;
                background: #ffffff;
                border: 1px solid #e1e6f0;
                opacity: 1;
                .bs();
            }
            .add-img {
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
                display: inline-block;
                border: 1px dashed #e1e6f0;
                height: 60px;
                line-height: 65px;
                text-align: center;
                i {
                    color: @blue;
                    font-size: 24px;
                    font-weight: 600;
                }
            }
            .tips {
                height: 16px;
                line-height: 16px;
                margin-left: 10px;
                font-size: 12px;
                color: @fc1;
                opacity: 0.7;
            }
        }
        /deep/.el-form-item__label {
            padding: 0;
        }
        .row {
            width: 100%;
            .flex();
            .el-form-item {
                width: 30%;
                &:not(:last-child) {
                    margin-right: 50px;
                }
            }
            .slot {
                font-size: 12px;
                color: @fc1;
            }
            /deep/.price-input {
                .el-input__inner {
                    border-right-color: #fff;
                }
            }
            /deep/.el-input-group__append,
            .el-input-group__prepend {
                background-color: #fff;
                border-left: none;
                border-radius: 0.053333rem;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                padding: 0 10px;
            }
        }
        .row-leftlabel {
            .el-form-item {
                width: 37%;
                &:not(:last-child) {
                    margin-right: 50px;
                }
            }
            i {
                font-size: 20px;
                color: rgba(255, 93, 108, 1);
                position: absolute;
                top: 8px;
                right: 130px;
                cursor: pointer;
                &:hover {
                    opacity: 0.5;
                }
            }
            position: relative
        }
    }
    .sec-title {
        color: @blue;
        .flex();
        margin-bottom: 10px;
        &-name {
            height: 29px;
            .bs();
            width: auto;
            border-bottom: 3px solid @blue;
        }
        .line {
            margin-top: 27px;
            flex: 1;
            height: 1px;
            background-color: #c3cffc;
            opacity: 0.8;
        }
    }
    /deep/.el-timeline-item__node--normal,
    /deep/.el-timeline-item__tail {
        top: 10px;
    }
}
</style>
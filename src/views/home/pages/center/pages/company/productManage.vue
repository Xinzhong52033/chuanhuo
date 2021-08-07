<template>
    <div class="productManage">
        <div class="button">
            <div @click="select = '已上架'" :class="select == '已上架' ? 'select' : ''">
                已上架
            </div>
            <div @click="select = '待审核'" :class="select == '待审核' ? 'select' : ''">
                待审核
            </div>
            <div @click="select = '审核失败'" :class="select == '审核失败' ? 'select' : ''">
                审核失败
            </div>
            <div @click="select = '已下架'" :class="select == '已下架' ? 'select' : ''">
                已下架
            </div>
            <el-button size="mini" type="primary" style="margin-left: auto">新增</el-button>
        </div>
        <div class="table">
            <DataTable :height="650*$widthCoefficient" style="width: 100%" :columns="tableColumns" :border="true" :data="list.items" :total="list.total">
                <template slot="option" slot-scope="{ row }">
                    <div class="option">
                        <div class="check button" @click="openDialog"><i class="el-icon-document"></i></div>
                        <div class="edit button" @click="openDialog"><i class="el-icon-edit"></i></div>
                        <div class="download button " @click="openDialog">
                            <i class="el-icon-folder-add"></i>
                        </div>
                        <div class="delete button" @click="openDialog"><i class="el-icon-delete"></i></div>
                    </div>
                </template>
            </DataTable>
        </div>
        <FormDialog title="编辑商品" ref="dialog" size="big" class="form-dialog">
            <el-form ref="form" :model="form" label-position="top" label-width="100px" size="medium" :inline='true' class="demo-ruleForm">
                <div class="info-title">
                    <div class="square"></div>
                    <span>基础信息</span>
                </div>
                <div>
                    <el-form-item label="商品图" class="imgrow">
                        <img class="img" src="@/assets/img/goods1.jpg" alt="">
                        <img class="img" src="@/assets/img/goods1.jpg" alt="">
                        <img class="img" src="@/assets/img/goods1.jpg" alt="">
                        <span class="add-img img">
                            <i class="el-icon-plus"></i>
                        </span>
                        <span class="tips">注：最多可选4张图片，支持jpg、png、jpeg、bmp格式，大小不超过5M。</span>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="商品名">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input v-model="form.psd" class="price-input">
                            <span slot="append" class="slot">元/吨</span>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="提货方式">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="交易方式">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="支付方式">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="库存">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                </div>
                <div class="info-title">
                    <div class="square"></div>
                    <span>商品参数</span>
                </div>
                <div class="row">
                    <el-form-item label="商品大类">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="地区">
                        <el-cascader clearable="" v-model="value" style="width: 100%" :options="options2" @change="handleChange"></el-cascader>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="详细地址">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="规格">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="info-title">
                    <div class="square"></div>
                    <span>仓库信息</span>
                </div>
                <div class="row">
                    <el-form-item label="仓库名称">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="面积">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-cascader clearable="" v-model="value" style="width: 100%" :options="options2" @change="handleChange"></el-cascader>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="服务商">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="地区">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="详细地址">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="info-title">
                    <div class="square"></div>
                    <span>商品参数</span>
                    <div class="button" style="padding: 0 5px">添加节点</div>
                </div>
                <div class="sec-title">
                    <div class="sec-title-name">产地信息</div>
                    <div class="line"></div>
                </div>
                <div class="row">
                    <el-form-item label="公司名称">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="公司注册地区">
                        <el-input v-model="form.psd"></el-input>
                    </el-form-item>
                    <el-form-item label="详细地址">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </el-form>
             <div class="sec-title">
                    <div class="sec-title-name">产品流向</div>
                    <div class="line"></div>
                </div>
            <el-form ref="form2" :model="form" label-position="left" label-width="80px" size="medium" :inline='true' class="demo-form-inline">
                <el-timeline style="margin-top: 20px">
                    <el-timeline-item type="success" icon='el-icon-location'>
                        <div class="row-leftlabel">
                            <el-form-item label="选择节点">
                                <el-input v-model="form.psd" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="时间">
                                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="row-leftlabel">
                            <el-form-item label="仓库">
                                <el-input v-model="form.psd" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="备注">
                                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-timeline-item>
                    <el-timeline-item type="success">
                        <div class="row-leftlabel">
                            <el-form-item label="选择节点">
                                <el-input v-model="form.psd" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="时间">
                                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="row-leftlabel">
                            <el-form-item label="仓库">
                                <el-input v-model="form.psd" style="width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="备注">
                                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
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
let $widthCoefficient =  document.documentElement.clientWidth / 1920;
const tableColumns = [
    {
        title: "编号",
        align: "center",
        name: "index",
        width: 50*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "标题",
        align: "center",
        name: "name",
        showOverflow: true,
    },
    {
        title: "库存(吨)",
        align: "center",
        name: "capital",
        width: 100*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "发货/自提仓库",
        align: "center",
        name: "send",
        width: 120*$widthCoefficient+'px',
        showOverflow: false,
    },
    {
        title: "价格",
        align: "center",
        name: "price",
        showOverflow: true,
    },
    {
        title: "浏览量",
        align: "center",
        name: "watch",
        width: 100*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "联系人",
        align: "center",
        name: "concact",
        width: 120*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "联系电话",
        align: "center",
        name: "phone",
        width: 120*$widthCoefficient+'px',
        showOverflow: true,
    },
    {
        title: "创建日期",
        align: "center",
        name: "time",
        width: 100*$widthCoefficient+'px',
        showOverflow: false,
    },
    {
        title: "操作",
        align: "center",
        name: "__slot:option",
        width: 200*$widthCoefficient+'px',
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
            options2: [
                {
                    value: "zhinan",
                    label: "指南",
                    children: [
                        {
                            value: "shejiyuanze",
                            label: "设计原则",
                            children: [
                                {
                                    value: "yizhi",
                                    label: "一致",
                                },
                                {
                                    value: "fankui",
                                    label: "反馈",
                                },
                                {
                                    value: "xiaolv",
                                    label: "效率",
                                },
                                {
                                    value: "kekong",
                                    label: "可控",
                                },
                            ],
                        },
                        {
                            value: "daohang",
                            label: "导航",
                            children: [
                                {
                                    value: "cexiangdaohang",
                                    label: "侧向导航",
                                },
                                {
                                    value: "dingbudaohang",
                                    label: "顶部导航",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "zujian",
                    label: "组件",
                    children: [
                        {
                            value: "basic",
                            label: "Basic",
                            children: [
                                {
                                    value: "layout",
                                    label: "Layout 布局",
                                },
                                {
                                    value: "color",
                                    label: "Color 色彩",
                                },
                                {
                                    value: "typography",
                                    label: "Typography 字体",
                                },
                                {
                                    value: "icon",
                                    label: "Icon 图标",
                                },
                                {
                                    value: "button",
                                    label: "Button 按钮",
                                },
                            ],
                        },
                        {
                            value: "form",
                            label: "Form",
                            children: [
                                {
                                    value: "radio",
                                    label: "Radio 单选框",
                                },
                                {
                                    value: "checkbox",
                                    label: "Checkbox 多选框",
                                },
                                {
                                    value: "input",
                                    label: "Input 输入框",
                                },
                                {
                                    value: "input-number",
                                    label: "InputNumber 计数器",
                                },
                                {
                                    value: "select",
                                    label: "Select 选择器",
                                },
                                {
                                    value: "cascader",
                                    label: "Cascader 级联选择器",
                                },
                                {
                                    value: "switch",
                                    label: "Switch 开关",
                                },
                                {
                                    value: "slider",
                                    label: "Slider 滑块",
                                },
                                {
                                    value: "time-picker",
                                    label: "TimePicker 时间选择器",
                                },
                                {
                                    value: "date-picker",
                                    label: "DatePicker 日期选择器",
                                },
                                {
                                    value: "datetime-picker",
                                    label: "DateTimePicker 日期时间选择器",
                                },
                                {
                                    value: "upload",
                                    label: "Upload 上传",
                                },
                                {
                                    value: "rate",
                                    label: "Rate 评分",
                                },
                                {
                                    value: "form",
                                    label: "Form 表单",
                                },
                            ],
                        },
                        {
                            value: "data",
                            label: "Data",
                            children: [
                                {
                                    value: "table",
                                    label: "Table 表格",
                                },
                                {
                                    value: "tag",
                                    label: "Tag 标签",
                                },
                                {
                                    value: "progress",
                                    label: "Progress 进度条",
                                },
                                {
                                    value: "tree",
                                    label: "Tree 树形控件",
                                },
                                {
                                    value: "pagination",
                                    label: "Pagination 分页",
                                },
                                {
                                    value: "badge",
                                    label: "Badge 标记",
                                },
                            ],
                        },
                        {
                            value: "notice",
                            label: "Notice",
                            children: [
                                {
                                    value: "alert",
                                    label: "Alert 警告",
                                },
                                {
                                    value: "loading",
                                    label: "Loading 加载",
                                },
                                {
                                    value: "message",
                                    label: "Message 消息提示",
                                },
                                {
                                    value: "message-box",
                                    label: "MessageBox 弹框",
                                },
                                {
                                    value: "notification",
                                    label: "Notification 通知",
                                },
                            ],
                        },
                        {
                            value: "navigation",
                            label: "Navigation",
                            children: [
                                {
                                    value: "menu",
                                    label: "NavMenu 导航菜单",
                                },
                                {
                                    value: "tabs",
                                    label: "Tabs 标签页",
                                },
                                {
                                    value: "breadcrumb",
                                    label: "Breadcrumb 面包屑",
                                },
                                {
                                    value: "dropdown",
                                    label: "Dropdown 下拉菜单",
                                },
                                {
                                    value: "steps",
                                    label: "Steps 步骤条",
                                },
                            ],
                        },
                        {
                            value: "others",
                            label: "Others",
                            children: [
                                {
                                    value: "dialog",
                                    label: "Dialog 对话框",
                                },
                                {
                                    value: "tooltip",
                                    label: "Tooltip 文字提示",
                                },
                                {
                                    value: "popover",
                                    label: "Popover 弹出框",
                                },
                                {
                                    value: "card",
                                    label: "Card 卡片",
                                },
                                {
                                    value: "carousel",
                                    label: "Carousel 走马灯",
                                },
                                {
                                    value: "collapse",
                                    label: "Collapse 折叠面板",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "ziyuan",
                    label: "资源",
                    children: [
                        {
                            value: "axure",
                            label: "Axure Components",
                        },
                        {
                            value: "sketch",
                            label: "Sketch Templates",
                        },
                        {
                            value: "jiaohu",
                            label: "组件交互文档",
                        },
                    ],
                },
            ],
            form: {
                psd: "",
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
        };
    },
    methods: {
        openDialog() {
            this.$refs.dialog.show = true;
        },
        handleChange() {},
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
        height: calc(100% - 110px);
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
            .img {
                width: 60px;
                height: 60px;
                background: #ffffff;
                border: 1px solid #e1e6f0;
                opacity: 1;
                margin-right: 10px;
                .bs();
            }
            .add-img {
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
    /deep/.el-timeline-item__node--normal, /deep/.el-timeline-item__tail {
      top: 10px;
    }
}
</style>
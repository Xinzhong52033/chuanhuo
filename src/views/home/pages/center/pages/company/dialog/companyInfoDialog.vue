<template>
    <div class="companyInfoDialog">
        <FormDialog title="修改" ref="dialog" size="big" :showButtons='false'>
            <el-form ref="form" :model="form" label-position="left" label-width="100px" size="medium" class="demo-ruleForm">
                <div class="info-title">
                    <div class="square"></div>
                    <span>基础信息</span>
                    <el-button class="save" type="primary" plain size="mini"  style="">保存</el-button>
                </div>
                <el-form-item label="商品图" class="avaterItem" style="width: 100%">
                    <img class="img" src="@/assets/img/goods1.jpg" alt="">
                    <el-button type="danger" plain size="mini">更换图片</el-button>
                    <span class="tips">注：支持jpg、png、jpeg、bmp格式，大小不超过5M。</span>
                </el-form-item>
                <el-form-item label="公司名称">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="所属园区">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="公司地址">
                    <el-cascader clearable="" v-model="value" style="width:35%;margin-right: 20px" :options="options2" @change="handleChange"></el-cascader>
                    <el-input v-model="form.psd" style="width: 35%" placeholder="请填写详细地址"></el-input>
                </el-form-item>
                <el-form-item label="主营产品">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="主营行业">
                    <el-select v-model="value" placeholder="请选择" style="width: 35%">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="value">
                    </el-input>
                </el-form-item>
                <el-form-item label="场景图" class="imgrow avaterItem">
                        <img class="img" src="@/assets/img/cm01.png" alt="">
                        <img class="img" src="@/assets/img/cm02.png" alt="">
                        <img class="img" src="@/assets/img/cm03.png" alt="">
                        <span class="img add-img ">
                            <i class="el-icon-plus"></i>
                        </span>
                        <span class="tips">注：最多可选4张图片，支持jpg、png、jpeg、bmp格式，大小不超过5M。</span>
                    </el-form-item>
                    <div class="info-title">
                    <div class="square"></div>
                    <span>联系方式</span>
                    <el-button class="save" type="primary" plain size="mini" >保存</el-button>

                </div>
                <el-form-item label="联系人">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <div class="info-title">
                    <div class="square"></div>
                    <span>工商信息</span>
                    <span class="tips">
                            注：工商信息修改之后需要重新审核
                    </span>
                    <el-button class="save" type="primary" plain size="mini" >保存</el-button>

                </div>
                <el-form-item label="企业注册名称" :label-width="180*$widthCoefficient+'px'">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="法人代表"  :label-width="180*$widthCoefficient+'px'">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="注册资本(万元)"  :label-width="180*$widthCoefficient+'px'">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="成立日期"  :label-width="180*$widthCoefficient+'px'">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="税号/统一社会信用代码"  :label-width="180*$widthCoefficient+'px'">
                    <el-input v-model="form.psd" style="width: 35%"></el-input>
                </el-form-item>
                <el-form-item label="场景图" class="avaterItem license"  :label-width="180*$widthCoefficient+'px'">
                        <img class="img" src="@/assets/img/zz.jpg" alt="">
                        <el-button type="danger" plain size="mini">更换图片</el-button>
                        <span class="tips">注：最多可选4张图片，支持jpg、png、jpeg、bmp格式，大小不超过5M。</span>
                    </el-form-item>
            </el-form>
        </FormDialog>
    </div>
</template>

<script>
import FormDialog from "@/components/FormDialog.vue";
export default {
    name: "companyInfoDialog",
    components: {
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
.companyInfoDialog {
    .wh(100%, 100%);
    font-size: 16px;
    .save {
        margin-left: auto; margin-right: 10px; height: 24px;line-height: 8px
    }
    .tips {
            margin-left: 20px;
                font-size: 12px;
                color: @fc1;
                opacity: 0.7;
                font-weight: normal
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
        .img {
           width:80px;
                height: 60px;
                background: #ffffff;
                border: 1px solid #e1e6f0;
                opacity: 1;
                margin-right: 10px;
                .bs(); 
        }
        
    }
    .license {
       .img {
           width:100px;
                height: 140px;
                background: #ffffff;
                border: 1px solid #e1e6f0;
                opacity: 1;
                margin-right: 10px;
                .bs(); 
        } 
    }
    .form-dialog {
        /deep/.imgrow {
            .el-form-item__content {
                .flex();
                align-items: flex-end;
            }
            .img {
                width:80px;
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

        .el-form-item {
            width: 100%;
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
        .row-leftlabel {
            .el-form-item {
                width: 37%;
                &:not(:last-child) {
                    margin-right: 50px;
                }
            }
        }
    }
}
</style>
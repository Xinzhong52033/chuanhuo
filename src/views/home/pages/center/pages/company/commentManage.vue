<template>
    <div class="commentManage">
        <div class="table">
            <DataTable :height="700*$widthCoefficient" style="width: 100%" :columns="tableColumns" :border="true" :data="list.items" :total="list.total">
                <template slot="option" slot-scope="{ row }">
                </template>
            </DataTable>
        </div>
    </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
let $widthCoefficient =  document.documentElement.clientWidth / 1920;
const tableColumns = [
    {
        title: "编号",
        align: "center",
        name: "index",
        width: 50*$widthCoefficient+"px",
        showOverflow: true,
    },
    {
        title: "评论时间",
        align: "center",
        name: "time",
         width: 100*$widthCoefficient+"px",
        showOverflow: false,
    },
    {
        title: "用户名",
        align: "center",
        name: "userName",
        width: 100*$widthCoefficient+"px",
        showOverflow: true,
    },
    {
        title: "联系电话",
        align: "center",
        name: "phone",
        width: 120*$widthCoefficient+"px",
        showOverflow: false,
    },
    {
        title: "评论内容",
        align: "center",
        name: "content",
        showOverflow: true,
    },
    {
        title: "评论内容",
        align: "center",
        name: "huifu",
        showOverflow: true,
    },
    {
        title: "操作",
        align: "center",
        name: "opration",
        showOverflow: true,
    },
    
];
export default {
    components: { DataTable, },
    name: "commentManage",
    data() {
        return {
            form: {},
            list: {
                total: 11,
                currentPage: 1,
                pageSize: 10,
                items: [
                    {
                        index: '01',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '02',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '03',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '04',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '05',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '再次回复'
                    },
                    {
                        index: '06',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '07',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '再次回复'
                    },
                    {
                        index: '08',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '03',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '04',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '05',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '再次回复'
                    },
                    {
                        index: '06',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    },
                    {
                        index: '07',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '焦炭质量一般般，公司提供发票吗？',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '再次回复'
                    },
                    {
                        index: '08',
                        userName: "张强",
                        content: '焦炭质量一般般，公司提供发票吗？',
                        huifu: '',
                        phone: "15601475874",
                        time: "2020-05-05 12:00:00",
                        opration: '回复'
                    }
                ],
            },
            tableColumns,
            currentPage: 1,
            pageSize: 10,
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
}
</style>
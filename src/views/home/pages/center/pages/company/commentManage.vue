<template>
    <div class="commentManage">
        <div class="table">
            <DataTable style="width: 100%" :columns="tableColumns" :border="true" :data="list.items" :total="list.total">
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
        type: "index",
        width: 60*$widthCoefficient+"px",
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
        width: 120*$widthCoefficient+"px",
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
.commentManage {
    .wh(100%, 100%);
    .bs();
    .avatar {
            .wh(60px, 60px);
            border-radius: 50%;
        }
    .psd {
        margin-top: 30px;
        .detail(150px, 46px);
    }
    .table {
        height: 100%;
        /deep/.data-table {
            height: 100%;
        }
    }
}
</style>
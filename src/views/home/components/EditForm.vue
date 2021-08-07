<template>
    <form-dialog
            :visible.sync="visible"
            :title="row.customsBuyerNameEn ? row.customsBuyerNameEn : '修改'"
            :customWidth="true"
            :showButtons="false"
            @close="handleDialogClose"
            class="edit-form"
            :appendToBody='true'
        >
        <div class="search">
            <el-input v-model="formData.keyWord" placeholder="请输入企业名"></el-input>
            <el-button type="primary" size="mini" @click="sure">确定</el-button>
        </div>
        <data-table
            v-loading="loading"
            :columns="tableColumns"
            :data="list.items"
            :total="list.total"
            :page-size="list.pagesize"
            :current-page="list.currentPage"
            @page-size-change="handlePageSizeChange"
            @page-change="handlePageChange">
                <template slot="action" slot-scope="{row}">
                    <!-- <el-checkbox @change="typeChange($event,row)"></el-checkbox> -->
                    <el-button type="text" @click="typeChange(row)">确认</el-button>
                </template>
                <template slot="company_name_cn" slot-scope="{row}">
                    <div :class="{'green':row.company_name_cn == cname}">{{row.company_name_cn}}</div>
                </template>
        </data-table>
    </form-dialog>
</template>

<script>
import FormDialog from "@/components/FormDialog";
import DataTable from '@/components/DataTable.vue';
import { changeName,findbykeyword } from '@/utils/api.js';

const tableColumns = [
    { title: '关联企业变更名（EN）', name: 'company_name_en',showOverflow:true },
    { title: '关联企业中文名（CN）', name: '__slot:company_name_cn',showOverflow:true },
    { title: '操作', width:'80px',name:'__slot:action'}
];
export default {
  name: "EditForm",
  components: {
    DataTable,
    FormDialog
  },

  data() {
    return {
        checked:false,
        loading:false,
        visible:false,
        tableColumns,
        list:{
            currentPage:1,
            items:[],
            pageSize:10,
            total:0
        },
        formData:{
            keyWord:'',
            currentPage:1,
            pageSize:10,
        },
        row:{
            customsBuyerNameEn:''
        },
        cname:''
    };
  },
  methods: {
    async show(row,search,c) {
      this.loading = true
      this.visible = true;
      this.cname = c;
      console.log(search,'-----',c,'**********');
    //   this.formData.keyWord = row.customsBuyerNameEn;
      this.formData.keyWord = search;
      this.formData.currentPage = 1;

      this.row = _.clone(row);
      await this.findbykeywordfun();
      this.loading = false;
    },
    handlePageSizeChange(pagesize){
        this.formData.pageSize = pagesize;
        this.findbykeywordfun();
    },
    handlePageChange(page){
        this.formData.currentPage = page;
        this.findbykeywordfun();
    },
    sure(){
        this.formData.currentPage = 1;
        this.$emit('search',this.formData.keyWord);
        this.findbykeywordfun();
    },
    async findbykeywordfun(){
        let temp = await findbykeyword(this.formData);
        this.list = _.clone(temp.data);
        this.list.items = temp.data.items.map(item => {
            item.company_name_cn = item._source.company_name_cn;
            item.company_name_en = item._source.company_name_en;
            return item;
        });
    },
    typeChange(row){
        let msg = '此操作将确认关联企业中文名和英文名, 是否继续?';
        this.$confirm(msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async () => {
                console.log(row.company_name_cn,'++++++++++++++');
                this.$emit('cnName',row.company_name_cn)
                let temp = await changeName({'incrId':this.row.incrId,'isNameMatched':1,'companyNameEn':row.company_name_en,'companyNameCn':row.company_name_cn});
                if(temp.code == 200){
                    this.visible = false;
                    this.$emit('updateSuc')
                }
            })
    },
    handleDialogClose(){}
  },
};
</script>

<style lang="less" scoped>
.green{
    color: 67C23A;
}
.edit-form{
    .search{
        .flex(flex-start);
        .el-button{
            margin-left: 10px;
        }
    }
    .data-table{
        height: 500px;
    }
}
</style>
<template>
  <div class="table-form">
    <div class="table-form-title" v-if="istitle">
      <span :style="{'width':`${width}`,'text-align':'right'}"><i v-if="required" style="color: red">*</i>{{ title }}：</span>
      <el-button @click="addTableItem" type="primary" size="mini">添加</el-button >
    </div>
    <el-form
      :model="addJsonForm"
      ref="form"
      :rules="tableRules"
      :inline="true"
      label-width="108px"
    >
      <el-table :data="addJsonForm.params" style="width: 100%" border>
        <template v-for="(item, index) in tableData">
          <el-table-column :key="index" :label="item.label" v-if="item.slot">
            <template slot-scope="scope">
              <el-form-item
                :prop="'params.' + scope.$index + '.' + item.name"
                :rules="tableRules[item.name]"
              >
                <slot
                  :row="scope.row"
                  :name="item.name.replace('__slot:', '')"
                ></slot>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column 
          :key="index" 
          :label="item.label"
          :width="item.width ? item.width : ''"
           v-else-if="item.type"  type="index">
<!--            <template>-->
<!--              <el-form-item>-->
<!--&lt;!&ndash;                <div>{{addJsonForm.params}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div>{{addJsonForm.params.length}}</div>&ndash;&gt;-->
<!--                <span>{{addJsonForm.params.length}}</span>-->
<!--&lt;!&ndash;                <span>{{index + 1 }}</span>&ndash;&gt;-->
<!--              </el-form-item>-->
<!--            </template>-->

          </el-table-column>
          <el-table-column
            :key="index"
            :label="item.label"
            :width="item.width ? item.width : ''"
            v-else-if="item.remove"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'params.' + scope.$index + '.' + item.name"
                :rules="tableRules[item.name]"
              >
                <el-button
                  type="danger"
                  size="mini"
                  @click="remove(scope.$index)"
                  >删除</el-button
                >
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            :key="index"
            :label="item.label"
            :width="item.width ? item.width : ''"
            v-else-if="item.inputType && item.inputType == 'select'"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'params.' + scope.$index + '.' + item.name"
                :rules="tableRules[item.name]"
              >
                <el-select v-model="scope.row[item.name]">
                  <el-option
                    v-for="pre in item.value"
                    :key="pre.value"
                    :label="pre.label"
                    :value="pre.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            :key="index"
            :label="item.label"
            :width="item.width ? item.width : ''"
            v-else-if="item.inputType && item.inputType == 'string'"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'params.' + scope.$index + '.' + item.name"
                :rules="tableRules[item.name]"
              >
              <el-input v-model="scope.row[item.name]" :placeholder="item.placeholder"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-form>
  </div>
</template>
<script>
import clone from "lodash/clone";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    list:{
      type:Array,
      default(){
        return []
      }
    },
    tableRules: {
      type: Object,
      default() {
        return {};
      },
    },
    width: {
      type: String,
      default: "100px",
    },
    required: {
      type: Boolean,
      default: false,
    },
    istitle:{
      type:Boolean,
      default:true
    },
      typeName:{
          type:String
      },
  },
  watch: {
    tableData(val) {
      this.initData();
    },
    list(val){
      this.addJsonForm.params = val;
    }
  },

  data() {
    return {
      addJsonForm: {
        params: [],
      },
      preData: {},
    };
  },
  async created() {
    await this.initData();
  },
  methods: {
    addTableItem() {
      let str = clone(this.preData);
      console.log(this.preData);
      for (let key in str) {
        str[key] = "";
      }
      if(this.typeName=='isAddLength') {
          if(this.addJsonForm.params.length > 9) {
              this.$message({
                  message: '亲，你添加的数据过多了！',
                  type: 'warning'
              });
              console.log(10);
          }else {
              this.addJsonForm.params.push(str);
          }
      }else {
          this.addJsonForm.params.push(str);
      }
    },
    remove(index) {
      this.addJsonForm.params.splice(index, 1);
    },
    async submit() {
      try {
        const valid = await this.$refs.form.validate();
        if (valid) {
          this.$emit("submit", this.addJsonForm.params);
          return valid
        }
      } catch (error) {
        this.$emit("submit", []);
        return error
      }
    },
    async initData() {
      this.preData = {};
      this.addJsonForm.params = [];
      if(this.list && this.list.length > 0){
        this.addJsonForm.params = this.list;
      }

      this.tableData.map((item, index) => {
        this.preData[item.name] = "";
      });
    },
  },
};
</script>
<style lang="less" scoped>
.table-form {
  .table-form-title {
    margin: 10px 0;
    > span {
      display: inline-block;
      font-size: 14px;
    }
  }
  /deep/.el-table{
    thead th{
      background: #F7F9FC;
    }
  }
}
</style>


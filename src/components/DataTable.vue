<template>
  <div class="data-table">
<!-- 插槽头部标题 -->
    <slot name="toolbar" v-if="showToolbar"></slot>
    <el-table
      :data="data"
      :row-style="rowStyle"
      :border="border"
      :stripe="stripe"
      :height="height"
      :size="size"
      :highlight-current-row="highlightCurrentRow"
      @current-change="handleCurrentChange"
      @row-click="handleRowClick">
      <template v-for="(column, index) in columns">
        <el-table-column
          :key="column.key ? (column.key + index) : index"
          :type="column.type"
          :prop="column.name"
          :fixed="column.fixed"
          :label="column.title"
          :width="column.width"
          :align="column.align"
          :show-overflow-tooltip="column.showOverflow"
          v-if="column.name && column.name.startsWith('__slot:')">
          <template slot-scope="scope">
            <slot :row="scope.row" :name="column.name.replace('__slot:', '')"></slot>
          </template>
        </el-table-column>
        <el-table-column
          :key="index"
          :render-header="column.renderHeader"
          :type="column.type"
          :prop="column.name"
          :fixed="column.fixed"
          :label="column.title"
          :width="column.width"
          :align="column.align"
          :show-overflow-tooltip="column.showOverflow"
          v-else
        >
        </el-table-column>
      </template>
    </el-table>

    <!-- 底部分页和其他内容是否显示 -->
    <div class="bottom-bar" v-if="showBottomBar">
      <div class="left">
        <slot name="bottom-left-bar"></slot>
      </div>
      <div class="right">
        <el-pagination
          background
          :small="paginationSmall"
          layout="total,sizes,prev, pager, next"
          :pager-count="pagerCount"
          :total="total"
          :height="height"
          :page-size="pageSize"
          :current-page="currentPage"
          @size-change="$emit('page-size-change', $event)"
          @current-change="$emit('page-change', $event)"
          @prev-click="$emit('page-change', $event)"
          @next-click="$emit('page-change', $event)"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DataTable',

    props: {
      columns: {
        type: Array,
        default () { return [] }
      },

      data: {
        type: Array,
        default () { return [] }
      },

      border: {
        // 显示所有td边框
        type: Boolean,
        default: true
      },

      stripe: {
        type: Boolean,
        default: false
      },

      height:{
        type: String,
        default: '100%'
      },
      size: {
        default:'normal'
      },

      highlightCurrentRow: {
        type: Boolean,
        default: false
      },
      // 是否显示footer部分
      showBottomBar: {
        type: Boolean,
        default:  true
      },

      total: {
        type: Number,
        default: 0
      },

      pageSize: {
        type: Number,
        default: 10
      },

      currentPage: {
        type: Number,
        default: 1
      },

      pagerCount: {
        type: Number,
        default: 7
      },
      rowStyle: {
        type:Function,
      },
      rowClick: {
        type: Boolean,
        default: false
      },
      // 是否显示header部分
      showToolbar: {
        type: Boolean,
        default: true
      },
      // 取消table flex 1 属性
      notFlex: {
        type: Boolean,
        default: false
      },
      // 隐藏header
      hiddenHeader: {
        type: Boolean,
        default: false
      },
      // 分页组建大小
      paginationSmall: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      handleCurrentChange (currentRow, oldCurrentRow) {
        this.$emit('current-change', currentRow, oldCurrentRow)
      },

      handleRowClick (row, column, event) {
        if (this.rowClick) {
          this.$emit('row-click', row)
        }
      },

      indexMethod (index) {
        return index + 1 + (this.currentPage - 1) * this.pageSize
      },
    },
    mounted(){
    }
  }
</script>

<style lang="less">
  .data-table {
    // margin-top: 20px;
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /*滚动条样式*/
    //   .el-table__body-wrapper.is-scrolling-none::-webkit-scrollbar {/*滚动条整体样式*/
    //       width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    //       height: 10px;
    //   }
    //   .el-table__body-wrapper.is-scrolling-none::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    //       border-radius: 5px;
    //       box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    //       background: #004980;
    //   }
    //   .el-table__body-wrapper.is-scrolling-none::-webkit-scrollbar-track {/*滚动条里面轨道*/
    //       box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
    //       border:0;
    //       border-radius: 0;
    //       background:#002965;
    //   }
    .el-table {
      width: 100%;
      height: 100%;
      // background: transparent !important;
      &::before {
          background-color: transparent;
      }
      .has-gutter{
        tr{
          th{
            background: #F7F9FC;
            color: #9EA9B8;
            // border: 1px solid transparent;
            line-height:35px;
          }
        }
      }
      .el-table__row {
        color: @fc;
        // font-size: 14px;
        td{
          // border: none;
          padding: 10px 0;
        }
      }
      tr.el-table__row--striped {
        td {
            background: #F7F9FC;
        }
      }
    }

    .bottom-bar {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
  }
</style>

<template>
  <div class="pagenation">
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
</template>

<script>
  export default {
    name: 'pagenation',

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
        default: false
      },

      stripe: {
        type: Boolean,
        default: false
      },

      height: {
        // type: Number,
        default:200
      },

      highlightCurrentRow: {
        type: Boolean,
        default: false
      },
      // 是否显示footer部分
      showBottomBar: {
        type: Boolean,
        default: true
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
  .pagenation {
  }
</style>

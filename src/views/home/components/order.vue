<template>
<div class="order">
    <div @click="selectSort('1')" :class="select.sort == '1' || select.sort == '0'?'select':''">
        {{orderType[0]}}
    </div>
    <div @click="selectSort('2')" :class="select.sort == '2' ||select.sort == '3'?'select':''">
        {{orderType[1]}} <i :class="[{'el-icon-caret-bottom':select.sort==3,'el-icon-caret-top':select.sort==2,'el-icon-d-caret':select.sort==1||select.sort==4||select.sort==5}]"></i>
    </div>
    <div @click="selectSort('4')" :class="select.sort == 4 ||select.sort == 5?'select':''">
        {{orderType[2]}} <i :class="[{'el-icon-caret-bottom':select.sort==5,'el-icon-caret-top':select.sort==4,'el-icon-d-caret':select.sort==1||select.sort==2||select.sort==3}]"></i>
    </div>
</div>  
</template>

<script>
export default {
    name: 'order',
    props: {
        orderType: {
            type: Array,
            default: () => {}
        },
        select: {
            type: Object,
            default: () => {}
        }
    },  
    data () {
        return {
            // select.sort: 1,
        }
    },
    methods: {
      selectSort(type) {
          if (type == 1) {
              this.select.sort = '1'
          } else if (type == 2) {
              if (this.select.sort == 2) {
                  this.select.sort = '3'
              } else {
                  this.select.sort = '2'
              } 
          } else if (type == 4) {
              if (this.select.sort == 4) {
                  this.select.sort = '5'
              } else {
                  this.select.sort = '4'
              } 
          }
        this.$emit('selectOrder')    
      } 
      
    }

}
</script>

<style lang="less">
.order {
    .wh(374px, 42px);
    .bs();
    .flex();
    div {
        height: 41px;
        flex: 1;
        line-height: 41px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #7A8BA6;
        .bs();
        &:not(:last-child) {
            border-right: none;
        }
        &:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        &:nth-child(2) {
            border-radius: 0;
        }
        &:nth-child(3) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        cursor: pointer;
        &:hover {
             background-color: #7A8BA6;
             color: #fff
        }
    }
    .select {
        background-color: #7A8BA6;
        color: #fff
    }
}

</style>
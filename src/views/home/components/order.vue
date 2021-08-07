<template>
<div class="order">
    <div @click="select(1)" :class="selected == 1?'select':''">
        {{orderType[0]}}
    </div>
    <div @click="select(2)" :class="selected == 2 ||select == 3?'select':''">
        {{orderType[1]}} <i :class="[{'el-icon-caret-bottom':selected==2,'el-icon-caret-top':selected==3,'el-icon-d-caret':selected==1||selected==4||selected==5}]"></i>
    </div>
    <div @click="select(4)" :class="selected == 4 ||selected == 5?'select':''">
        {{orderType[2]}} <i :class="[{'el-icon-caret-bottom':selected==4,'el-icon-caret-top':selected==5,'el-icon-d-caret':selected==1||selected==2||selected==3}]"></i>
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
        }
    },  
    data () {
        return {
            selected: 1,
        }
    },
    methods: {
      select(type) {
          if (type == 1) {
              this.selected = 1
          } else if (type == 2) {
              if (this.selected == 2) {
                  this.selected = 3
              } else {
                  this.selected = 2
              } 
          } else if (type == 4) {
              if (this.selected == 4) {
                  this.selected = 5
              } else {
                  this.selected = 4
              } 
          }
      }   
    }

}
</script>

<style lang="less">
.order {
    .wh(374px, 42px);
    border: 1px solid #7A8BA6;
    border-radius: 3px;
    .bs();
    .flex();
    div {
        height: 42px;
        flex: 1;
        line-height: 42px;
        text-align: center;
        &:not(:last-child) {
            border-right: 1px solid #7A8BA6;
            .bs();
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
<template>
  <div class="leftMenu">
    <el-menu
      default-active="农副"
      class="el-menu-vertical-demo"
    >
      <el-menu-item v-for="(item, index) in menuList" @click="selectItem(item)" :key="item.name" :index="item.name">
        <span class="ball"></span>
        <span class="item">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  props: {
      menuList: {
          type: Array,
          default: () => []
      }
  },
  data() {
    return {
      select1: '',
    };
  },
  methods: {
      select(index) {
          this.$emit('select', index)
      },
      selectItem(item) {
        this.$emit('selectItem', item)
      },
  }
};
</script>

<style lang="less" scoped>
.leftMenu {
    box-sizing: border-box;
    // border-top: 1px solid #E1E6F0;
    .ball {
      display: inline-block;
      .wh(8px, 8px);
      background-image: linear-gradient(to left, #ffffff, #3860f4);
      border-radius: 50%;
      margin-right: 10px;
      position: absolute;
      .ctt();
      left: 15%; 
      opacity: 0.5 ;
    }
    /deep/.el-menu-item {
        position: relative;
        text-align: center;
        border: 1px solid #E1E6F0;
        border-top: none;
        border-right: none;
        box-sizing: border-box;
        height: 64px;
        line-height: 64px;
        font-size: 16px;
        &:first-child {
            border-top: 1px solid #E1E6F0;
        }
    }
    /deep/.el-menu-item.is-active {
        border-right: 2px solid @blue;
        background-image: linear-gradient(to right, #F9FAFF, #f3f5fe);;
        .ball {
            opacity: 1;
        }
    }
}
</style>
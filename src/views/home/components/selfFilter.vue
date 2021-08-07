<template>
  <div class="selfFilter">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="inner" :class="!item.state?'inner-hide':'inner-show'" ref="inner">
          <span>{{ item.classification }}:</span>
          <div class="items" :ref="`items${item.classification}`">
            <span class="item"  :class="item.select==v?'selected':''" v-for="(v, i) in item.items" :key="i"  @click="select(item, v)">{{
              v
            }}</span>
          </div>
          <span v-if="item.stateChange" class="more" @click="item.stateChange?item.state = !item.state : ''">{{ item.state ? "收起" : "更多" }}<i :class="item.state ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "selfFilter",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.checkHight();
  },
  methods: {
    select (item, v) {
        item.select = v
    },
    checkHight() {
      this.$nextTick(() => {
        this.list.forEach((e) => {
          // 或取每一行的高度
          var height = this.$refs[`items${e.classification}`][0].offsetHeight;
          e.stateChange =
            this.$refs[`items${e.classification}`][0].offsetHeight >
            this.$refs.inner[0].offsetHeight
              ? true
              : false;
          e.state = false
        });
      });
    },
  },
};
</script>

<style lang="less">
.selfFilter {
  .wh(100%, 100%);
  ul {
    li {
      &:not(:last-child) {
        border-bottom: 1px dashed #E1E6F0;
      }
      .bs();
      .inner {
        position: relative;
        padding-right: 50px;
        .flex();
        span {
          height: 62.5px;
          line-height: 62.5px;
          width: 100px;
          color: @black;  
          flex-shrink: 0;
          flex-grow: 0; 
        }
        .items {
          span {
            padding: 0 10px;
            margin-right: 30px;
            .bs();
            cursor: pointer;
          }
          .selected {
              color: @blue;
              padding: 3px 10px;
              background-color: #EAEFFE;
              border-radius: 3px;
          }
        }
        .more {
          width:auto;
          position: absolute;
          right: 0px;
          padding: 0;
          font-size: 12px;
          cursor: pointer;
          &:hover {
              color:@blue
          }
        }
      }
      .innder-show {
          height: auto;
      }
      .inner-hide {
        height: 62.5px;
        overflow: hidden;
      }
    }
  }
}
</style>
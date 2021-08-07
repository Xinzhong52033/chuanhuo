<template>
  <div class="ul-table-container-detail-show-container">
    <div v-if="labelData.title" class="ul-table-container-detail-title">
      {{ labelData.title }}
    </div>
    <ul
      class="ul-table-container-detail-show"
      :style="
        (fontSize ? `font-size: ${fontSize};` : '') +
        (labelData.title ? '' : 'padding-top: 0;')
      "
    >
      <template v-if="labelData && labelData.info">
        <li
          v-for="(items, index) in labelData.info"
          :key="index"
          :class="liClass(items)"
          :style="
            (items.minHeight ? `min-height: ${items.minHeight};` : '') +
            (items.marginTop ? `margin-top: ${items.marginTop};` : '')
          "
        >
          <template v-for="(item, idx) in items.info">
            <div
              v-if="items.info && items.info.length"
              :key="`w${idx}`"
              :class="{ 'li-item-first': idx < items.info.length - 1 }"
              :style="
                item.width
                  ? { width: item.width }
                  : items.info.length === 1
                  ? { width: '100%' }
                  : {}
              "
            >
              <div
                class="li-item-name"
                :class="
                  labelData.labelPosition
                    ? `justify-content-${labelData.labelPosition}`
                    : ''
                "
                :style="
                  item.labelWidth
                    ? { width: item.labelWidth }
                    : labelData.labelWidth
                    ? { width: labelData.labelWidth }
                    : {}
                "
              >
                <i
                  v-if="item.essential"
                  style="color: #f56c6c; margin-right: 2px"
                  >*</i
                >
                <slot :name="item.labelSlot"></slot>
                {{ item.label }}{{ item.label ? "：" : "" }}
              </div>
              <div
                v-if="item.slot"
                class="li-item-content"
                :style="
                  item.labelWidth
                    ? { width: `calc(100% - ${item.labelWidth})` }
                    : labelData.labelWidth
                    ? { width: `calc(100% - ${labelData.labelWidth})` }
                    : {}
                "
              >
                <slot v-if="item.slot" :name="item.slot"></slot>
              </div>
              <div
                v-else
                class="li-item-content"
                :class="{ 'text-indent': item.textIndent }"
                :style="
                  item.labelWidth
                    ? { width: `calc(100% - ${item.labelWidth})` }
                    : labelData.labelWidth
                    ? { width: `calc(100% - ${labelData.labelWidth})` }
                    : {}
                "
              >
                {{ data[item.name] }}
              </div>
            </div>
          </template>

          <slot v-if="items.slot" :name="items.slot"></slot>
        </li>
      </template>

      <slot name="configData"></slot>
    </ul>
  </div>
</template>

<script>
/* *
 * data: 实时data {}
 * fontSize: 整体字体大小 默认 '14px'
 * labelData { 模版data
 *   labelWidth: label的宽度 默认 '34%' 配置为 固定形式: '具体的px宽度'时 info的labelWidth 尽量不配置
 *   labelPosition labelName的排列方式 'left'、'right'、默认 居中显示
 *   info [ 行数据
 *     {
 *       minHeight 每一行的最低高度
 *       title 标题
 *       titleStyle 标题的样式
 *       info [ 每一行的数据
 *         {
 *           label 显示的key
 *           name 对应的实时valve
 *           type 时间类型valve 'date' 表示 'YYYY-MM-DD' 'dateTime' 表示 'hh-mm' 'map' 表示这里使用的是地图 默认 ''
 *
 *           textIndent 布尔类型 首行缩进2em 默认 false
 *           width 该组数据的整体宽度
 *           labelWidth label的宽度 配置后 labelData的labelWidth 无效
 *           slot 对应的插槽name
 *         }
 *       ]
 *     }
 *   ]
 * }
 * configData 指定插槽名称 <template slot="configData"></template>
 */
export default {
  name: "UlLiDetail",

  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    labelData: {
      type: Object,
      default() {
        return {};
      },
    },
    fontSize: {
      type: String,
      default: "14px",
    },
  },

  computed: {},

  created() {},

  methods: {
    liClass(item) {
      let className = "";
      if (item.center) className = "li-item-title center";

      if (item.content) className = "li-item-title";

      if (item.info && item.info.length === 3) className = "li-three-content";

      if (item.info && item.info.length === 4) className = "li-four-content";

      if (this.contentBgShow) className += " padding-4-0";
      return className;
    },
  },
};
</script>

<style lang="less" scoped>
.ul-table-container-detail-show-container {
  background-color: transparent;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  font-size: 12px;
  .ul-table-container-detail-title {
    width: 100%;
    font-weight: bold;
    box-sizing: border-box;
    padding: 0 10px;
    border-left: 4px solid #409eff;
  }
  .ul-table-container-detail-show {
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    padding: 10px 0;
    > :last-child {
      border-bottom: 0;
    }
    li {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      // background-color: white;
      &:last-child {
        border-bottom: 0;
      }

      &.padding-4-0 {
        padding: 4px 10px 4px 0;
      }

      > div {
        width: 50%;
        display: flex;
        // align-items: center;
        .li-item-name {
          width: 20%;
          color: #9EA9B8;
          box-sizing: border-box;
          padding: 8px 0;
          display: flex;
          justify-content: center;
          text-align: right;
          &.justify-content-right {
            justify-content: flex-end;
          }
          &.justify-content-left {
            justify-content: flex-start;
          }
        }
        .li-item-content {
          width: 80%;
          // height: 100%;
          box-sizing: border-box;
          padding: 6.5px 4px;
          color: #0F1E31;
          word-break: break-all;
          text-align: left;
          line-height: 20px;
          &.text-indent {
            text-indent: 2em;
          }
          > img {
            width: 120px;
            height: auto;
          }
          .item-img {
            width: 50%;
            text-align: center;
            box-sizing: border-box;
            padding: 10px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 120px;
              max-height: 180px;
            }
          }
          .item-image {
            width: 120px;
            max-height: 180px;
            margin: 10px;
          }
          .file-item-span {
            margin-left: 5px;
            cursor: pointer;
            &:hover {
              color: #409eff;
            }
          }
        }
      }
    }
    .li-two-content {
      > div {
        width: 50%;
        box-sizing: border-box;
      }
    }
    .li-three-content {
      > div {
        width: calc(100% / 3);
        box-sizing: border-box;
      }
    }
    .li-four-content {
      > div {
        width: 25%;
        box-sizing: border-box;
      }
    }
  }
}
</style>
<template>
    <div class="selfFilter">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <div class="inner" :class="item.state?'inner-show':'inner-hide'" ref="inner">
                    <span class="title">{{ item.classification }}:</span>
                    <div class="items" :ref="`items${item.classification}`">
                        <span class="item" v-for="(v, i) in item.items" :key="i" @click="select(item, v)">
                            <span class="selectitems" :class="item.select==v?'selected':''">{{v}}</span>
                        </span>
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
        select(item, v) {
            item.select = v;
            this.$emit("selectlevelTwo");
        },
        checkHight() {
            // 首先恢复到最初状态
            this.list.forEach((item) => {
                item.stateChange = false;
                item.state = true;
            });
            this.$nextTick(() => {
                this.list.forEach((e) => {
                    // 或取每一行的高度
                    // var height =
                    //     this.$refs[`items${e.classification}`][0].offsetHeight;
                    // console.log(555, this.$refs)
                    e.stateChange =
                        this.$refs[`items${e.classification}`][0].offsetHeight >
                        64
                            ? true
                            : false;
                    e.state = false;
                });
            });
        },
    },
};
</script>

<style lang="less">
.selfFilter {
    .wh(100%, 100%);
    .title {
        width: 80px;
        margin-right: 10px;
    }
    ul {
        li {
            &:not(:last-child) {
                border-bottom: 1px dashed #e1e6f0;
            }
            .bs();
            .inner {
                position: relative;
                padding-right: 50px;
                .flex();
                span {
                    height: 62.5px;
                    line-height: 62.5px;
                    min-width: 60px;
                    color: @black;
                    flex-shrink: 0;
                    flex-grow: 0;
                }
                .items {
                    .flex();
                    flex-wrap: wrap;
                    align-items: center;
                    span {
                        padding: 0 10px;
                        // margin-right: 5px;
                        .bs();
                        cursor: pointer;
                    }
                    .selected {
                        color: @blue;
                        padding: 3px 10px;
                        background-color: #eaeffe;
                        border-radius: 3px;
                    }
                }
                .more {
                    width: auto;
                    position: absolute;
                    right: 0px;
                    padding: 0;
                    font-size: 12px;
                    cursor: pointer;
                    &:hover {
                        color: @blue;
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
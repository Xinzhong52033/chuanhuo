<template>
    <el-dialog :visible.sync="show" :title="title" :width="customWidth ? width : widthSize[size]" :fullscreen="fullscreen" :modal="modal" v-if='show' :close-on-click-modal="closeOnClickModal" :close-on-press-escape="closeOnPressEscape" :append-to-body="appendToBody" :show-close="showClose" @open="$emit('open')" @close="$emit('close')" @closed="$emit('closed')" ref="dialog" class="form-dialog">

        <slot></slot>

        <template slot="footer" v-if="showButtons">
            <div class="form-buttons">
                <el-button v-if="!hiddenSubmit" size="large" type="primary" @click="$emit('submit')">{{submitName}}</el-button>
                <el-button size="large" @click="show = false">{{clearName}}</el-button>
            </div>
        </template>
        <template slot="footer" v-if="!showButtons">
            <slot name="fotter"></slot>
        </template>
    </el-dialog>
</template>

<script>
let $widthCoefficient =  document.documentElement.clientWidth / 1920;
export default {
    name: "FormDialog",

    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: String,
        width: {
            type: String,
            default: "800px",
        },
        customWidth: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "medium",
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        modal: {
            type: Boolean,
            default: true,
        },
        appendToBody: {
            type: Boolean,
            default: false,
        },
        showButtons: {
            type: Boolean,
            default: true,
        },
        hiddenSubmit: {
            type: Boolean,
            default: false,
        },
        closeOnClickModal: {
            type: Boolean,
            default: false,
        },
        closeOnPressEscape: {
            type: Boolean,
            default: false,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
        submitName: {
            type: String,
            default: "确定",
        },
        clearName: {
            type: String,
            default: "取消",
        },
    },

    data() {
        return {
            show: false,
            widthSize: {
                big: 1200*$widthCoefficient+'px',
                medium: 800*$widthCoefficient+'px',
                small: 500*$widthCoefficient+'px',
                mini: 300*$widthCoefficient+'px',
            },
        };
    },

    watch: {
        visible(val) {
            this.show = val;
        },

        show(val, oldVal) {
            if (oldVal !== null && val !== oldVal) {
                this.$emit("update:visible", val);
            }
        },
    },
};
</script>
<style lang="less" scoped>
.form-dialog {
    /deep/.el-dialog {
        padding-bottom: 20px;
        border-radius: 6px 6px 0px 0px;
        .el-dialog__header {
            height: 70px;
            background: linear-gradient(90deg, #5f87f8 0%, #3860f4 100%);
            border-radius: 6px 6px 0px 0px;
            padding: 0 50px;
            .bs();
        }
        .el-dialog__title {
            font-size: 24px;
            color: #fff;
            line-height: 70px;
        }
        .dialog-title {
            font-size: 24px;
            color: #fff;
            line-height: 70px;
        }
        .el-dialog__body {
          padding: 30px 50px 0 50px;
        }
        .el-dialog__headerbtn {
            right: 50px;
            .wh(32px, 32px);
            border-radius: 50%;
            background: rgba(95, 135, 248, 1);
            .el-dialog__close {
                color: #fff;
                font-size: 24px;
            }
        }
        .form-buttons {
            text-align: center;
            .el-button {
                margin: 0 10px;
            }
        }
    }
}
</style>
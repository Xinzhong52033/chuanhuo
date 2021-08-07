<template>
  <div class="scroll-table" :style="{height:height}">
        <el-row class="th">
            <el-col v-for="(item,index) in colums" :key="`ss${index}`" :span="item.span">{{item.title}}</el-col>
        </el-row>
        <vue-seamless-scroll :data="tableData" :class-option="classOption" class="wrap">
            <el-row v-for="(item,index) in tableData" :key="index">
                <template v-for="(colum,m) in colums">
                    <el-col :span="colum.span" v-if="colum.name && colum.name.startsWith('__slot:')" :key="`ss${m}`">
                        <slot :row="item" :name="colum.name.replace('__slot:', '')"></slot>
                    </el-col>
                    <el-col :span="colum.span" :key="`ss${m}`" v-else>
                        <el-tooltip :content="item[colum.name]" placement="top">
                           <div :class="['cell',colum.class?colum.class:'']">{{item[colum.name]}}</div>
                        </el-tooltip>
                    </el-col>
                </template>
            </el-row>
        </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
    /**
     * 格式
     * colums[{
        span:2,  //宽度
        title:'速度（km/h）', 表头
        name:'speed',  字段名
        name:'__slot:status',//是否使用插槽
        class:'org'  增加class

    }]
    */
    props:{
        colums:{
            type:Array,
            default:()=>{return [{
                span:2,
                title:'',
                name:'a'
            }]}
        },
        tableData:{
            type:Array,
            default:()=>{return []}
        },
        step:{
            type:Number,
            default:0.4
        },
        limitMoveNum:{
            type:Number,
            default:0
        },
        height:{
            type:String,
            default:'100px'
        }
    },
    computed: {
        classOption(){
            return {
                step: this.step, //步长 越大滚动速度越快
                limitMoveNum: this.limitMoveNum > 0 ? this.limitMoveNum : this.tableData.length, //启动无缝滚动最小数据量 this.dataList.length
                hoverStop: true, //是否启用鼠标hover控制
                // direction: 1, //1 往上 0 往下
                openWatch: true, //开启data实时监听
                // singleHeight: 0, //单条数据高度有值hoverStop关闭
                // waitTime: 0 //单步停止等待时间
            }
        }
    }
}
</script>

<style lang="less" scoped>
.scroll-table{
    .th{
        height: 70px;
        .sc(22px,#fff);
        border-bottom: 1px solid #374049;
        .flex(center);
        align-items: center;
        .el-col{
            text-align: center;
            
        }
    }
    .wrap{
        height:calc(100% - 70px);
        overflow: hidden;
        .sc(20px,#9cabc6);
        font-family: "Microsoft YaHei Regular";
        .el-row{
            border-bottom: 1px dashed #374049;
        }
        .el-col{
            text-align: center;
            .lh(68px,68px);
            .cell{
                overflow: hidden;
                text-overflow:ellipsis; 
                white-space: nowrap;
            }
        }
    }
}
</style>
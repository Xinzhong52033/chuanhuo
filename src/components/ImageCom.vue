<template>
  <el-image class="image-com" fit="fill" :src="src">
    <div slot="error" class="image-none">
        出错了
    </div>
    <div slot="placeholder" class="image-none">
        <i class="el-icon-loading"></i>
    </div>
  </el-image>
</template>

<script>

export default {
    props:{
        src:{
            type:String,
            default:''
        }
    },
    data(){
        return{
        }
    },
    watch:{
       src(val){
       } 
    }
}
</script>

<style lang="less" scoped>
.image-com{
    .wh(100%,100%);
    .image-none{
        .wh(100%,100%);
        background: #F6F6F8;
        .flex(center);
        align-items: center;
        i{
            font-size: 0.4rem;
        }
    }
}
</style>
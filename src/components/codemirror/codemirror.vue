<template>
  <div class="vue-codemirror-wrap">
      <textarea></textarea>
  </div>
</template>

<script>
var CodeMirror = require('codemirror/lib/codemirror.js');
require('codemirror/lib/codemirror.css');

export default {
    props:{
        value:{
            type:String,
            default:''
        },
        options:{
            type:Object,
            default:function(){
                return {
                    mode:'text/javascript',
                    lineNumbers:true,
                    lineWrapping:true
                }
            }
        }
    },
    data(){
        return {
            skipNextChangeEvent:false
        }
    },
    ready:function(){}
}
</script>

<style>

</style>
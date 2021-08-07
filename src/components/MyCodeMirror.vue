<template>
<codemirror
  :value="code"
  :options="editorOption"
  :ref="`myEditor${uid}`"
  @change="handleChange">
</codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/vue/vue')

require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/show-hint.css')
require('codemirror/addon/hint/javascript-hint.js')

export default {
    components: {
        codemirror
    },
    data(){
        return{
            code:"{\n'name' : 'sdfds',\n 'test' : 'dsf'\n}",
            editorOption:{
                mode: 'javascript',
                extraKeys: {'Ctrl-Space': 'autocomplete'}
            }
        }
    },
    computed:{
        editor(){
            let name = `myEditor${this.uid}`
            return this.$refs[name].editor
        },
        uid(){
            return this._uid;
        }
    },
    mounted(){
        this.editor.focus();
    },
    methods:{
        handleChange(){}
    }
}
</script>

<style>

</style>
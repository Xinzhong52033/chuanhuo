<template>
    <div ref="myEchart" :style="{height:height,width:width}"></div>
</template>

<script>
export default {
  name: "echarts",
  data() {
    return {
      myChart:null
    };
  },
  props: {
    height: { type: String, default: "100%" },
    width: { type: String, default: "100%" },
    options: { type: Object, default: () => {}},
    mapData:{
      type:Object,
      default:()=>{}
    },
    mapName:{
      type:String,
      default:''
    }
  },
  computed: {
    myOptions: function() {
      return this.options || {};
    },
    myMapData: function() {
      return this.mapData || {};
    }
  },
  watch: {
      myOptions:{
        handler(newOpt){
           this.myChart.setOption(newOpt,true); 
        },
        deep:true
      },
      mapData: {
         handler(newOpt){
           this.initChart()
        },
        deep:true
      }
   },
  mounted() {
      this.$nextTick(()=>{
        this.initChart();
      })
  },
  methods: {
    initChart() {
      this.myChart = this.$echarts.init(this.$refs.myEchart);
      this.myChart.clear();
      if(this.mapName && this.mapData){
        this.$echarts.registerMap(this.mapName, this.mapData);
      }
      this.myChart.setOption(this.myOptions,true); 
      window.addEventListener("resize",()=>{
          this.myChart.resize();
      });
      this.myChart.on("mouseover",(params)=>{
        this.$emit('chartOver',params)
      })
      this.myChart.on("mouseout",(params)=>{
        this.$emit('chartOut',params)
      })
      this.myChart.on("click",(params)=>{
        this.$emit('chartClick',params)
      })
    }
  }
};
</script>

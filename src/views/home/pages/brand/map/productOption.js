import echarts from "echarts";
import scLine from '@/assets/json/sc_line.json';

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let $widthCoefficient =  document.documentElement.clientWidth / 1920;
let icon = `image://${require('@/assets/img/energeCompany.png')}`;
export const mapStatefun = ()=>{
    let mapName = 'sc'
    let data = [];
    let datas = [];
    for (let i = 0; i < scLine.features.length; i++) {
        data.push({
            name: scLine.features[i].properties.name,
            value: random(0,200),
        });
        datas.push({
            name: scLine.features[i].properties.name,
            value: [...scLine.features[i].properties.center,random(0,200)],
        })
    }
    var data_type_1 = [{
        type: "能源",
        name: "能源",
        value: [99.98712, 30.97906],
        info:'',
      },
      {
        type: "能源",
        name: "能源",
        value: [102.221374, 31.899792],
        info:'',
      },
      {
        type: "能源",
        name: "能源",
        value: [104.641917, 30.122211],
        info:'',
      },
      {
        type: "能源",
        name: "能源",
        value: [104.065735, 30.659462],
        info:'',
      },
      {
        type: "能源",
        name: "能源",
        value: [103.761263, 29.582024],
        info:'',
      },
      {
        type: "能源",
        name: "能源",
        value: [101.963815, 30.050663],
        info:'',
      },
      

    ];

    let option = {
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 200,
        //     itemWidth:13,
        //     textStyle:{
        //         color:'#fff'
        //     },
        //     left: '2%',
        //     top: 'bottom',
        //     calculable: true,
        //     seriesIndex: [1],
        //     inRange: {
        //         color: ['#0b76e3', '#00eaff']
        //     }
        // },
        tooltip: {
            trigger: 'item'
        },
        geo: {
            show: true,
            map: mapName,
            zoom:1.1,
            aspectScale: 1, 
            label: {
                normal: {
                    show: true,
                    fontSize: 14*$widthCoefficient,
                    color: '#666',
                },
                emphasis: {
                    show: true,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#4396ED'
                                        }, {
                                            offset: 1,
                                            color: '#4396ED'
                                        }], false),
                    borderWidth: 2,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                            {
                                offset: 1,
                                color: '#3b62f4', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: '#f3f8ff', // 100% 处的颜色
                            },
                            {
                                offset: 0,
                                color: '#f3f8ff', // 100% 处的颜色
                            },
                        ],
                        globalCoord: true, // 缺省为 false
                    },
                    shadowColor: 'rgba(81,143,255,0.4)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 14,
                    opacity: 1,
                    shadowBlur: 8,
                },
                emphasis: {
                }
            }
        },
        series: [
            {
                name: '能源',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data_type_1,
                symbol: icon,
                symbolSize: [22, 22],
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                tooltip: {
                    position:'right',
                    extraCssText:`width:${300*$widthCoefficient}px;background:transparent;border:2px solid #25CBF2; border: none; padding:none;white-space:pre-wrap;`,
                    formatter(param) {
                        return `<div class="tooltip"><div class="tooltip-title">攀钢集团金钛钛业有限公司</div><div class="info"><div class="name">名优品牌：</div><div class="value">钛白粉、钛冶炼、海绵钛氯化法钛白、钛白产品</div></div><div class="info">
                          <div class="name">联系人：</div>
                          <div class="value">王海洋</div>
                        </div><div class="info">
                          <div class="name">联系方式：</div>
                          <div class="value">0812256879</div>
                        </div><div class="info">
                          <div class="name">联系地址：</div>
                          <div class="value">攀枝花市金沙江大道东段1491号</div>
                        </div></div>`
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                },
                
            
            },
            {   
                type: 'map',
                map: mapName,
                geoIndex: 5,
                zoom: 1.1,
                roam: false,
                aspectScale: 1, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        fontSize: 14*$widthCoefficient,
                        show: true,
                        color: '#999'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#555'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                    areaColor:'#f3f8ff',
                      borderWidth:1,
                      borderColor: 'rgba(102, 145, 246, 0.5)',
                    },
                    emphasis: {
                        areaColor:'#f3f8ff', 
                        color: "#333", 
                    }
                  },
                animation: false,
                data: scLine,
                tooltip: {
                    show: false
                }
            },
            
        ],
        
    };
    return option;
}

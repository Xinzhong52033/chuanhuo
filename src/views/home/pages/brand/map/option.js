import echarts from "echarts";
import scLine from '@/assets/json/sc_line.json';
import sc from '@/assets/json/sc.json';
echarts.registerMap('sc_outline',sc);
let $widthCoefficient =  document.documentElement.clientWidth / 1920;
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let icon = `image://${require('@/assets/img/brandLoaction.png')}`;
export const mapStatefun = ()=>{
    let mapName = 'sc'
    let data = [];
    let datas = [];
    // let scatterData = [];
    for (let i = 0; i < scLine.features.length; i++) {
        data.push({
            name: scLine.features[i].properties.name,
            adcode: scLine.features[i].properties.adcode,
            value: random(0,200),
        });
        datas.push({
            name: scLine.features[i].properties.name,
            value: [...scLine.features[i].properties.center,random(0,200)],
        });
        // scatterData.push({
        //     name: scLine.features[i].properties.name+'馆',
        //     value: scLine.features[i].properties.centroid,
        //     adcode: scLine.features[i].properties.adcode,
        // })
    }
    var scatterData = [
        {
            type: "能源",
            name: "成都馆",
            value: [103.931804, 30.652329],
            adcode: 510100
        },
        {
            type: "能源",
            name: "攀枝花馆",
            value: [101.625394, 26.755869],
            adcode: 510400
        },
    ];

    let option = {
        tooltip: {
            trigger: 'item'
        },
        geo: {
            show: true,
            map: 'sc_outline',
            zoom:1.1,
            aspectScale: 1,
            roam: true,
            label: {
                normal: {
                    show: true,
                    fontSize: 15*$widthCoefficient,
                    color: '#aaabad',
                },
                emphasis: {
                    show: true,
                    color: '#777',
                    fontSize: 15*$widthCoefficient, 
                }
            },
             layoutSize: "100%",
            roam: false,
            itemStyle: {
                normal: {
                    // areaColor: '#e5edfe',
                    // // borderColor: '#6186e9',
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
                    areaColor: '#fbb920',
                    color: 'transparent'
                }
            }
        },
        series: [
            {   
                // zlevel: 100000,
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
//                       areaColor: {
//                         type: 'linear',
//                         x: 0.2,
//                         y: 0.8,
//                         r: 0.8,
//                         colorStops: [{
//                             offset: 0,
//                             color: '#9AC2FF' // 0% 处的颜色
//                         },{
//                             offset: 0.5,
//                             color: '#9AC2FF' // 0% 处的颜色
//                         },
//                          {
//                             offset: 1,
//                             color: '#BDD5FF'  // 100% 处的颜色
//                         }],
//                         globalCoord: true // 缺省为 false
//                         },
                      borderWidth:1,
                      borderColor: 'rgba(102, 145, 246, 0.5)',
                    //   borderColor: 'rgba(243, 248, 255, 1)',
                    },
                    emphasis: {
                        areaColor:'rgba(251, 185, 32, 0.9)', 
                        color: "#333", 
                    }
                  },
                animation: false,
                data: [],
                tooltip: {
                    show: false
                }
            },
            {
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: scatterData,
                symbol: icon,
                symbolSize: [30*$widthCoefficient, 30*$widthCoefficient],
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
                itemStyle: {
                    normal: {
                        color: '#fff'   
                    }
                },
                zlevel: 3,
                tooltip: {
                    show: false
                }
            },
            {
                name: '散点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: scatterData,
                symbol: 'circle',
                symbolSize: [30*$widthCoefficient, 30*$widthCoefficient],
                // legendHoverLink: true,
                effectType: 'ripple',
                showEffectOn:'hover',
                cursor: 'pointer',
                rippleEffect: {
                    color: '#fbb920',
                    period:5,
                    scale:5,
                    brushType:'fill'
                },
                label: {
                   show: false,
                   pisition: 'top',
                   formatter: '{b}',
                   color: 'transparent',
                   fontSize: 20,
                   fontWight: 600,
                   emphasis: {
                       color:'#333'
                    }
                },
                itemStyle: {
                    normal: {
                      color: 'transparent'//字体颜色
                    },
                    label: {
                      show: false
                    }
                  },
                  zlevel: 5,
                  tooltip: {
                      show: true,
                      extraCssText:`height:60*${$widthCoefficient}px;background:transparent;border:none; padding:0;`,
                      formatter(param) {
                        //   return ` <div class="barndTooltip">
                        //   ${param.data.name}
                        // </div>`
                        return `
                            <div class="barndTooltip">
                                <div class="info">
                                    ${param.data.name}
                                </div>
                                <div class="img">
                                    <img src="${require('@/assets/img/brandLoactionHover.png')}" alt="">
                                </div>
                            </div>`
                        },
                      position: 'top',
                      
                  }
                  
            },
           
        ]
    };
    return option;
}

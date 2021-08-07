import echarts from "echarts";
import { options } from "less";
// import scLine from '@/assets/json/sc_line.json';
import pzh_Line from "./pzh_line.json";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let $widthCoefficient = document.documentElement.clientWidth / 1920;
var mapData = {
    energe: {
        icon: `image://${require("@/assets/img/location1.png")}`,
        data: [
            {
              value: [101.643925, 26.595667],
              info: {
                company_type: "制造类",
                company_name: "攀钢集团钒钛资源股份有限公司",
                product_name: "其他常用有色金属冶炼",
                trademark: "万立,PG4,PG,PZH,攀钢钒钛 PZH,攀枝花,攀钢,PQ",
                awards:
                  '"钒钛磁铁矿高效绿色综合回收工艺及装备研究"技术创新项目一等奖,中国驰名商标',
                contacts: "谢勇",
                tel: "0812256063",
                url: "https://www.tianyancha.com/company/960650",
                location: "101.643925,26.595667",
                dizhi: '攀枝花市东区弄弄坪'
              }
            },
            {
              value: [102.004739, 26.794673],
              info: {
                company_type: "采矿类",
                company_name: "四川安宁铁钛股份有限公司",
                product_name: "铁矿石",
                trademark: "东太,RT 2,紫东,TIO2 DF,ZDTIO,A NING,安宁铁钛",
                awards: "国家高新技术企业、国家级绿色矿山企业、中国冶金矿山50强企业",
                contacts: "罗勇",
                tel: "08128945776",
                url: "https://www.tianyancha.com/company/183371440",
                location: "102.004739,26.794673",
                dizhi: '米易县垭口镇'
              }
            },
            
        ]
    },
    chemistry: {
        icon: `image://${require("@/assets/img/location2.png")}`,
        data: [
            {
              value: [101.643925, 26.595667],
              info: {
                company_type: "制造类",
                company_name: "攀钢集团钒钛资源股份有限公司",
                product_name: "其他常用有色金属冶炼",
                trademark: "万立,PG4,PG,PZH,攀钢钒钛 PZH,攀枝花,攀钢,PQ",
                awards:
                  '"钒钛磁铁矿高效绿色综合回收工艺及装备研究"技术创新项目一等奖,中国驰名商标',
                contacts: "谢勇",
                tel: "0812256063",
                url: "https://www.tianyancha.com/company/960650",
                location: "101.643925,26.595667",
                dizhi: '攀枝花市东区弄弄坪'
              }
            },
            {
              value: [102.004739, 26.794673],
              info: {
                company_type: "采矿类",
                company_name: "四川安宁铁钛股份有限公司",
                product_name: "铁矿石",
                trademark: "东太,RT 2,紫东,TIO2 DF,ZDTIO,A NING,安宁铁钛",
                awards: "国家高新技术企业、国家级绿色矿山企业、中国冶金矿山50强企业",
                contacts: "罗勇",
                tel: "08128945776",
                url: "https://www.tianyancha.com/company/183371440",
                location: "102.004739,26.794673",
                dizhi: '米易县垭口镇'
              }
            },
        ]
    },
    metal: {
        icon: `image://${require("@/assets/img/location3.png")}`,
    },
    bulid: {
        icon: `image://${require("@/assets/img/location4.png")}`,
    },
    farm: {
        icon: `image://${require("@/assets/img/location5.png")}`,
    }

}

var data_type_2 = [
  {
    value: [101.643925, 26.595667],
    info: {
      company_type: "制造类",
      company_name: "攀钢集团钒钛资源股份有限公司",
      product_name: "其他常用有色金属冶炼",
      trademark: "万立,PG4,PG,PZH,攀钢钒钛 PZH,攀枝花,攀钢,PQ",
      awards:
        '"钒钛磁铁矿高效绿色综合回收工艺及装备研究"技术创新项目一等奖,中国驰名商标',
      contacts: "谢勇",
      tel: "0812256063",
      url: "https://www.tianyancha.com/company/960650",
      location: "101.643925,26.595667",
      dizhi: '攀枝花市东区弄弄坪'
    }
  },
  {
    value: [102.004739, 26.794673],
    info: {
      company_type: "采矿类",
      company_name: "四川安宁铁钛股份有限公司",
      product_name: "铁矿石",
      trademark: "东太,RT 2,紫东,TIO2 DF,ZDTIO,A NING,安宁铁钛",
      awards: "国家高新技术企业、国家级绿色矿山企业、中国冶金矿山50强企业",
      contacts: "罗勇",
      tel: "08128945776",
      url: "https://www.tianyancha.com/company/183371440",
      location: "102.004739,26.794673",
      dizhi: '米易县垭口镇'
    }
  },
  
];
let icon = `image://${require("@/assets/img/wuliu.jpg")}`;
let energeCompany = `image://${require("@/assets/img/energeCompany.png")}`;
let energePark = `image://${require("@/assets/img/energePark.png")}`;
export const mapStatefun = (mapdata, pointData) => {
  let mapName = "brand";
  let option = {
    geo: {
      show: true,
      map: mapName,
      zoom: 1.1,
      aspectScale: 1,
      label: {
        normal: {
          show: true,
          fontSize: 14 * $widthCoefficient,
          color: "#666"
        },
        emphasis: {
          show: true
        }
      },
      roam: false,
      itemStyle: {
        normal: {
          borderColor: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#4396ED"
              },
              {
                offset: 1,
                color: "#4396ED"
              }
            ],
            false
          ),
          borderWidth: 2,
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 1,
                color: "#3b62f4" // 0% 处的颜色
              },
              {
                offset: 0.8,
                color: "#f3f8ff" // 100% 处的颜色
              },
              {
                offset: 0,
                color: "#f3f8ff" // 100% 处的颜色
              }
            ],
            globalCoord: true // 缺省为 false
          },
          shadowColor: "rgba(81,143,255,0.4)",
          shadowOffsetX: 0,
          shadowOffsetY: 14,
          opacity: 1,
          shadowBlur: 8
        },
        emphasis: {
            
        }
      }
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        type: "map",
        map: mapName,
        geoIndex: 2,
        zoom: 1.1,
        roam: false,
        aspectScale: 1, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            fontSize: 14 * $widthCoefficient,
            show: true,
            color: "#999"
          },
          emphasis: {
            show: true,
            textStyle: {
              color: "#555"
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: "#f3f8ff",
            borderWidth: 1,
            borderColor: "rgba(102, 145, 246, 0.5)"
          },
          emphasis: {
            areaColor: "#f3f8ff",
            color: "#333"
          }
        },
        animation: false,
        data: mapData,
        tooltip: {
          show: false
        }
      }
    ]
  };
  Object.keys(pointData).forEach(item => {
    var serie =  
    {
        name: "散点",
        type: "scatter",
        coordinateSystem: "geo",
        data:   pointData[item].data,
        symbol: pointData[item].icon,
        // symbol: energePark,
        symbolSize: [22, 22],
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            // areaColor: '#f3f8ff',
            shadowColor: "#a2ccea",
            shadowOffsetY: 5,
            shadowBlur: 3
          },
          emphasis: {
            // areaColor: '#fbb920',
          }
        },
        tooltip: {
          position: "right",
          extraCssText: `width:${320 *
            $widthCoefficient}px;background:transparent;border:2px solid #25CBF2; border: none; padding:none;white-space:pre-wrap;`,
          formatter(param) {
              var info = param.data.info
            return `<div class="tooltip"><div class="tooltip-title">${info.company_name}</div><div class="info"><div class="name">名优品牌：</div><div class="value">${info.product_name}</div></div><div class="info">
                          <div class="name">联系人：</div>
                          <div class="value">${info.contacts}</div>
                        </div><div class="info">
                          <div class="name">联系方式：</div>
                          <div class="value">${info.tel}</div>
                        </div></div>`;
          }
        }
    }
    option.series.push(serie)
  })  
  return option;
};

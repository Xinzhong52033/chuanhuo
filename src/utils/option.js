export const getLineOption = (param) => {
  let options = {
    tooltip: {
      trigger: "axis",
      formatter: "{b}: {c}"
    },
    grid: {
      top: "8%",
      left: "0%",
      right: "3%",
      bottom: "0%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false, //坐标轴两边留白
      data: param.date,
      axisLabel: {
        //坐标轴刻度标签的相关设置。
        interval: 1, //设置为 1，表示『隔一个标签显示一个标签』
        //margin:15,
        textStyle: {
          color: "#1B253A",
          fontStyle: "normal",
          fontFamily: "微软雅黑",
          fontSize: 12
        }
      },
      axisTick: {
        //坐标轴刻度相关设置。
        show: false
      },
      axisLine: {
        //坐标轴轴线相关设置
        lineStyle: {
          show: false,
          color: "#E5E9ED"
          // opacity:0.2
        }
      },
      splitLine: {
        //坐标轴在 grid 区域中的分隔线。
        show: false,
        lineStyle: {
          color: "#E5E9ED"
        }
      }
    },
    yAxis: [
      {
        type: "value",
        splitNumber: 8,
        axisLabel: {
          textStyle: {
            color: "#000",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#000",
            type: "dashed",
            opacity: 0.5
          }
        }
      }
    ],
    series: [
      {
        name: "农副指数",
        type: "line",
        symbol: "none",
        itemStyle: {
          normal: {
            color: "#3A84FF",
            lineStyle: {
              color: "#3A84FF",
              width: 2
            }
          }
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#3860F4" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(56, 96, 244, 0)" // 100% 处的颜色
              }
            ]
          }
        },
        data: param.value
      }
    ]
    }
    return options
};

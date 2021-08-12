(function () {
// 基准大小
const baseSize = 100
function setRem () {
  let scale = document.documentElement.clientWidth / 1920
  if (document.documentElement.clientWidth > 1920) {
     scale = 1
  }
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  location.reload() 
  setRem();
}
document.addEventListener('DOMContentLoaded',setRem);
})()
// // 基准大小
// const baseSize = 100
// // 设置 rem 函数
// export function setRem () {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//   const scale = baseSize / 1920
//   let wW = document.documentElement.clientWidth
//   wW = (wW > 1980 ? 1980 : wW)
//   wW = (wW < 1360 ? 1360 : wW)
//   // 设置页面根节点字体大小
//   document.documentElement.style.fontSize = (wW * scale) + 'px'
// }
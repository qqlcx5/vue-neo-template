const path = require('path');
const px2viewport = require('postcss-px-to-viewport-8-plugin');
const normalSize = (file) => path.join(file).includes(path.join('node_modules', 'vant')) || path.join(file).includes(path.join('node_modules', 'element-plus'));
module.exports = {
  plugins: [
    px2viewport({
      unitToConvert: 'px', //需要转换的单位，默认为"px"
      viewportWidth: (file) => (normalSize(file) ? 375 : 750), // 视窗的宽度，对应设计稿的宽度
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用 rem
      fontViewportUnit: 'vw', // 字体使用的视口单位
      unitPrecision: 13, // 指定`px`转换为视窗单位值的小数后 x位数
      viewportHeight: 1334, //视窗的高度，正常不需要配置
      propList: ['*'], // 能转化为 rem的属性列表
      selectorBlackList: [], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换
      replace: true, //是否直接更换属性值，而不添加备用属性
      exclude: /node_modules\/(?!(element-plus|vant))/, //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      // exclude: /node_modules/, //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      landscape: true, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', //横屏时使用的单位
      landscapeWidth: (file) => (normalSize(file)) ? 667 : 1334 //横屏时使用的视口宽度
    })
  ]
};

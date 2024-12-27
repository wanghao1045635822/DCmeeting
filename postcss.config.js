//postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions', // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    'postcss-pxtorem': {
      rootValue: 16, // 根元素的字体大小
      unitPrecision:6,//计算结果保留6位小数
      selectorBlackList: ['.no-rem','no-rem'],//要忽略的选择器并保留为px
      propList:['*'],//可以从px更改为rem的属性  感叹号开头的不转换
      replace:true,//转换成rem以后，不保留原来的px单位属性
      mediaQuery: false,//允许在媒体查询中转换px
      minPixelValue: 2,//设置要替换的最小像素值
      exclude:/node_modules/i //排除 node_modules 文件(node_modules 内文件禁止转换)
    },
  },
}

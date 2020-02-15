// 生产配置
// 导入合并的工具
const webpackMerge = require('webpack-merge');
// 导入baseconfig
const baseconfig = require('./base.config.js')
module.exports = webpackMerge(baseconfig,{
	// 可以放一些生产时使用的包,例如丑化打包后的js等
})

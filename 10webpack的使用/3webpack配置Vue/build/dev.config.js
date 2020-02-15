// 开发配置

// 导入合并的工具
const webpackMerge = require('webpack-merge');
// 导入baseconfig
const baseconfig = require('./base.config.js')
module.exports = webpackMerge(baseconfig,{
	devServer:{
		// 指定服务的文件夹
		contentBase:'./dist',
		// 是否实时刷新
		inline: true,
		// port 指定端口号
	}
})

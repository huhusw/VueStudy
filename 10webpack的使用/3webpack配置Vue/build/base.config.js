// 基础配置

// 配置文件需要告诉命令的入口和出口是哪里
// 此文件名目前是固定的,分离后,可以修改为其他名称,并手动配置读取的文件
// commonJS的模块导入导出,需求node的path包
const path = require('path')
// 导入版权插件的包
const webpack =  require('webpack')
// 导入打包插件
const htmlwebpackplugin = require('html-webpack-plugin')

// vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	// 入口
	entry: './src/main.js',
	// 出口
	output: {
		// path需要是一个绝对路径,绝对路径的使用在复制项目后容易出错
		// 所以需要动态获取到绝对路径,需要使用node中的path包
		// 动态获取绝对路径,__dirname存的是当前项目文件的绝对路径,使用resolve函数进行拼接
		path: path.resolve(__dirname,'../dist'),
		filename: 'stem.js',
		// 此配置是打包url资源时,会自动加上一个 dist/ 也就是输出到dist文件夹下
		// 那么大于limit的图片资源就可以直接找到,通过网页审查元素可以发现
		// 插件使index.html文件打包后,此路径就不需要使用了
		// publicPath: 'dist/'
	},
	// 在此进行loader的引用
	module: {
	    rules: [
			{
				// 正则表达式进行匹配css文件
				test: /\.css$/,
				// 这个loader的顺序也会影响到程序的运行
				use: [ 'style-loader', 'css-loader' ]
			},
			// 配置url-loader
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						// 资源大小的限制
						// 若图片资源小于该限制,直接被加载为base64格式的图片 进行显示
						// 大于该限制时,需要file-loader加载
						options: {
							limit: 14000,
							// 新建img文件夹,命名为原名称+8位hash+拓展名
							name: 'img/[name].[hash:8].[ext]'
						}
					}
				]
			},
			//配置vue-loader
			{
				test:/\.vue$/,
				use: ['vue-loader']
			}
	    ]
	},
	plugins: [
		// make sure to include the plugin for the magic
		// 配置vue-loader插件
		new VueLoaderPlugin(),
		// 配置版权插件
		new webpack.BannerPlugin("版权声明!!"),
		// 打包插件的使用,此插件会自动打包index.html文件到dist
		// 文件夹下,且自动添加打包后的js文件,如stem文件
		// 但是生成的文件并不是我们想要的文件,例如需要添加一个叫app的div,这时需要模板进行生成
		// 此路径下的index.html会作为模板传过来使用
		new htmlwebpackplugin({
				template:'index.html',
			}),
		
	 ],
	 resolve: {
		 // 可以省略的拓展名
		 extensions:[".js",".vue"],
		 // alias别名
		 alias:{
			 // 为引用的vue起一个别名,import vue时会找别名文件
			'vue$':'vue/dist/vue.esm.js'
		 }
	 },

}
// 引入这个文件会有问题  问题在哪里？
// 问题在于引入此文件时需要app div这个元素加载完成,所以放到div后面就可以加载出来
// 但是又出现了一个问题:按钮的监听不管用,这个问题怎么解决呢?
const app = new Vue({
	el : '#app',
	data : {
		books : [
			{
				id : 1,
				name : '算法导论',
				date : '2006-09',
				price : 85.00,
				count : 1,
			},
			{
				id : 2,
				name : '编程艺术',
				date : '2002-02',
				price : 75.00,
				count : 1,
			},
			{
				id : 3,
				name : '操作系统',
				date : '2001-12',
				price : 115.00,
				count : 1,
			},
			{
				id : 4,
				name : '计算机网络',
				date : '1998-05',
				price : 66.00,
				count : 1,
			}
		]
	}
})
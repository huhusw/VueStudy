let name = "xiaoming"
console.log(name)
let flag = true
function sum(num1,num2){
	return num1+num2;
}
// 第一种导出方式,将变量名放入大括号内
export{
	flag,name,sum
}

// 第二种方式,直接导出变量名
export const pi = 3.14;

// 直接导出函数
export function mul(num1,num2){
	return num1*num2;
}

// 直接导出类
export class Person{
	run(){
		console.log("奔跑");
	}
}

// 由导入者进行命名,一个js文件只允许一个default
export default function(num1,num2){
	return num1-num2;
}
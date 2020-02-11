// 根据变量名进行导入
// import {flag,sum,pi,mul,Person} from "./info.js"
// 通配符导入,需要另命名,并且需要使用.运算符进行访问
import * as info from "./info.js"

if(info.flag){
	console.log("你好啊!!")
}

console.log(sum(10,20));

console.log(pi)

console.log(mul(10,20));

let p = new Person();
p.run();

// export default的导入方式
import sub from "./info.js"
console.log(sub(10,20));
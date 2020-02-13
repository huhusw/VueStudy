// 使用webpack进行打包,命令为webpack ./src/main.js会自动生成一个dist文件夹放置打包后的文件
// 在入口index.html中调用打包后的文件即可使用,好像生成的默认名为main.js
// webpack打包的文件名为打包的文件名,应该可以修改成其他的名字

import * as info from "./info.js"
console.log(info.name)
console.log(info.age)
console.log(info.height)

export let aaa = '使用';
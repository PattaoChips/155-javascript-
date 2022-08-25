// 4.let的作用
let greeting
greetign = {} // Typo!
console.log(greetign) //{}
/**
 * 代码打印出了一个对象，这是因为我们在全局对象上创建了一个空对象！当我们将 `greeting` 写错成 `greetign` 时，JS 解释器实际在上浏览器中将它视为 `global.greetign = {}`（或者 `window.greetign = {}`）。
 为了避免这个为题，我们可以使用 `"use strict"。这能确保当你声明变量时必须赋值。
 */
// js中=== 和 == 的区别
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b) // true
console.log(a === b) // false
console.log(b === c) // false
/**
 * `new Number()` 是一个内建的函数构造器。虽然它看着像是一个 number，但它实际上并不是一个真实的 number：它有一堆额外的功能并且它是一个对象。
 当我们使用 `==` 操作符时，它只会检查两者是否拥有相同的*值*。因为它们的值都是 `3`，因此返回 `true`。
 然后，当我们使用 `===` 操作符时，两者的值以及*类型*都应该是相同的。`new Number()` 是一个对象而不是 number，因此返回 `false`。
 */
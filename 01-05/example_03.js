// 3.普通函数与箭头函数的区别
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
}

console.log(shape.diameter()); //20
console.log(shape.perimeter());//NaN
/**
 * 注意 `diameter` 的值是一个常规函数，但是 `perimeter` 的值是一个箭头函数。

 对于箭头函数，`this` 关键字指向的是它当前周围作用域（简单来说是包含箭头函数的常规函数，如果没有常规函数的话就是全局对象），这个行为和常规函数不同。这意味着当我们调用 `perimeter` 时，`this` 不是指向 `shape` 对象，而是它的周围作用域（在例子中是 `window`）。

 在 `window` 中没有 `radius` 这个属性，因此返回 `undefined`。
 */
// 函数本质就是一个特殊的对象
function bark() {
    console.log('Woof!')
  }
  
  bark.animal = 'dog'
  bark();//Woof
  console.log(bark.animal);//dog
  /**
   * 因为函数是对象！（除了基本类型之外其他都是对象）
 函数是一个特殊的对象。你写的这个代码其实不是一个实际的函数。函数是一个拥有属性的对象，并且属性也可被调用。
   */
// 3.类的使用
class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor
      return this.newColor
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' })
  freddie.colorChange('orange')//TypeError
  Chameleon.colorChange('orange') //orange
/**
 *colorChange` 是一个静态方法。静态方法被设计为只能被创建它们的构造器使用（也就是 `Chameleon`），并且不能传递给实例。因为 `freddie` 是一个实例，静态方法不能被实例使用，因此抛出了 `TypeError` 错误。 
 */
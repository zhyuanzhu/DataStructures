/**
 * 集合
 */

class Set {
  constructor () {
    this.items = {}
  }

  // 向集合添加一个新元素
  add (element) {
    const hasElement = this.has(element)
    if (!hasElement) {
      this.items[element] = element
    }
    return !hasElement
  }

  // 从集合中移除一个元素
  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  // 查看元素是否在集合中
  has (element) {
    // this.items.hasOwnProperty(element)
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  // 移除集合中的所有元素
  clear () {
    this.items = {}
  }

  // 返回集合所包含元素数量
  size () {
    // let count = 0
    // for (let key in this.items) {
    //   判断是否是对象自身的属性  
    //   if (this.has(key)) {
    //     count++
    //   }
    // }
    // return count
    return Object.keys(this.items).length
  }

  // 返回包含集合中所有值的数组
  values () {
    // const values = []
    // for (let key in this.items) {
    //   if (this.has(key)) {
    //     values.push(key)
    //   }
    // }
    // return values
    return Object.keys(this.items)
  }


}

module.exports = { Set }
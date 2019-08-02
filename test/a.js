class LazyManClass {
  constructor (name) {
    this.name = name
    console.log(`Hi I am ${this.name}`)
    this.taskList = []
    setTimeout(() => {
      this.next()
    },0)
  }

  eat (eatStr) {
    this.taskList.push(() => {
      console.log(`I am eating ${eatStr}`)
      this.next()
    })
    return this
  }

  sleepFirst (second) {
    this.taskList.unshift(() => {
      setTimeout(() => {
        console.log(`等待${second}秒`)
        this.next()
      }, second * 1000)
    })
    return this
  }

  sleep (second) {
    this.taskList.push(() => {
      setTimeout(() => {
        console.log(`等待${second}秒`)
        this.next()
      }, second * 1000)
    })
    return this
  }

  next () {
    const fn = this.taskList.shift()
    fn && fn()
  }

}

function LazyMan(name) {
  return new LazyManClass(name)
}

// LazyMan('Tony')

// LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

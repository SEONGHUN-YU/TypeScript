function User(name, age) {
    this.name = name
    this.age = age
}
var capt = new User('캡틴', 100)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
var seho = new Person('세호', 30)
console.log(seho)
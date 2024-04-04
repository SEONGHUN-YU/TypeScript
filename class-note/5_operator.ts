// function logMessage(value: any): void {
//     console.log(value)
// }
// logMessage('hello')
// logMessage(100)

var seho: string | number | boolean
function logMessage(value: string | number): void {
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.toUpperCase()
    }
    throw new TypeError('value must be string or number')
}
logMessage('hello')
logMessage(100)

interface Developer {
    name: string;
    skill: string
}

interface Person {
    name: string;
    age: number
}

// function askSomeone(someone: Developer | Person): void {
//     // someone.name
//     // someone.skill
//     // someone.age
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' })
// askSomeone({ name: '캡틴', age: 100 })

function askSomeone(someone: Developer & Person): void {
    someone.name
    someone.skill
    someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 })
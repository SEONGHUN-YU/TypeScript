interface Developer {
    name: string;
    skill: string
}

// interface Person {
//     name: string
// }

class Person {
    name: string
}

var developer: Developer
var person: Person
person = developer
// developer = person

// 함수
var add = function(a: number): void {
    // ...
}
var sum = function(a: number, b: number): void {
    // ...
}
sum = add
// add = sum

// 제네릭
interface Empty<T> {
    // ...
}
var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
    data: T
}
var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>
notempty1 = notempty2
notempty2 = notempty1
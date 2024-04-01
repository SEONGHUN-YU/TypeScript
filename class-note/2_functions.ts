// 함수의 파라미터에다가 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b
}

// 함수의 리턴값에다가 타입을 정의하는 방식
function add(): number {
    return 10
}

// 함수의 타입을 정의하는 방식
function result(a: number, b: number): number {
    return a + b
}

sum(10, 20, 30, 40) // TS는 엄격하다

// 옵셔널 파라미터
function log(a: string, b?: string) {

}

log('hello world')
log('hello ts', 'hello js')
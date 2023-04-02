var varValue = 1
var varValue = 2 // 중복 선언

let letValue=1
//let letValue = 2 // 중복 선언 시 에러 발생
letValue = 2 // 새로운 값 할당은 가능
//---------------------------------------
const conValue = 2
// conValue=3 // 상수라서 값 수정 불가능

let undefinedValue; // 선언만
console.log(undefinedValue); // undefined

undefinedValue = 3;
console.log(undefinedValue);

/* 
const value;   // error. const는 선언하면서 할당해야 한다.
console.log(value);
*/

const val_boolean = true
const val_null = null
let val_undefined_1 // undefined
const val_undefined_2 = undefined
const val_number_1 = 1
const val_number_2  = 1.1
const val_bigint = 1n
const val_string = 'abc'

console.log(typeof val_boolean) // 이렇게 해도 되고
console.log(typeof(val_null)) // 함수처럼 불러도 된다.
console.log(typeof val_undefined_1)
console.log(typeof val_undefined_2)
console.log(typeof val_number_1)
console.log(typeof val_number_2)
console.log(typeof val_bigint)
console.log(typeof val_string)

// 변수 타입 - Symbol
const symbol1 = Symbol('a')
const symbol2 = Symbol('a')
const symbol3 = Symbol() // description은 선택사항

console.log(symbol1.description) // a
console.log(symbol1.toString()) // Symbol(a)
console.log(symbol1===symbol2) // false

// 전역 Symbol
const symbolA = Symbol.for('A') // 없으니까 새로 생성
const symbolA2 = Symbol.for('A') // 생성해둔 심볼 반환

console.log(symbolA===symbolA2) // true
console.log(Symbol.keyFor(symbolA)) // A

// String Tmplate Literals
let i = 0;
const str  = `value is ${i}`
console.log(str);

let i2 = 0;
const str2 = `value is ${i2+5}`
console.log(str2);

// 줄바꿈이 적용된다.
const str3 = `Hello,
Everyone`;
console.log(str3)

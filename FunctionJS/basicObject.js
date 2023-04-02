const value = 'value';
const symbol = Symbol('A')

const myObject = {
    id: 1,
    _desc_:'my object',
    value, // value:value
    '?':'?',
    [symbol]:'abc',
    [value + (()=>1)()]: 1 // 동적 이름
}

console.log(myObject.id); // 1
console.log(myObject._desc_); // my object
console.log(myObject['?']); // ?
// console.log(myObject.'?'); // error
console.log(myObject[symbol]); // abc
// console.log(myObject.symbol); // undefined
console.log(myObject.value1) // 1

// 함수를 통한 객체 생성 ----------------------------------

// new 연산자와 함께 호출할 경우
// Student.protype을 상속받은 객체가 생성되고
// 만들어진 객체를 this로 사용하여 아래 함수가 호출된다.
function Student(sid, sname) {
    this.studentId=sid;
    this.studentName=sname;
}

const student1 = new Student(1, 'std1');
const student2 = new Student(2, 'std2');

console.log(student1);
console.log(student2);

let obj = {
    id:1
}
console.log(obj)

obj.value='value'
console.log(obj)

delete obj.value
console.log(obj)


// 객체의 속성 ------------------------------
const obj2 = {
    id: 1,
    arr: [1, 2, 3]
}
console.log(obj2)

Object.defineProperty(obj2, 'value', {
    configurable:false,
    enumerable:true, // false로 할 경우 console.log에서 확인 불가능
    value:'aa',
    writable:false,
});
console.log(obj2)

console.log(delete obj2.value) // false - not configurable
console.log(obj2)
obj2.value = '123'
console.log(obj2) // 변경되지 않음

const obj3 = {
    id: 1,
    arr: [1, 2, 3]
}
console.log(obj3)

Object.defineProperty(obj3, 'value', {
    configurable:false,
    enumerable:true, // false로 할 경우 console.log에서 확인 불가능
    get() { return this.id },
    set(v) { this.id = v }
});
console.log(obj3)

console.log(delete obj3.value) // false - not configurable
console.log(obj3)
obj3.value = '123'
console.log(obj3) // 변경되지 않음

const obj4 = {}
const str = 'a'
function f() {}

console.log(typeof obj) // object
console.log(typeof str) // string
console.log(typeof Object.getPrototypeOf(str)) // object
console.log(typeof f) // function
function add(n1, n2) {
    return n1+n2;
}

function sub(n1, n2) {
    return n1-n2;
}

function executor(f, a, b) {
    return f(a, b)
}

const result = executor(add, 1, 1)
console.log(result) // 2

function executor2(type) {
    if(type == 'add')
        return add
    else
        return sub
}

const f2 = executor2('add')
console.log(f2(1, 1)) // 2

function outer() {
    function inner() {
        console.log('inner')
    }

    console.log('outer');
    inner();
    inner();
}

outer();

// generator
function* gen() {
    yield 0;
    yield 1;
    yield 2;
}

const g = gen();
console.log(g.next().value) // 0
console.log(g.next().value) // 1
console.log(g.next()) // done:false, value: 2
console.log(g.next()) // done:false, value: undefined


// 원시타입--------------------------------------
function op(number) {
    number += 1
    console.log(number) // 11
}

let number = 10;
op(number)
console.log(number) // 10

function op2(value) {
    value += '!!'
    console.log(value) // user!!
}

let value = 'user'
op2(value)
console.log(value) // user

// 매개 변수의 기본 값을 지정할 수 있다.
function prim(data = 1) {
    console.log(data);
}

function obj2(data={id:1}) {
    console.log(data);
}

prim()
obj2()

// 가변 매개변수 ---------------------------------------------------------
function test(...params) {
    console.log(params.length)
    if(params.length > 0)
        console.log(params[0])
}

test()
test(1)
test(1, 2, 3)

// 객체 타입
function typeOp(obj) {
    obj.prop = 'porp' // add property
    console.log(obj) // id:1, prop:'porp'
}

let typeObj = {
    id: 1
}

console.log(typeObj)
typeOp(typeObj)
console.log(typeObj)
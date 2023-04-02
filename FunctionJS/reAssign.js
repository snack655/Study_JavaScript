// 구조 분해 할당 Restructuring assignment
const arr = ['a', 'b'];
let [value1, value2] = arr
console.log(value1, value2);

const arr2=['a', 'b', 'c', 'd']
let [value21, value22, ...restValues] = arr2
console.log(value21, value22);
console.log(restValues);

function getResult() {
    return [1, 2, 3];
}

let [value31, value32, ...restValues2] = getResult();
console.log(value31, value32);
console.log(restValues2);

// 객체
function getInfo() {
    return {
        name:'ABC',
        price:1000
    };
}

let {name, price} = getInfo();
console.log(name, price);
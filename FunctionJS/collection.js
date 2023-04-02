// Collection
// Array
const arr = [ 1, 2, 3, 4 ];
console.log(arr);

console.log(arr[0]); // index를 이용한 접근

arr.push(5); // 마지막에 항목 추가
console.log(arr);

arr.pop(); // 마지막 항목 삭제
console.log(arr);

const value = arr.splice(1, 2); // 1번 index부터 2개 삭제
console.log('removed:', value);
console.log(arr);

// array의 함수들
const mapArr = [ 1, 2, 3 ];
const mapArr2 = mapArr.map((item)=>{ return `${item}th` });
console.log(mapArr2);

const filterArr = [ 1, 2, 3, 4, 5, 6 ];
const filterArr2 = filterArr.filter((i) => {
    if (i % 2 == 0) return true;
    else return false;
});
console.log(filterArr2)

// Spread
const spreadArr = [ 1, 2 ];

// 인자가 2개 필요한 함수.
function add(num1, num2) {
    return num1 + num2;
}

// Spread
const spreadResult = add(... spreadArr);
console.log(spreadResult) // 3

// shallow  copy
const cpyArr = [ 1, 2, 3, 4 ];
const cpyArr2 = cpyArr; // 참조만 복사

console.log(cpyArr2); // 1, 2, 3, 4

cpyArr2.pop(); // cpyArr2에 변화는 cpyArr에 변화와 동일
console.log(cpyArr); // 1, 2, 3

// deep copy
const dcpyArr = [ 1, 2, 3, 4 ];
const dcpyArr2 = dcpyArr.slice();


// set
const set = new Set([1, 2, 3]); // 배열로 초기화 가능
set.add(1); // 중복되는 값
set.add(4);
console.log(set);
const obj = { value: 1 }; // 객체도 넣을 수 있음.
set.add(obj)
console.log(set)

// map
const map = new Map();
map.set('k1', 'v1');
map.set('k2', 2);
map.set('k3', 3.0);

console.log(map)

// iteration
const iterArr = [ 1, 3, 5, 7, 9 ]

// for in
console.log('for in');
for (let i in iterArr) {
    console.log(i + 1); // 01, 11, 21, 31, 41
}

console.log('for of');
for(let i of iterArr) {
    console.log(i + 1); // 2, 4, 6, 8, 10
}

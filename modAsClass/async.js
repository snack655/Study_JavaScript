function sigma(start, end) {
    let sum = 0;
    for(let i = start; i < end; i++) {
        sum += i;
    }
    return sum;
}

const start = 1;
const end = 10000;

// sigma 함수가 반환될 때까지 result의 할당은 이루어지지 않으며
const result = sigma(start, end);
// console.log 역시 실행되지 않는다.
console.log(result);


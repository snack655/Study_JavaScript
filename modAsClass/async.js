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

// promise
function test(value) {
    return new Promise((resolve, reject) => {
        if (value >= 0)
            resolve('ok');
        else
            reject('error');
    });
}

test(1)
    .then((result)=>{console.log(result);})
    .catch((error)=>{console.log(error);})

// async await
function test2(value) {
    return new Promise((resolve, reject)=>{
        resolve('ok');
    });
}

async function runTest() {
    const result = await test(1);
    console.log(result);
}

runTest();

function test3(value) {
    return new Promise((resolve, reject)=>{
        if(value >= 0)
            resolve('ok');
        else
            reject('ng');
    });
}

async function runTest2() {
    try {
        const result = await test3(-1);
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

runTest2();
// if
const num1 = 10;
const num2 = 11;

if (num1 > num2) {
    console.log('not executed');
} else {
    console.log('executed'); // excuted
}

// else if
const score = 80;
if(score >= 90) {
    console.log('A');
} else if(score >= 80) {
    console.log('B');
} else if(score >= 70) {
    console.log('D');
} else {
    console.log('F');
}

// 삼항연산자 ?
const score2 = 10;

let result;
if(score2 > 5)
    result = true;
else
    result = false;

console.log(result);

// 위 if 문과 같은 동작
result = score > 5 ? true:false;
console.log(result);

// switch
let date = 0;

switch(date) {
    case 0: console.log('SUN'); break;
    case 1: console.log('MON'); break;
    case 2: console.log('TUE'); break;
    case 3: console.log('WED'); break;
    case 4: console.log('THU'); break;
    case 5: console.log('FRI'); break;
    case 6: console.log('SAT'); break;
    default : console.log("UNKNOWN");
}

date = 1; 

switch(date) {
    case 0: console.log('SUN'); break;
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: console.log('FRI'); break; // FRI
    case 6: console.log('SAT'); break;
    default : console.log("UNKNOWN");
}

const value = 1;

switch(value % 2) {
    case 0: console.log('EVEN'); break;
    case 1: console.log('ODD'); break; // ODD
}

const value2 = '0';

switch(value2) {
    case 0:
        console.log('case 0');
        break;
    default:
        console.log('default'); // default
}

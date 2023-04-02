function square(n) {
    return n * n;
}

console.log(square(3));

hello();

function hello() {
	console.log('Hello');
}

// Hoisting
console.log(cat);
var cat = 'cat';
var cat = 'new cat';
console.log(cat);

// expression
const hello2 = function sayHello(name) {
    console.log('Hello ' + name);
}

const bye = function (name) {
    console.log('Bye ' + name);
}

// sayHello(); // 표현식에서의 이름으로는 호출할 수 없다.
hello2('user');
bye('user');

// lambda
const hi = (name) => {
    console.log('Hi ' + name);
}

hi('user');

// first use and end
(function() {
    console.log('one time')
})();

(() => {
    console.log('one time')
})();

// 여기서는 위의 두 함수를 호출할 수 없다.
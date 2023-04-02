// for의 초기화문에서 선언된 변수는
// for문 안에서만 사용할 수 있다.
for(let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

// console.log(i); // error

let i;
for(i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 3, 가능

i = 0;
// 할당까지 된 변수라면 초기화를 생략하고 바로 쓸 수 있다.
for( ; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 가능

let i2 = 0;
while(i2 < 3) {
	console.log(i2);
	i2++;
}

let i3 = 3;
do {
	// i3 < 3은 false이지만
	// 일단 한 번은 실행한다.
	console.log(i3);
	i3++;
} while(i3 < 3);

// inI는 2회
for(let inI=0; inI < 2; inI++) {
    // 각 inI 당 j 3회 반복
    for(let j = 0; j < 3; j++) {
        console.log(inI+','+j) // 0,0,0,1,0,2,1,0,1,1,1,2
    }
}

// break

let breakI = 0;
while(true) {
    console.log(breakI);
    breakI++;
    if(breakI > 2) break;
}

// for문의 조건은 i < 10 이지만
// break로 조기 종료된다.
for(let breakForI = 0; breakForI < 10; breakForI++) {
    console.log(breakForI);
    if(breakForI > 2) break;
}

for(let oneI = 0; oneI < 3; oneI++) {
    for(let twoJ = 0; twoJ < 5; twoJ++) {
        console.log(oneI+','+twoJ);
        // 내부 for문만 종료된다.
        if(twoJ == 2) break;
    }
}

// continue 

for(let conI = 0; conI < 7; conI++) {
    if(conI % 2 == 1) continue;
    else console.log(conI);
}

let wConI = -1;
while(wConI < 7) {
    wConI++;
    if(wConI % 2 == 1) {
        continue;
    } else {
        console.log(wConI);
    }
}

// 라벨
outer: // label
for(let lai = 0; lai < 3; lai++) {
    inner: // label
    for(let laj = 0; laj < 3; laj++) {
        if(lai + laj > 2) break outer;
        console.log(`${lai} + ${laj} = ${lai + laj}`);
    }
}

myBlock: {
    let lai2 = 0;
    console.log(lai2);
    if(i == 0) break myBlock;
    console.log('Dead code..');
}


// 1. 변수 중복 선언 불가능 
let x = 3;
// let y = 5; //SyntaxError!
x = 5; // 바꾸려면 이렇게 
console.log(x);

// 2. 블록 레벨 스코프를 지원 
// 블록에서 태어난 변수는 블록에서 죽음
let y = 10;
if (true) {
    let y = 20;
    console.log(`if의 y: ${y}`);
}
console.log(`전역레벨의 y: ${y}`);

for (let i = 0; i < 10; i++){}
// console.log(i);

// 3. 변수 호이스팅이 일어나지 않음 
let z = 10;
console.log(z); 
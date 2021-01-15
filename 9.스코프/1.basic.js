
// 스코프: 생애주기 
var x = 10;

function foo(){
    var y = 20;
    console.log(x);
    console.log(y);
}

// foo();
// console.log(x); 
// console.log(y); // 힘수(지역) 레벨 스코프 참조 불가능 

// 전역 레벨 스코프 (프로그램이 종료 되기 전까지 살아있음 - 메모리 차지가 많다는 것)
// 함수(지역) 레벨 스코프 (함수안에서 호출 된 변수는 함수가 끝날때 사라짐)


console.log('==================================');

var v1 = 'global';

function bar() {
    var v1 = 'local';
    console.log(`v2: ${v1}`);// 함수안에서는 함수스코프 먼저 
}

console.log(`v1: ${v1}`);
bar();
console.log(`v3: ${v1}`);

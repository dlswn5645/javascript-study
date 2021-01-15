

// 1. 변수 중복 선언 허용 
var x = 1 ;
var x = 100;
console.log(x);

// 2. 블록 레벨 스코프를 지원하지 않음
var y = 2;

for(var y = 1; y < 3; y++){}
console.log(y);

// 3. 변수 호이스팅(변수를 뒤에 선언했는데도 작동이 됨)
// 코드의 유지보수가 떨어지고 프로그램 흐름을 방해함 
z = 100;
console.log(`z: ${z}`);

var z; // 선언하지 않아도 작동 
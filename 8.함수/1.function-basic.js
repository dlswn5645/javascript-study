

//함수 정의 
function calculateTotal(x) {
    console.log('함수 실행!');
    var total = 0;
    for (var n = 1; n <= x; n++) {
        total += n;
    }
    return total;
}
/*함수를 사용하는 이유
   실행시점을 조절할 수 있음
   재사용성이 높아짐 
   이름을 붙임으로써 함수의 역할을 잘 설명할 수 있음
   코드의 모듈화로 인해 유지보수 가능  
*/

console.log('안녕하세요!');

//함수 호출
var result = calculateTotal(10);
console.log(result);

console.log(calculateTotal(50));


var add = function (x, y) {
    return x + y;
}; //함수 리터럴 (표현식이기 때문에 세미콜론을 붙임)

/*
function add(x, y){
    return x + y;
}
*/

console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(-10, -20));

console.log('=============================');

var ct = calculateTotal; //함수를 변수에 할당가능
console.log(ct(10));
console.log(ct(100));
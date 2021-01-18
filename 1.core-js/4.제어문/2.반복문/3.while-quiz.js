
var begin = +prompt('시작 값을 가진 정수를 입력하세요.');
var end = +prompt('끝 값을 가진 정수를 입력하세요');
var total = 0;
var num1 = begin;

while ( num1 <= end){
    total += num1;
    num1++;
}
alert(`${begin}부터 ${end}까지의 총합은 ${total}`);

/*
if ( begin > end ){
    var temp = begin;
    begin = end;
    end = temp;
}
*/
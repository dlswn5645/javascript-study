

var number = +prompt('정수를 입력하세요');

if (number === 0){
    alert('입력하신 숫자는 0입니다.');
} else if ( number % 7 === 0){
    alert('입력하신 숫자는 7의 배수입니다.');
} else  {
    alert('입력하신 숫자는 7의 배수가 아닙니다.');
}

/* 다른 방법
 if ( number % 7 === 0 && number !== 0){
    alert('입력하신 숫자는 7의 배수입니다.');
 } else if ( number === 0){
    alert('입력하신 숫자는 0입니다.');
 } else  {
    alert('입력하신 숫자는 7의 배수가 아닙니다.');
} 
*/


//1~10까지의 총합 

var total = 0;
 

for( var n = 1; n <= 10; n++) {
     total += n;  
}
console.log(`1~10까지의 총합: ${total}`);

//횟수 제한이 있으면 for문 제한이 없으면 while문

//7~100사이의 7의 배수를 모두 출력허기

for(var num = 7; num <= 100; num += 7){
    console.log(num);
}

console.log(`while 종료 후 num: ${num}`);

//1~100사이의 13의 배수 모두 출력하기 
console.log('==========================');

for ( num = 1; num <= 100; num++ ){
    if( num % 13 === 0){
    console.log(num);
    }
}

console.log('============================');

//1~100사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기

for ( num = 1; num <= 100; num++ ) {
    if( num % 6 === 0 && num % 12 !== 0){
        console.log(num);
    }
}

console.log('============================');

//1~4000사이의 정수 중 9의 배수의 개수를 출력하기 

var count = 0;
for ( var num = 1; num <= 4000; num++) { 
    if ( num % 9 === 0){
        count++; 
    }
    
}
console.log(`범위 내의 9의 배수의 개수: ${count}개`);


var week = [ '월', '화', '수', '목', '금', '토', '일'];

/*
for (var day of week){
    console.log(`${day}요일`);
}
*/

/*
for (요소 변수 of 배열){
    반복할 코드;
}
*/

for (var i = 0; i < week.length; i++){
    if (i % 2 === 1 ){ //홀수
        continue;
    }
    console.log(`${week[i]}요일`);
}

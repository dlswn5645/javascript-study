

var scores = [78,90,100,69,97,89,45,56];

//총점 저장 변수
var total = 0;
 
for( var i = 0; i < scores.length; i++) {
     total += scores[i];
}

//평균 저장 변수
var avg = total / scores.length;
var prettierAvg = Math.round(avg * 100) /100; // 두번째 자리에서 반올림하는 logic
console.log(`수학점수의 총점: ${total}점, 평균: ${prettierAvg}점`); 
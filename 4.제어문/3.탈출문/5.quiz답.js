

//정오답 횟수 카운트 변수
var correctCount = 0, incorrectCount = 0;

while (true) {

   //0 이상 101미만
   var firstNumber = Math.floor(Math.random() * 101);
   var secondNumber = Math.floor(Math.random() * 101);

   //랜덤 숫자 0,1 이 등장하도록 변수 선언.
   //0: +, 1: - 
   var operatorNumber = Math.floor(Math.random() * 2);

   //랜덤 연산자 기호 만들기
   // var opratorMark = (operatorNumber === 0) ? '+' : '-';
   var operatorMark;
   if (operatorNumber === 0) {
      operatorMark = '+';
   } else {
      operatorMark = '-';
   }

   // 실제 정답
   var total;
   if (operatorMark === '+') {
      total = firstNumber + secondNumber;
   } else {
      total = firstNumber - secondNumber;
   }

   // 일단 사용자가 입력한 답안
   var userAnswer = +prompt(`${firstNumber} ${operatorMark} ${secondNumber} = ??`);
   // alert(typeof userAnswser);

   if (userAnswer === 0) {
      break;
   }

   //정답 오답 판별
   if (userAnswer === total) {
      alert('정답입니다!');
      correctCount++;
   } else {
      alert('오답입니다!');
      incorrectCount++;
   }
}//반복문 종료

alert(`프로그램이 종료되었습니다.
\n# 정답 횟수: ${correctCount}회, 오답 횟수: ${incorrectCount}회`);
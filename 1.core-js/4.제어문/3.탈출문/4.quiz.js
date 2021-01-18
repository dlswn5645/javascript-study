

var correctCount = 0;
var errorCount = 0;

 while (true){
    var firstNumber = Math.floor(Math.random() * 101);
    var secondNumber = Math.floor(Math.random() * 101);
    var table = +prompt(`${firstNumber} + ${secondNumber} = ???`);
    if( table === 0){
        alert(`정답 횟수는 ${correctCount} , 오답 횟수는 ${errorCount}`);
        break;
    } else if ( table === firstNumber + secondNumber ){
        alert('정답입니다.');
        correctCount++;
    } else if ( table !== firstNumber + secondNumber){
        alert('오답입니다.');
        errorCount++;
    }
}

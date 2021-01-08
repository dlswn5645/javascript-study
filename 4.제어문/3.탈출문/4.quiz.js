

var firstNumber = Math.floor(Math.random() * 100);
var secondNumber = Math.floor(Math.random() * 100);

var correctCount = 0;
var errorCount = 0;

for ( var table = 0; table <= 100; table++ ){
    var table = +prompt(`${firstNumber} + ${secondNumber} = ???`);
    if( table === firstNumber + secondNumber){
        alert('정답입니다.');
    } else if ( table !== firstNumber + secondNumber ){
        alert('오답입니다.');
    } else if ( table === 0){
        alert();
        break;
    }
}

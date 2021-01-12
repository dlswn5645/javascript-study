
var array = [];

while (true) {
    var number = prompt(`숫자를 입력해주세요.`);
    if( number === '그만') break;

    array.push(+number);

}

var total = 0;
for ( var num of array){
    total += num;
}
alert(`배열 요소의 합: ${total}`);
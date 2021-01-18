

var height = +prompt('당신의 키는?');

if( height >= 140){
    var age = +prompt('당신의 나이는?');

    if ( age >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else {
        alert('나이가 모자라서 놀이기구에 못탑니다.');
    }
} else {
    alert('키가 모자라서 놀이기구에 못탑니다.');
}
alert('오늘 하루 즐거운 시간 되세요!');
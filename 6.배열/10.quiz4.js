

var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var delTvxq = prompt(`현재 멤버는 [${tvxq}] \n 삭제할 멤버를 입력해주세요`);
    if (tvxq.includes(delTvxq)) {
        tvxq.splice(tvxq.indexOf(delTvxq), 1);
        confirm(`[${input}]:정말로 삭제합니까?`);
        break;
    } else {
        alert(`[${input}]이름은 존재하지 않습니다.`);
    }
}
alert(`[${input}]삭제완료 \n 현재 남은 멤버: ${tvxq}`);
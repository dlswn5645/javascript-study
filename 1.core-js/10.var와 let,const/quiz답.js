//게임에 필요한 데이터 객체 
const gameDatas = {
    secretNumber: Math.floor(Math.random() * 100) + 1,
    count: 0,
    countDown: 6,
    min: 1,
    max: 100
};

// 게임 종료 조건을 판단하는 함수 
function isGameFinish() {
    return isGameFinish;
}

// 시용자의 입력데이터를 처리하는 함수
function inputAnswer() {
    gameDatas.answer = +prompt(`숫자를 입력하세요! [${gameDatas.min} - ${gameDatas.max}]`);
    gameDatas.count++;
    gameDatas.countDown--;

    return checkInputNumber();
}

// 사용자의 입력데이터를 검증하는 함수
function checkInputNumber() {
    // 객체 디스트럭쳐링
    const {
        secretNumber,
        answer,
        count,
        countDown
    } = gameDatas;
    if (secretNumber === answer) {
        alert(`정답입니다!! ${count}번만에 맞추셨군요!`);
        checkCountDown(countDown);
        return true;
    } else if (secretNumber > answer) {
        alert('UP!!');
        gameDatas.min = answer;
    } else {
        alert('DOWN!!');
        gameDatas.max = answer;
    }
    alertCountDown(countDown);
    return false;
}

// 사용자의 남은 카운트다운을 알려주는 함수
function alertCountDown(countDown) {
    if (countDown > 0) {
        alert(`정답 기회 ${countDown}번 남음`);
    } else {
        alert('정답 기회를 모두 소진하였습니다. 계속 문제를 더 풀어주세요.');
    }
}
// 사용자가 정해진 카운트다운안에 맞췄는지 판별해주는 함수
function checkCountDown(countDown) {
    if (countDown >= 0) {
        alert('You Win!');
    } else {
        alert('You Lose!');
    }
}
// 핵심 실행 로직
(function () {
    alert('[UP & DOWN 게임 - 1 ~ 100사이의 숫자를 맞춰보세요!]');
    /*
    while (true) {
        if(isGameFinish()) break;
    }
    */
    while (!isGameFinish()) {} // 게임이 끝나지 않을 동안에는 계속 진행해라.
}());


//2차원 배열
//우리반 학생들(4명)의 4과목(국영수탐) 점수들을 관리 

var scores = [ 
    [88, 45, 82, 100], 
    [100, 87, 55, 77], 
    [67, 89, 92, 32], 
    [100, 100, 92, 44]
]

console.log(scores.length);
console.log(scores[2]);
console.log(scores[1][2]);

console.log('===========================');

//반 전체 총점을 저장할 변수 
var ourClassScoresTotal = 0;

//학생들의 충석번호 시퀀스
var stuNum = 1;

//국어 점수 총점 
var subjectKorTotal = 0;

for ( var scoreArray of scores){

    //한명의 학생의 점수배열(scoreArray)에서 0번 인덱스만 추출해서 누적 
    subjectKorTotal += scoreArray[0];

    var eachTotal = 0; //학생 1명의 총점 
    for(var score of scoreArray){
        eachTotal += score;
    }
    var eachAvg = eachTotal / scoreArray.length;

    //한명의 평균을 구한 후 합산
    ourClassScoresTotal += eachAvg;

    console.log(`${stuNum}번 학생: 총점 - ${eachTotal}점, 평균 - ${eachAvg}`);
    stuNum ++;
}

var ourClassAvg = ourClassScoresTotal / scores.length ;
console.log(`우리반 평균: ${ourClassAvg}`);

var subKorAvg = subjectKorTotal / scores.length;
console.log(`국어 평균: ${subKorAvg}`);


console.log('=====================================');

//3차원 배열
var arr3d = [
    [
        [1,2,3],[4,5,6],[7,8,9]
    ],
    [
        [10,11,12],[13,14,15],[16,17,18]
    ],
    [
        [19,20,21],[22,23,24],[25,26,27]
    ]
];

console.log(arr3d[1][2][0]);


//splice() : 배열의 특정 요소 제거 (중간 요소 제거) 
var foods = [ '떡볶이', '오뎅', '김말이', '닭꼬치'];

//foods 배열에서 1번 인덱스부터 2개를 제거 
//splice는 삭제한 요소들을 다시 배열로 저장시킬 수 있음.
var delFoods = foods.splice(1,2);
console.log(foods);
console.log(delFoods);

//삭제하고 그 위치에 '치킨'을 삽입(개수 제한 없이 삽입 가능) 
foods.splice(0, 1, '치킨', '피자');
console.log(foods);

//2번 인덱스 자리에서 아무것도 삭제하지 않고 그 자리에 '파스타' 삽입
foods.splice(2,0,'파스타');
console.log(foods);

//2번 인덱스부터 끝까지 전체 삭제 
foods.splice(2);
console.log(foods);

//특정 요소를 탐색하여 삭제 
console.log('=========================================');

foods.push('보쌈');
foods.push('닭발');

console.log(foods);

//사용자의 삭제 요구 데이터 (몇번 인덱스인지 모르는 상태에서 삭제)
var input = '피자'

if (foods.includes(input)){//인덱스 존재 여부 확인 true or false
    var targetIndex = foods.indexOf(input);//인덱스 위치 알아오기
    foods.splice(targetIndex,1);
    console.log(`${input}삭제완료`);
} else {
    console.log(`${input}데이터가 존재하지 않습니다.`);
}
console.log(foods);
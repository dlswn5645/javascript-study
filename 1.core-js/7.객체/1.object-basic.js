

//객체 생성!
var dog = {
    name : '뽀삐',
    kind : '시츄',
    age : 3,
    favorite : ['산책','간식']
};
var cat = {
    name : '콩순이',
    kind : '코숏',
    age : 2,
    favorite : ['낮잠','캔참치','캣타워']
};

console.log(typeof dog);//cbject

//객체 프로퍼티(속성) 참조 1번째 방법
console.log(dog.name);
console.log(cat.name);

console.log(dog.favorite);
console.log(cat.favorite[2]);

dog.favorite.push('꼬리흔들기');//추가
console.log(dog);

//프로퍼티 참조 2번째 방법 
console.log(dog.age);
console.log(dog['age']);//대괄호로 참조할때는 문자열로 키를 만들어줘야 함.

//프로퍼티 값 수정
dog.age = 5;
console.log(dog);

cat.favorite[1] = '날생선';
console.log(cat.favorite);

//프로퍼티 동적 추가(키가 없었다면 추가, 있었다면 수정)
console.log('======================================');

dog.owner = '김철수';
console.log(dog);

//프로퍼티 삭제
delete dog.owner;
console.log(dog);


//for ~ in(ES6)
console.log('========================================');

//프로퍼티의 숫자 만큼 반복
for(var key in cat ){
    // console.log(key);
    console.log(cat[key]);//key가 string이기 때문에 2번째 참조 문법 사용
}

//빈객체에 만들기
var obj = {};
obj.x = 10;
obj.y = 20;
console.log(obj);


//객체의 프로퍼티 존재 여부 확인
console.log('=========================================');

//cat에 owner라는 key가 있나? 확인
var flag = 'owner' in cat;
console.log(`존재 여부: ${flag}`);

var flag = 'kind' in cat;
console.log(`존재 여부: ${flag}`);

console.log('=========================================');

var key = 'hobby';

//if로 key의 존재 여부 확인 
if(key in cat ){
    console.log('해당 키는 존재합니다.');
} else {
    console.log('해당 키는 존재하지 않습니다.');
}

//역논리(NOT연산)
if(!(key in cat) ){
    console.log('해당 키는 존재하지 않습니다.');
} else {
    console.log('해당 키는 존재합니다.');
}

//값 변경 불가능 
const pi = 3.14159;

// pi = 6.66;
console.log(`원주율: ${pi}`);

// 반드시 선언과 동시에 초기화
// const y; 

console.log('========================');

const TAX_RATE = 0.1;

let preTaxPrice = 100;//세전 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE)//세후 가격

// const와 객체(배열, 객체 등)
const person = { //이거는 프로퍼티이기 때문에 
    name: 'park'
};
person.name = 'kim';
person.age = 20;
person.isStudent = true;
delete person. isStudent;
console.log(person);

const arr = [1,2,3];
arr[1] = 200;
console.log(arr);

// arr = ['d','d']; //x
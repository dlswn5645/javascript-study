

console.log('-- 1번 문제 --');
var user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;

console.log(user);

console.log('-- 2번 문제 -- ');
var salaries = {
    kim : 1000000,
    park : 1600000,
    lee : 1300000
}
var total = 0;
for (var salary in salaries){
    total += salaries[salary];
}
console.log(`모든 사람들 월급의 총합은 ${total}원 입니다.`);
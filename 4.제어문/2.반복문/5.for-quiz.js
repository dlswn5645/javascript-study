
//랜덤 구구단: 2 ~ 9 
var table = Math.floor(Math.random() * 8 ) + 2;

console.log('==================');
console.log(`랜덤 구구단 ${table}단`);
console.log('==================');

for ( var i = 1; i <= 9; i++){
     console.log(`${table} X ${i} = ${table*i}`);
}
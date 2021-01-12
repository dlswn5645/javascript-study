
//pop & push
var foods = ['떡볶이','치킨','피자'];

console.log(foods);

var lastElement = foods.pop();
console.log(`제거된 요소: ${lastElement}`);
console.log(foods);

foods.push('파스타');
foods.push('족발');
console.log(foods);


//shift 
foods.shift();
console.log(foods);

foods.unshift('짜장면');
console.log(foods);

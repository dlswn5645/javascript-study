

var t = true;
var f = false;

//AND연산
console.log(t && t);//true
console.log(t && f);//false
console.log(f && t);//false
console.log(f && f);//false

console.log('===========================');

//OR연산 
console.log(t || t);//true
console.log(t || f);//true
console.log(f || t);//true
console.log(f || f);//false

//NOT연산 
console.log('============================');
console.log(!true);//false
console.log(!false);//true
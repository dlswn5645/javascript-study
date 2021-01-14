function calcDivisor(targetNumber) {
    var divisors = [];
    for( var i = 1; i <= targetNumber; i++) {
        if (targetNumber % i === 0) {
            divisors.push(i);
        }
    }
    console.log(`${targetNumber}의 약수:[${divisors}]`);
    return divisors.length;
}
var divCount = calcDivisor(24);
console.log(`약수의 개수: ${divCount}개`);
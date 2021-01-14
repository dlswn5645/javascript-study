

function calcNumbersTotalAndAverage(...numbers){
    var total = 0;
    for(var num of numbers){
        total += num;
    }
    var avg = total / numbers.length;
    return {
        total: total,
        avg: avg
    };
}
var result = calcNumbersTotalAndAverage(90,80,100,90);
console.log(`총합: ${result.total}, 평균: ${result.avg}`);

function calcBMI(height,weight){
    var m = height/100;
    var kg = weight;
    var bmi = kg / (m * m);
    if(bmi >= 25.0){
        console.log('당신은 과체중입니다.');
    } else if (bmi <= 18.5){
        console.log('당신은 저체중입니다.');
    } else {
        console.log('당신은 정상체중입니다.');
    }
    return Math.round(bmi*100) / 100;
}

var h = 178.4, w = 78.2 ;
var myBmi = calcBMI(h,w);
console.log(`키-> ${h}cm , 체중 -> ${w}kg의 체질량지수는 ${myBmi}입니다.`);
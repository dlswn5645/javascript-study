

//지역 스코프와 지역변수 
var x = 'global x';

function outer(x) {
    var y = 'outer local y';
    console.log(x);
    console.log(y);
    // console.log(z); // 참조 불가능 즉, 부모가 자식은 못가져옴

    function inner() {// 내지역에 x가 있으면 씀,없으면 위로 감 
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
} 
outer('outer local x');
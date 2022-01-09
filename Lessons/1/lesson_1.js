
    function myFunction() {
        document.getElementById("mcxBtn1").innerHTML = "Привет, javascript!";
      }


function multiply(n){
    var x = n;
    return function(m){ return x * m;};
}
var fn1 = multiply(5);
var result1 = fn1(6); // 30
console.log(result1); // 30


/// Task 1
function onClickTask1() {
    alert("test1");
}

/// Task 2
function onClickTask2() {
    alert("test2");
}

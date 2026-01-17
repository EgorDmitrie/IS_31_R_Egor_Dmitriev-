//1
var _name = "Некита";
let age = 23;
const isStudent = true;

console.log(_name);
console.log(age);
console.log(isStudent);
//2
const PI = 3.14159;
let radius = 7;

let area = PI * radius * radius;

console.log(area);
//3
let intString = "476";
let floatString = "7.14";

console.log(parseInt(intString));     
console.log(parseFloat(floatString)); 
console.log(Number(intString));       
console.log(Number(floatString));
console.log(parseInt(floatString))
//4
var globalVar = "I am global";

function testScope() {
    if (true) {
        var a = 89;
        let b = 2;
        const c = 3;
    }

    console.log(a)
}

testScope();


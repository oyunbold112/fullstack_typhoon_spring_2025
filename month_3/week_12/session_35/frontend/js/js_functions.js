console.log('session_35')

// function declaration
function printMyName() {
    console.log('Khangaikhuu')
}

// function call
printMyName()

// function parameters

function printAnyName (firstName) {
    console.log('My name is: ' + firstName)
}


printAnyName('Buyanaa')

function printFullName(firstName, lastName) {
    console.log('My name is: ' + firstName + ' ' + lastName)
}

printFullName('Oyunbold', 'Naranjargal')

// function with default parameters

function calculateSquareArea(width, height = 16) {
    console.log('Square Area is: ' + (width * height));
}

calculateSquareArea(8, 20);

calculateSquareArea(8) // 128

// function return
function myFunction(a,b) {
    return a * b;
}

console.log(myFunction(10,10))

function addTwoNumbers(a,b){
    return a + b
}

console.log(addTwoNumbers(10,15))

// function expression - anonymous function

let calculateCircleArea = function(radius){
    return 2 * 3.14 * radius;
}

console.log(calculateCircleArea(10.5))

// exercises 
// a, b, c gedeg parametr awdag anonymous function bicheed neg huwisagchid hadgalaarai
// Tegeed ene 3 iin dundjiig ni olood butsaadag bolgooroi. funktsee duudaj utguud ogj testleerei

let dundaj = function(a,b,c) {
    return (a + b + c) / 3
}

console.log(dundaj(10,7,4)) 

// function expression = arrow function
let fahrenheitToCelsius = (fahrenheit) => {
    return (32 - fahrenheit) * 5/9
}

console.log(fahrenheitToCelsius(212)) //
// this does not work
// fahrenheitToCelsius(100); this rule is against hoisitng of javascript
// function declaration vs function expression
console.log(funcExpression())
//  function declaration
function funcExpression(){
    return 1;
}
console.log(funcExpression())

/// function expression
// hoisting javascript

console.log(a)
let a = 1

(
    function callMe(){
        console.log('called my self')
    }
)();

// global scoped variable

let global = 'global variable'

function readglobal(){
    console.log(global)
}

function readlocal () {
    let local = 'Local variable'
    console.log(local)
};

//  console.log(local)

(function () {
    let str = '42'
    
})
readlocal()

let str = '42'
let numm = parseInt

(
    function(){
        let str = '42'
    }
);

// examle -3
(
    function(){
        let num = 42;
        let str = num.toString()
        console.log(str)
    }
)();

// js operations comparison operatiosn
(
    function(){
        console.log('2' = 2)
        console.log('2' === 2) // false
    }
)();

// js logical operators

(
    function(){
        // And
        
    }
)();
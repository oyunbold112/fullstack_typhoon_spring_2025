// different data type
var yourAge = 18;
var yourHeight = 1.65;
var isTrue = true;
var isFalse = false;
var undefinedVar;
var isNull = null;

console.log(yourAge);
console.log(yourHeight);
console.log(isTrue);
console.log(isFalse);
console.log(undefinedVar);
console.log(isNull);

// typeof - function
console.log(typeof(1.6))
console.log(typeof(yourAge));
console.log(typeof(yourHeight));
console.log(typeof(isTrue));
console.log(typeof(isFalse));
console.log(typeof(undefinedVar));
console.log(typeof(isNull));

// conversion of types
// number -> string
// string -> number
// string -> boolean
// boolean -> string

// scope tei variable

let numberString = '1.6';
console.log(numberString)
console.log(typeof numberString)

let parsedNumber = parseInt(numberString)
console.log(parsedNumber)
console.log(typeof parsedNumber)

// string concatenation
console.log('1.6' + '2.7')
console.log(1.6 + 2.7)

console.log(1.7 + '2')
console.log(2 + '1.7')

// prompt-oor ooriinhoo nasiig awaad tuun deer 
// tuun deer 1-iig nemeed
// i will be next year 18

var age = prompt('How old are you?');

console.log('I will be next year ' + (parseInt(age) + 1));

// fix the errors

console.log("Something is wrong with the code! find the error and fix it!")

prompt("What is today's date?")
alert('Have a wonderful day!')


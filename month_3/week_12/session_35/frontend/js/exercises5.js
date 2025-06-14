function helloWorld() {
    console.log('Hello World')
}

helloWorld()

function square(a) {
    return a ** 2
}

console.log(square(100))

function celsiusToFahrenheit (celsius) {
    return (celsius * 9/5) + 32
}

console.log(celsiusToFahrenheit(100))

function squareOfRect (a,b) {
    return a * b
}

console.log(squareOfRect(10,9))

function reverse3 (a) {
    a = a.toString()
    return a[2] + a[1] + a[0]
}

console.log(reverse3(123))

function checkPalindrome() {
    //
    
}

function savingsInterest (ehniiUldegdel, interest, duration) {
    return ehniiUldegdel * interest * duration
}

console.log(savingsInterest(1000, 0.1, 5))

function randomNum(a, b) {
    // 
    let firstNumber = prompt('Give me first number')
    let secondNumber = prompt('Give me second number')
    
    // 1 - 10 ----> 10, 8 random too
    document.write(Math.floor(Math.random() + firstNumber * secondNumber))
    
}

randomNum()

// recursive function

function factorial (a) {
    if (number == 0) {
        return 1
    } else if (number === 1) {
        return 1
    } else {
        return number * factorial(number - 1);
    }
}

document.
document.write('Factorial of : ' + factorial(5))

function countVowel () {
    //
}

function primeNumber () {
    //
}




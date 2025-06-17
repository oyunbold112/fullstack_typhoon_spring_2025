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

function checkPalindrome(input) {
    console.log(input)
    console.log(input.length)
    let reverseInput = ''
    for(let i = input.length - 1; i >= 0; i--) {
        reverseInput += input[i]
    }
    console.log(reverseInput == input)
}

console.log(`Is it palindrom: ${checkPalindrome('aba')}`)

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

// function factorial (a) {
//     if (number == 0) {
//         return 1
//     } else if (number === 1) {
//         return 1
//     } else {
//         return number * factorial(number - 1);
//     }
// }
// document.write('Factorial of : ' + factorial(5))


console.log('egshig tool')
function countVowel (word) {
    // 
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if ('a' == word[i] || 'e' == word[i] || 'o' == word[i] || 'i' == word[i] || 'u' == word[i]) {
            count++
        }
    }
    return count;
}

console.log(countVowel('aeiou'))

function primeNumber (number) {
    if (1 >= number) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true;
}

console.log(`the number is prime ${primeNumber(7)}`)




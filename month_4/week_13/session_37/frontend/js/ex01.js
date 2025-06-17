//  exercise 01

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('gurawTaw')
    }
    else if (i % 3 == 0) {
        console.log('guraw')
    }
    else if (i % 5 == 0) {
        console.log('taw')
    }
    else {
        console.log(i)
    }
}


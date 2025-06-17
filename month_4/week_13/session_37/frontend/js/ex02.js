const randomNumber = 4;
console.log(randomNumber)

let oroldlogo = 1
while (oroldlogo <= 3) {
    let too = prompt('Too ogno uu!')
    if (parseInt(too) === randomNumber) {
        console.log('Ta yallaa!')
        break;
    }
    if (oroldlogo === 3) {
        console.log('Ta hojigdlooo!')
    }
    oroldlogo++;
}
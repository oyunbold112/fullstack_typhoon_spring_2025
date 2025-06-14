function welcome() {
    // neriig asuugaad hadgalaad 
    let myName = prompt('Chamaig hen gedeg we?')
    //  welcome id-tai element deer haruulna uu
    let welcome = document.getElementById('welcome')
    // string concatenation
    welcome.textContent = 'Welcome ' + myName + ' to the Javascript'

}

function changeColor() {
    // ehleed nadaas yamar ongoor huudasnii ongiig budahiig asuuna
    let givenColor = prompt('Background ongo ogno uu?')
    // Herwee ter ongo ni har ongo baiwal uuchlaarai ta oor ongo ogno uu geed dahiad oor ongo asuuuna
    console.log(givenColor)
    // Ternary operator
    givenColor
    = givenColor === 'black' 
    ? prompt('Black is not allowed. Give me different color') 
    : givenColor;
    // Herwee haraas oor ongo baiwal tuhain ongiig huudasnii ar taliin ongoor ni solino
    // elementiin css buyu styliig ni oorchloh
    document.getElementById('main-content').style.backgroundColor = givenColor;  // assignment
}


// html deeree shineer button uusgeed tuuniiigee ask-age gedeg idtai bolgood findTeenage gedeg funktseer ddarah
// uyd ni duuddag bolgooroi
// shineer ene buttoni door ni is-teenager gedeg udtai dive elenent uusgene.

// Js deeree ask-age gedeg idtei button darah uyd darah uyd nas asuugaaad daraah nohtsliig shalgaj baigaad
// tanii yamar nasnii angilald orohiig haruuldag bolgono. uundee is-teenager gedeg div elementee ashiglaarai

function findTeenage() {
    let age = prompt('How old are you?')
    age
    = age >= 0 && age <= 12
    ? 'you are a baby'
    : age
    age 
    = age >= 13 &&  age <= 19
    ? 'You are a teenager'
    : age
    age
    = age >= 20 && age <= 65
    ? 'you are an adult'
    : age
    age
    = age >= 66 && age <= 99
    ? 'you are a senior'
    : age
    age
    = age >= 100
    ? 'you are a dinosaur'
    : age
    document.getElementById('is-teenager').textContent = age

}

// ternary operator ashiglan herwee ogogdson nas ni 0-13 nasnii hoorond baiwal "You are baby"
// 13-19 nasnii hoorond "You are teenager"
// 20-65 nasniii hoorond "You are an adult"
// 65-99 nasnii hooorond "You are a senior"
// 100-aas deesh bol "You are a dinosaur" gej huudsan deer haruuldag bolgono.


function calculateNaadam(horsePlaces, bukhColor, howManyWins) {
    let point = 0;
    // Morinii bair shalgah
    switch(horsePlaces) {
        case 1:
            point+=50;
            break;
        case 2:
            point+=40;
            break;
        case 3:
            point+=30;
            break;
        case 4:
        case 5:
            point+=20;
            break;
        default:
            console.log('Buruu bair');
            return;
    }
    // Bulkhiin ongo shalgah
    if (bukhColor === 'red') {
        if (howManyWins >= 4) {
            point *= 2;

        } else if (howManyWins >= 2) {
            point += 20
        }
    } else if (bukhColor === 'tsenher') {
        if (howManyWins >= 3) {
            point+=30;
        } else {
            point += 10;
        }
    }
    return point;
}

console.log(calculateNaadam(3, 'red', 5))
console.log(calculateNaadam(4, 'tsenher', 2))

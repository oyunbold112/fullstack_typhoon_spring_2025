/**
 * ene dasgalaar 3 oor ongiin dalbaa hiis ystoi
 * dalbaanii ongo buriig hereglechgdiin garaas awah bogood setAttribute ashiglaad
 * dalbaand ongo oruulna uu
 * 
 */

let colorOne = prompt('ehnii ongo')
let colorTwo = prompt('hoyrdahi ongo')
let colorThree = prompt('gurawdah ongo')

let divOne = document.getElementById('color-one')
let divTwo = document.getElementById('color-two')
let divThree = document.getElementById('color-three')

divOne.setAttribute('style', `background-color: ${colorOne};`)
divTwo.setAttribute('style', `background-color: ${colorTwo};`)
divThree.setAttribute('style', `background-color: ${colorThree};`)

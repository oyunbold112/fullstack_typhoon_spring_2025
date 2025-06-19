console.log('we are building a new button')
let text = prompt('What would you like to say the button')

let button = document.createElement('button')
button.innerHTML = text;

// add into button-box
document.getElementById('button-box').appendChild(button);

// text area bolon input-tei 2 torliin element oruulaad
// button-box deer oruulj irne uu
// ene elementuud ni undsen tekstuugtei baina.

let text_area = document.createElement('textarea')
let input = document.createElement('input')
text_area.placeholder = 'This is text area text'
input.placeholder = 'This is input'

document.getElementById('button-box').appendChild(text_area);
document.getElementById('button-box').appendChild(input);


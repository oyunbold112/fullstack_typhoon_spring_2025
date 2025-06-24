/**
 * make button gedeg funkts uusgeed
 * parametn ni text awdag baina.
 * keyboard deer shineer button element uusgeed
 * tuunii tekst deer ni textiin utgiig ogdog baina.
 * margin: 5px;
 * padding: 8px 12px;
 * baihaar ogno uuu.
 * Enehuu funktsiig 2 udaa duudaj a, b gedeg button uusgene uu
 * 
 */
const keyboard = document.getElementById('keyboard')

function makeButton (text) {
    let button = document.createElement('button')
    button.innerHTML = text
    button.style = 'margin: 5px; padding: 8px 12px;';
    keyboard.appendChild(button)
}
let alpha = ['q','w','e','r','t','y','u','i','o','p','a','s',
    'd','f','g','h','j','k','l',';','\'',
    'z','x','c','v','b','n','m', ',','.', 'space'];

for (let i = 0; i < alpha.length; i++) {
    makeButton(alpha[i]);
}

const textBox = document.getElementById('textbox');

function makeText() {
    if (this.innerHTML == 'space') {
        textBox.innerHTML += '     ';
    }
    else {
        textBox.innerHTML += this.innerHTML;
    }
}

let buttons = document.getElementsByTagName('button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', makeText)
}


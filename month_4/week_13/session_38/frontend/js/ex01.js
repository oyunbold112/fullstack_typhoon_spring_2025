/**
 * h4 tag uusgeed tuuniigee ene oyutnuudiig nerniii
 * omno tald oruulahdaa typhoon class gedeg
 * teksttei bolgoj oruulna uu
 * gehdee enehuu tekstiig h2 gedeg tag-iin 
 * dood tald oruulj haruulna uu
 * uundee omno tald ni oruulah gedeg insert before gedeg dom element
 * funktsiig ashiglana uu
 * tegeed oriingoooneriig hamgii 
 */

const classWindow = document.getElementById('class-window')
let header = document.createElement('h4')
header.innerHTML = 'Typhoon class'
let classlist = document.getElementById('class-list')

classWindow.insertBefore(header, classlist);

let myName = document.createElement('li');
myName.innerHTML = 'Oyunbold';
classlist.appendChild(myName);
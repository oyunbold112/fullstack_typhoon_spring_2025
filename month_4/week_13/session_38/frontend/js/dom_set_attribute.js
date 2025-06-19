/**
 * shineer p element uusgeed 
 * doorhi listeer haragdaj baigaa
 * tekstuudiig oruulna uu
 * setAttribute('style', 'font-size: 7px')
 * gedeg funktseer ehnii haragdaj baigaagaar
 * haruulna uu
 * daraagiinh ni bol 
 * setAttribute ashiglan class deer ni 
 * footNote classiig oruulj haruulaarai.
 * 
 */

let p1 = document.createElement('p')
p1.innerHTML = '1. From page 5 of Frankenstein'
p1.setAttribute('style', 'font-size: 7px')
p1.setAttribute('class', 'footNote')

let p2 = document.createElement('p')
p2.innerHTML = '2. From page 4 of Frankenstein'
p2.setAttribute('style', 'font-size: 7px')
p2.setAttribute('class', 'footNote')

let body = document.getElementsByTagName('body')
body[0].appendChild(p1)
body[0].appendChild(p2)
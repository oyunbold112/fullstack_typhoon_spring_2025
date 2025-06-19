/**
 * 
 */

let weekOne = document.getElementById('tasks')
let daysOne = weekOne.children

daysOne[0].innerHTML = 'Kickbox'
daysOne[1].innerHTML = 'Fullstack'
daysOne[2].innerHTML = 'Kickbox'
daysOne[3].innerHTML = 'Fullstack'
daysOne[4].innerHTML = 'Kickbox'


let weekTwo = document.createElement('tr')
for (let i = 0; i < 5; i++) {
    let daysTwo = document.createElement('td')
    daysTwo.innerHTML = 'Sleep'
    weekTwo.appendChild(daysTwo)
}
document.getElementById('chores').appendChild(weekTwo)


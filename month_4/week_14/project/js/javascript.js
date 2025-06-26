let toonuud = document.getElementsByClassName('white')
let ulaanoperatoruud = document.getElementsByClassName('red')
let tsenher_operatoruud = document.getElementsByClassName('blue')
let first = document.getElementById('first')
let second = document.getElementById('second')
let second_utga = 0
let first_utga = 0
let uildel = ''
for (let i = 0; i < toonuud.length; i++) {
    toonuud[i].addEventListener('click', function(){
        second.innerHTML += this.children[1].innerHTML
        second_utga = second.innerHTML
    })
}

for (let i = 0; i < ulaanoperatoruud.length; i++) {
    console.log(ulaanoperatoruud)
    ulaanoperatoruud[i].addEventListener('click', function(){
        console.log(ulaanoperatoruud[i].id)
        let Aidi = this.id
        if (Aidi == 'hasah') {
            first.innerHTML = second_utga
            first_utga = first.innerHTML
            let operator = document.createElement('img')
            operator.src = './imgs/subtraction-icon.svg'
            first.appendChild(operator)
            console.log(first.children)
            second.innerHTML = null
            uildel = this.id
        }
        else if (Aidi == 'urjih') {
            first.innerHTML = second_utga
            first_utga = first.innerHTML
            let operator = document.createElement('img')
            operator.src = './imgs/multiplication-icon.svg'
            first.appendChild(operator)
            console.log(first.children)
            second.innerHTML = null
            uildel = this.id
        }
        else if (Aidi == 'nemeh') {
            first.innerHTML = second_utga
            first_utga = first.innerHTML
            let operator = document.createElement('img')
            operator.src = './imgs/add-icon.svg'
            first.appendChild(operator)
            console.log(first.children)
            second.innerHTML = null
            uildel = this.id
        }
        else if (Aidi == 'huwaah') {
            first.innerHTML = second_utga
            first_utga = first.innerHTML
            let operator = document.createElement('img')
            operator.src = './imgs/division-icon.svg'
            first.appendChild(operator)
            console.log(first.children)
            second.innerHTML = null
            uildel = this.id
        }
    })
}

for (let i = 0; i < tsenher_operatoruud.length; i++) {
    tsenher_operatoruud[i].addEventListener('click', function(){
        let aidi = this.id
        if (aidi == 'ac') {
            second_utga = null
            first_utga = null
            first.innerHTML = null
            second.innerHTML = null
        }
        else if (aidi == 'c') {
            second_utga = null
            second.innerHTML = null
        }
        else if (aidi == 'huwi') {
            first.innerHTML = second_utga
            first_utga = first.innerHTML
            let operator = document.createElement('img')
            operator.src = './imgs/percent-icon.svg'
            first.appendChild(operator)
            console.log(first.children)
            second.innerHTML = null
            uildel = this.id
        }

    })
}

// Tentsuu
let tentsuu = document.getElementById('tentsuu')
tentsuu.addEventListener('click', function(){
    if (uildel == 'hasah') {
        let hariu = first_utga - second_utga
        second.innerHTML = hariu
        first_utga = 0
        first.innerHTML = null
        second_utga = hariu
        console.log(second_utga)
    }
    else if (uildel == 'urjih') {
        let hariu = first_utga * second_utga
        second.innerHTML = hariu
        first_utga = 0
        first.innerHTML = null
        second_utga = hariu
        console.log(second_utga)
    }
    else if (uildel == 'nemeh') {
        let hariu = parseFloat(first_utga) + parseFloat(second_utga)
        second.innerHTML = hariu
        first_utga = 0
        first.innerHTML = null
        second_utga = hariu
        console.log(second_utga)
    }
    else if (uildel == 'huwaah') {
        let hariu = first_utga / second_utga
        second.innerHTML = hariu
        first_utga = 0
        first.innerHTML = null
        second_utga = hariu
        console.log(second_utga)
    }
    else if (uildel == 'huwi') {
        let hariu = (first_utga / 100) * second_utga
        second.innerHTML = hariu
        first_utga = 0
        first.innerHTML = null
        second_utga = hariu
        console.log(second_utga)
    }
})
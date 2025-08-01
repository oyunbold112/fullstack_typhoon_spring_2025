let toonuud = document.getElementsByClassName('too')
let ulaanoperatoruud = document.getElementsByClassName('red')
let tsenher_operatoruud = document.getElementsByClassName('blue')
let first = document.getElementById('first')
let second = document.getElementById('second')
let second_utga = 0
let first_utga = 0
let uildel = ''

window.addEventListener('DOMContentLoaded', function(){
    setTheme()
})

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

let themeButtons = document.getElementById('theme')

for (let i = 0; i < themeButtons.children.length; i++) {
    console.log(themeButtons.children[i])
    themeButtons.children[i].addEventListener('click', function(){
        if (this.id === 'dark') {
            localStorage.setItem('theme', 'dark')
        }
        else {
            localStorage.setItem('theme', 'light')
        }
        setTheme()
    })
    
}

function setTheme () {
    if (localStorage.theme === 'light') {
        console.log('working')
        let container = document.getElementById('container')
        let header = document.getElementsByClassName('header')
        let keyboard = document.getElementsByClassName('keyboard')
        let theme = document.getElementsByClassName('theme')
        let first = document.getElementById('first')
        let second = document.getElementById('second')
        let teg = document.getElementById('teg')
        teg.children[0].setAttribute('src', './imgs/Rectangle 4 (2).svg')
        first.classList.add('light')
        second.classList.add('light')
        theme[0].classList.add('light-theme-buttons')
        theme[0].children[0].setAttribute('src', './imgs/dark-mode-not-active.svg')
        theme[0].children[1].setAttribute('src', './imgs/light-mode-icon (1).svg')
        keyboard[0].classList.add('light-keyboard')
        header[0].children[0].classList.add('light')
        container.classList.add('light')
        let numbers = document.getElementsByClassName('too')
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].classList.add('light')
        }
        let svgs = document.getElementsByTagName('svg')
        for (let i = 0; i < svgs.length; i++) {
            console.log(svgs[i].children[0].children[0])
            svgs[i].children[0].children[0].setAttribute('fill', 'white')
        }
    }
    else {
        console.log('working')
        let container = document.getElementById('container')
        let header = document.getElementsByClassName('header')
        let keyboard = document.getElementsByClassName('keyboard')
        let theme = document.getElementsByClassName('theme')
        let first = document.getElementById('first')
        let second = document.getElementById('second')
        let teg = document.getElementById('teg')
        teg.children[0].setAttribute('src', './imgs/Rectangle 4 (1).svg')
        first.classList.add('dark')
        second.classList.add('dark')
        theme[0].classList.add('dark-theme-buttons')
        theme[0].children[0].setAttribute('src', './imgs/dark-mode-icon.svg')
        theme[0].children[1].setAttribute('src', './imgs/light-mode-icon.svg')
        keyboard[0].classList.add('dark-keyboard')
        header[0].children[0].classList.add('dark')
        container.classList.add('dark')
        let numbers = document.getElementsByClassName('too')
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].classList.add('dark')
        }
        let svgs = document.getElementsByTagName('svg')
        for (let i = 0; i < svgs.length; i++) {
            console.log(svgs[i].children[0].children[0])
            svgs[i].children[0].children[0].setAttribute('fill', '#2B2D35')
        }
    }
}
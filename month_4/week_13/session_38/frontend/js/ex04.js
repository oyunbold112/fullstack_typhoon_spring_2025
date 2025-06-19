/**
 * 7*7 haritsaatai shatriin holog hiine uu
 * gehdee zowhon js ashiglah bogood
 * html deer yu ch nemehgui.
 * div bolgonii orgon ni 60px baina.
 * Ehnii nud ni har ongotei baina.
 */

let body = document.getElementsByTagName('body')
let parent = document.createElement('div')

for (var i = 0; i < 49; i++) {
    // add your divs here
    // if (i > 7 && i < 15) {
    let div = document.createElement('div')
    // }
    if (i % 2 == 0) {
        div.setAttribute('style', 'width: 60px; height: 60px; background-color: black; display: flex; justify-content: center; align-items:center;')
    }
    else {
        div.setAttribute('style', 'width: 60px; height: 60px; background-color: red; display: flex; justify-content: center; align-items:center;')
    }
    if (i === 2 || i === 5 || i === 44 || i === 47) {
        let img = document.createElement('img')
        img.setAttribute('src', 'imgs/bishop.png')
        img.setAttribute('style', 'height: 80%; width: 80%;')

        div.appendChild(img)
    }

    else if ((i > 6 && i < 14) || (i > 34 && i < 42)) {
        let img = document.createElement('img')
        img.setAttribute('src', 'imgs/pawn.png')
        img.setAttribute('style', 'height: 65%; width: 65%;')
        div.appendChild(img)
    }
    else if (i === 0 || i === 42) {
        let img = document.createElement('img')
        img.setAttribute('src', 'imgs/rook.png')
        img.setAttribute('style', 'height: 75%; width: 70%;')
        div.appendChild(img)
    }
    else if (i === 1 || i === 6 || i === 43 || i === 48) {
        let img = document.createElement('img')
        img.setAttribute('src', 'imgs/knight.png')
        img.setAttribute('style', 'height: 80%; width: 65%;')
        div.appendChild(img)
    }
    else if (i === 3 || i === 45)  {
        let img = document.createElement('img')
        img.setAttribute('src', 'imgs/queen.png')
        img.setAttribute('style', 'height: 80%; width: 80%;')
        div.appendChild(img)
    }
    else if (i === 4 || i === 46)  {
        let img = document.createElement('img')
        img.setAttribute('src', 'imgs/king.png')
        img.setAttribute('style', 'height: 80%; width: 80%;')
        div.appendChild(img)
    }
    
    
    


    parent.appendChild(div)
}

parent.setAttribute('style', 'display: grid; grid-template-columns: repeat(7, 1fr); grid-template-rows: repeat(7, 1fr); width: 420px; height: 420px;')
body[0].appendChild(parent)

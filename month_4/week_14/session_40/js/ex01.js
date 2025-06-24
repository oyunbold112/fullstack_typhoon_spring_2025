/**
 * Zowhon addEventListener ashiglaad 
 * daraah uildliig hiideg bolgono uu
 * Herwee bi tsenher dorwoljinguud der click
 */

const divs = document.getElementsByTagName('div')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(element){
        element.target.style.background = 'red';
    })
}


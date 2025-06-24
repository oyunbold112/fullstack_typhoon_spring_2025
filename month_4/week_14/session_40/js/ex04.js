/**
 * 100 shirheg shatriin holgiin hemjeetei
 * div js eer uusgene uu.
 * tegeed tuuniiigee body deer ni append hiine uu
 * herwee neg shirheg div deer hulgana
 * onmouseover gedeg event uusgewel
 * eswel js deer mouseover gedeg eventListener uusgewel
 * tuhain nudiig duriin ongoor
 * buddag bolgooroi gehdee uund paint gedeg funkts ashiglana uu.
 * enehuu funkts ni math.random
 * ashiglaad 0-1 iin hoorond too uusgedeg baina.
 * enehuu funktsiig ashiglaad duriin ongo uusgedeg bolgooroi.
 * magadgui ongonii list/array uusgej boloh ymaa
 * tgd tuhain ongonii tsugluulgaas ongiig ni ylgaad div bolgon deer hulganaar ochihod 
 * oor ongotei bolgodog bolgooroi.
 */

const body = document.getElementsByTagName('body')
for (let i = 0; i < 100; i++) {
    const nud = document.createElement('div')
    nud.addEventListener('mouseover', paint)
    body[0].appendChild(nud)
}

function paint () {
    let colors = ['black', 'yellow', 'red', 'orange', 'blue', 'green']
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    this.style.background = colors[randomnumber]
}


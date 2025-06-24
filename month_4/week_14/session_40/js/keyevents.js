document.body.addEventListener('keydown', maketext)

function maketext(e) {
    let div = document.getElementById('textbox')
    if (e.key != 'Shift') {
        let keytext = e.key
        let text = div.innerHTML;
        text += keytext
        div.innerHTML = text;
    }
}
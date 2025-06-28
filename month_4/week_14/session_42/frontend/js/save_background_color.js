window.addEventListener('DOMContentLoaded', function(){
    let saveColor = localStorage.getItem('background-color');
    if (saveColor) {
        this.document.body.style.backgroundColor = saveColor;
    }
    const changeColorButton = this.document.getElementById('change-background');
    changeColorButton.addEventListener('click', function(){
        let newColor = prompt('Enter a color name or a hex code(e.g., blue, #ff0000):');
        // Exercises herwee hereglegch garnaas utga ogwol tuhain ongiig local storage deer
        // hadgalaad daraa ni ariin ongiin ni ongonii oorchildog bolgono uu.
        // huudsiig refresh hiih uyd suuliin ongoor ariin ongo haragdah ystoi.
        if (newColor) {
            localStorage.setItem('background-color', newColor)
        }
    });
})


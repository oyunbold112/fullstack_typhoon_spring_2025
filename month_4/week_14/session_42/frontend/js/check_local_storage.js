document.getElementById('progress-button').addEventListener('click', function(){
    let progressElement = document.getElementById('progress');
    progressElement.style.display = 'block';
    setTimeout(function(){
        progressElement.style.width = '300px';
        checkLocal();
    }, 2000);
    // exercise
    // animation ashiglaad tuhain nogoon progress bar-iig aajuuhan orgonooo ihesgej baigaag haruuldag bolgono uu
})

function checkLocal(){
    if(typeof(Storage) !== undefined) {
        document.getElementById('local-storage').textContent = 'Your browser supports local storage!'
    } else {
        document.getElementById('local-storage').textContent = 'Your browser does not support local storage! Try using a new browser for this unit :('

    }
}
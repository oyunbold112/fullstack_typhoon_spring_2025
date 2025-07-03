// function dependent on function

function funcA1(){
    setTimeout(() => {
        console.log('A1')
    }, 1000)
}

// callback fun

function funcA2(funA1){
    setTimeout(() => {
        funA1();
        console.log('A2');
    }, 2000)
}

// funcA3 gedeg funkts todorhoilood tuundee a2 gedeg funkts 
// caback aar ogood tuuniigee a2 gej hewledeg bolgooroi
// gehdee tuuniigee bas funa2 gedeg parameteraar ogson
// callbakc() funktsuu duuddag bolgooroi

function funcA3(funA2){
    setTimeout(() => {
        funA2(funcA1);
        console.log('A3')
    }, 3000)
}
funcA3(funcA2)

const button = document.getElementById('click-me');

button.addEventListener('click', buttonClicked);


function buttonClicked() {
    console.log('button is clicked');
}


// constant variable

let PI = 3.14;
console.log(PI)

PI = 3.45

// constant variable - ES6

const SPEED_OF_LIGHT = 299_792_458;
console.log(SPEED_OF_LIGHT)

// SPEED_OF_LIGHT = 300_000_000
// console.log(SPEED_OF_LIGHT)

// const a; forbidden bolohgui

const COLORS = ['yellow', 'red', 'green', 'purple', 'black'];

// Loop

for (let i = 0; i < 6; i++) {
    console.log(`Color at index : ${i} = ${COLORS[i]}`);
}

// show colored spans

for (let i = 0; i < COLORS.length; i++) {
    document.writeln(`<div style="background: ${COLORS[i]};
    height: 20px; width:30px;">
        
    </div>`)
}


// Exercises
// 3 shirheg zuragnii linktei array uusgeed tuuniigee
// html deeree doosh ni tsuwuulj haruulna uu.

let links = ['oo.jpg', 'ooo.jpg', 'oooo.avif']
for (let i = 0; i < links.length; i++) {
    document.writeln(`<img src="${links[i]}" width="700px" height="700px">`);
}


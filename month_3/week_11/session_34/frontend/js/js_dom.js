// powerful characters

let yourName = prompt("What is your name?");

// connect h1 element with js
// Dom - getElementById

let welcome = document.getElementById('welcome');
console.log(welcome);

welcome.textContent = 'Welcome to JS DOM, ' + yourName;

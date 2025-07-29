const button = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('input') as HTMLInputElement;

button.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text'
    }
    else {
        input.type = 'password'
    }
    if (button.innerHTML == 'haruulah') {
        button.innerHTML = 'nuuh';
    }
    else {
        button.innerHTML = 'haruulah';
    }
});
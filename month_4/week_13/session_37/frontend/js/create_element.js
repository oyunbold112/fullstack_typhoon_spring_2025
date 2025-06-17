const books = ['Tungalag tamir', 'Dulguun Don', 'Harry Potter']

const mainElement = document.getElementsByTagName('main');
console.log(mainElement);

// buh nomnuudiin font size ni 30px
// Ongo ni tsenher 
// border radius tai bas buh tekstuuud ni towdoo goldoo
// orohoor haruuln uu

for (let i = 0; i < books.length; i++) {
    // new p element for showing book title
    const pElement = document.createElement('p')
    pElement.style =  'font-size: 30px; border: 2px solid black; border-radius: 10px; text-align: center; color: blue;';
    pElement.classList.add('books');
    pElement.textContent = books[i];
    mainElement[0].appendChild(pElement);
}
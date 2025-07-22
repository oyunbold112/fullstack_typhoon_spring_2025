let numbers = [40, 10, 100, 20, 5]

// ascending - osgoh

let ascending =  numbers.slice().sort((a, b) => a - b);
console.log('Ascending : ', ascending)  // [5, 10, 20, 40, 100]

// descending - buurah 

let descending =  numbers.slice().sort((a, b) => b-a);
console.log('Descending : ',descending)  // [5, 10, 20, 40, 100]

let myProducts = [
    {name: 'Phone', price: 800},
    {name: 'Laptop', price: 1200},
    {name: 'Tablet', price: 600}
];

// sort by price
let byPriceAsc = myProducts.slice().sort((a, b) => a.price - b.price);
console.log('Ascending', byPriceAsc)

// sort by price
let byPriceDesc = myProducts.slice().sort((a, b) => b.price - a.price);
console.log('descending', byPriceDesc)

let byName = myProducts.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log('Name: A-Z:', byName);


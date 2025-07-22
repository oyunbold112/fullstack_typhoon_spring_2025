let globalData = []

const loadingText = 'Reading.....'
const PRODUCT_URL = 'https://dummyjson.com/products/search?q'

const categorySelect = document.getElementById('category-select')

function filterAndDisplay() {
    const selectedCategory = categorySelect.value;
    const filtered = globalData.filter((product) => {
        const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
        return matchesCategory;
    })

    displayData(filtered);

}

function fetchData(searchTerm='') {
    try {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<div class="loading"></div>`
        fetch(`${PRODUCT_URL}${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            globalData = data.products;
            console.log(globalData)
            displayData(globalData);
        });
    } catch(error) {
        console.error('Error during fetch')
        document.getElementById('results').innerHTML =
        '<div class="loading">Error occured. Please try again.</div>'
    }
}

function displayData(products) {
    const resultDiv = document.getElementById('results')
    resultDiv.innerHTML = '';
    if (products.length === 0) {
        resultDiv.innerHTML = '<div class="loading">Product not found</div>'
        return;
    }  
    products.forEach(product => {
        const itemDiv = document.createElement('div')
        itemDiv.className = 'item'
        itemDiv.innerHTML = `
        <img src="${product.thumbnail}" alt=${product.title}/>

        <h3>${product.title}</h3>
        <p>Price:${product.price}</p>
        <p>Brand:${product.brand}</p>
        <p>category:${product.category}</p>
        <p>Rating: ${product.rating}</p>
        <p>${product.description}</p>
        `;
        resultDiv.appendChild(itemDiv);
    });
}   

const searchData = () => {
    const searchTerm = document.getElementById('searchInput').value;
    fetchData(searchTerm);
}

function debounce(func, timeout = 3000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), timeout);
    }
}

const debouncedSearch = debounce(searchData);

document.getElementById('searchButton').addEventListener('click', searchData);
document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchData()
    }
    else {
        debouncedSearch();
    }
})

categorySelect.addEventListener('change', filterAndDisplay);




fetchData();


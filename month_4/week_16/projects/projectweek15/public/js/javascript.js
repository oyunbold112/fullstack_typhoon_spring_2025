console.log('Oyunbold')

const POST_API = 'https://jsonplaceholder.typicode.com/posts';
const postPromise = fetch(POST_API);
const mainElements = document.getElementsByTagName('main')
const searchElement = document.getElementById('search')
const postsTitleArray = []
const postsElement = document.getElementById('posts')
let postData = []

postPromise
    .then((response) => {
        const data = response.json();
        console.log(data)
        return data
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div')
            div.classList.add('post')
            let idElement = document.createElement('h2')
            idElement.innerHTML = data[i].id
            let titleElement = document.createElement('h1')
            titleElement.innerHTML = data[i].title
            let bodyElement = document.createElement('p')
            bodyElement.innerHTML = data[i].body
            div.appendChild(idElement)
            div.appendChild(titleElement)
            div.appendChild(bodyElement)
            postsElement.appendChild(div)
            postsTitleArray.push(data[i].title)
            postData.push({title: data[i].title, body: data[i].body, id: data[i].id})
        }
        console.log(postData)
        
    })

searchElement.addEventListener('keydown', function(){
    let posts = document.getElementById('posts')
    let resultData = []
    posts.innerHTML = ''
    posts.style = 'position: absolute;'
    let value = this.value
    const result = postsTitleArray.filter((t) => t.includes(value))

    for (let i = 0; i < postData.length; i++) {
        for (let a = 0; a < result.length; a++) {
            if (postData[i].title == result[a]) {
                resultData.push(postData[i])
                break;
            }
        }
    }
    posts.style = 'position: relative;'
    for (let i = 0; i < resultData.length; i++) {
            let div = document.createElement('div')
            div.classList.add('post')
            let idElement = document.createElement('h2')
            idElement.innerHTML = resultData[i].id
            let titleElement = document.createElement('h1')
            titleElement.innerHTML = resultData[i].title
            let bodyElement = document.createElement('p')
            bodyElement.innerHTML = resultData[i].body
            div.appendChild(idElement)
            div.appendChild(titleElement)
            div.appendChild(bodyElement)
            posts.appendChild(div)
    }
})
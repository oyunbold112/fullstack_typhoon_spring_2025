console.log('FETCH API')

//  Application Programming Interface

// https://jsonplaceholder.typicode.com/users

const USER_API = 'https://jsonplaceholder.typicode.com/users';
const usersPromise = fetch(USER_API)

usersPromise.then((response) => {
    console.log(response)
    const data = response.json(); // promise
    console.log(data)
    return data
})
.then((data) => {
    console.log(data)
    for(let i = 0; i < data.length; i++) {
        console.log(data[i])
        document.writeln(`<li>${data[i].name}</li>`);
    }
})
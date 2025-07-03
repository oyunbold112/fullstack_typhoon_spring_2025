const promise = new Promise((resolved, rejected) => {
    let isTrue = true
    if (isTrue) {
        resolved()
    }
    else {
        rejected()
    }
})

promise.then((result) => {
    setTimeout(() => {
        console.log('A')
    },1000)
}).then((result) => {
    setTimeout(() => {
        console.log('B')
    },2000)
}).then((result) => {
    setTimeout(() => {
        console.log('C')
    },3000)
}).then((result) => {
    setTimeout(() => {
        console.log('D')
    },4000)
})
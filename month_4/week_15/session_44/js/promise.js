console.log('Promise JS');

const firstPromise = new Promise((resolved, rejected) => {
    const isTrue = true;
    if (isTrue) {
        return resolved('Success')
    }
    else {
        rejected('Error');
    }
});


firstPromise.then((result) => {
    console.log(result)
    return 'B';
}).then((result) => {
    console.log('result')
    return 'C'
}).catch((error) => {
    console.log(error)
})

console.log(firstPromise);

// Shineer exercisePromise uusgeed tuun
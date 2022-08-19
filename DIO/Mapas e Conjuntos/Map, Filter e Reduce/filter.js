function filtrarPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1,2,3,5,22,57,88,34];

console.log(filtrarPares(meuArray));
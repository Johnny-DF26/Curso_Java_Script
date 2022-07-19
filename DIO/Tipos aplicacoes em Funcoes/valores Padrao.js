function exponencial(array,num=1) {
    const result = [];
    for ( i in array) {
        result.push(array[i] ** num);
    }
    return result;
}

console.log(exponencial([1,2,3,4])); // como nao foi passado o num entao será multiplicado por 1.
console.log(exponencial([1,2,3,4],4)); // num foi passado ao paramentro e sera exponenciado por 4.
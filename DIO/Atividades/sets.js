const array = [30,30,40,5,223,2049,5];
console.log(numSets(array));

function numSets(arr) {
    const mySet = new Set(arr);

    //return arr
    return [...mySet];
}
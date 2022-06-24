function fatorital(n){
    let fat = 1
    for(let c = n; c > 1; c--){
    fat *= c
    }
    return fat
}

console.log(fatorital(5))
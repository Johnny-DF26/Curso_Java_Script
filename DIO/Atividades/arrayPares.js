function numeros(array) {
    if (!array) return -1;
    if (!array) return -1;
    for (let c = 0; c < array.length; c++){
        
        if (array[c] === 0) {
            console.log(`Esse numero já é zero!`);
        }
        if (array[c] % 2 === 0){
            console.log(`- ${array[c]} passou a ser zero.`);
            array[c] = 0;
        }
    }
    return array
}


 let lista = [1, 3, 4, 6, 80, 33, 23, 90];
 console.log(numeros(lista));
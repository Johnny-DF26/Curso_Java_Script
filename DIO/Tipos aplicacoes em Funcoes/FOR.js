// function multiplicaDois(array) {
//     let multiplicados = [];
//     for (let i = 0; i < array.length; i++) {
//         multiplicados.push(array[i] * 2);
//     }
//     return multiplicados;
// }

// numeros = [2,4,1,5,22,31,67,92]
// console.log(multiplicaDois(numeros));


// ----------------------------FOR E FOR IN -----------------------------------------------------
/*
function exemplo(obj) {
    for (prop in obj) {
        console.log(obj[prop]); // console.log(prop);
    }
}

const objeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

exemplo(objeto);
*/

//--------------------------------------   FOR OF -----------------------------------------------------

function letras( palavra) {
    for (l of palavra) {
        console.log(l);
    }
}
const palavra = "abacaxi";
letras(palavra)
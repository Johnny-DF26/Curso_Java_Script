//                   ... Rest
//                   Spred ...
//               0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;  // fazendo REST
// const [um, ,tres, ,cinco, ,sete] = numeros;                 // Pula os numeros
// console.log(primeiroNumero, segundoNumero);    
// console.log(um, tres, cinco, sete);
// console.log(resto);

//                  0       1       2
//                0 1 2   0 1 2   0 1 2
const numeros = [[1,2,3],[4,5,6],[7,8,9]];

console.log(numeros[0][2]);
const [,[,,seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
console.log(seis);
console.log(lista3[2]);
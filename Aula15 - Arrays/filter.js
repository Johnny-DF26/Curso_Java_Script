// const numeros = [1, 2, 3, 4, 7, 9];

// // Filter
// const maioresCinco = numeros.filter(function(num) {
//    return num > 5;
// });
// console.log(maioresCinco);


// // Utilizando array function
// const maioresCinco2 = numeros.filter( num => num > 5);
// console.log(maioresCinco2);



//                                                Retorne os números maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const maioresDez = numeros.filter(num => num > 10);
//console.log(maioresDez);


//                                                   iteração em todos os numeros

/*
const maioresDez2 = numeros.filter(function(valor, indice, array) {
   console.log(valor, indice, array);
});
console.log(maioresDez);
*/


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
   {nome: 'Luiz', idade: 62},    // 0
   {nome: 'Maria', idade: 23},   // 1
   {nome: 'Eduardo', idade: 55}, // 2
   {nome: 'Letícia', idade: 19}, // 3
   {nome: 'Rosana', idade: 32},  // 4
   {nome: 'Wallace', idade: 47}, // 5
];

// A
const pessoas5letras = pessoas.filter(obj => obj.nome.length >= 5);
console.log('A- As pessoas com mais de cinco letras no nome sao:\n', pessoas5letras);

// B
const pessoasMais50 = pessoas.filter(obj => obj.idade > 50);
console.log('B- As pessoas com mais de 50 anos são:\n', pessoasMais50);

// C
const pessoasTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log('C- As pessoas que o nome termina com a letra "a" são:\n', pessoasTerminaA);
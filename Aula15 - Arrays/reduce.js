// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // Soma
// const soma = numeros.reduce((ant, prev) => ant + prev);
// console.log(`A soma dos números são:`,soma);

// // Pares
// const pares = numeros.filter(num => num % 2 === 0);
// console.log(`Os números pares são:`,pares);

// // Dobro
// const dobro = numeros.map(num => num * 2);
// console.log(`O dobro dos números são:\n`,dobro);

const pessoas = [
   {nome: 'Luiz', idade: 62},    // 0
   {nome: 'Maria', idade: 23},   // 1
   {nome: 'Eduardo', idade: 55}, // 2
   {nome: 'Letícia', idade: 19}, // 3
   {nome: 'Rosana', idade: 64},  // 4
   {nome: 'Wallace', idade: 47}, // 5
];
// Retorna a pessoa mais velha

const maisVelha = pessoas.reduce((acum, valor) => {
   if (acum.idade > valor.idade) return acum;
   return valor;
});
console.log(maisVelha);

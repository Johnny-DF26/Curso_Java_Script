// Retorne a soma dos dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.filter(num => num % 2 === 0).map(num => num * 2).reduce((ant,prev) => ant + prev);
//console.log(dobro);

//                                                ForEach

const a1 = [1, 2, 3, 4, 5];

for(let valor of a1) {
   //console.log(valor);
}

a1.forEach(valor => {
   //console.log(valor);
});

// Somando com For each
let total = 0;
a1.forEach((valor) => total += valor);
console.log(total);

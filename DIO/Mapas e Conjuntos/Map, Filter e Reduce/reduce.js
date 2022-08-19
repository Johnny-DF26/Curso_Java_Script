// function somaNumeros(arr) {
//     return arr.reduce(function(prev,current) {
//         console.log(prev);
//         console.log(current);
//         return prev + current;
//     });
// }

// const arr = [1, 2];
// console.log(somaNumeros(arr));

const lista = [
    {
        nome:'sabão em pó',
        preco: 30,
    },
    {
        nome: 'sereal',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 0;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(saldoAtual, current, index){
        console.log('rodada', index + 1);
        console.log({saldoAtual});
        console.log({current});
        return saldoAtual + current.preco;
    }, saldoDisponivel);
}

console.log(`Você tem R$:100,00 e comprando esses produtos fica: ${calculaSaldo(saldoDisponivel, lista)}`);
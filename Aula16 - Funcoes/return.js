// return
// Retorna um valor
// Termina a função

// function conta(operacao, num) {
//    if (operacao === 'duplica') return num * 2;
//    if (operacao === 'triplica') return num * 3;
//    if (operacao === 'quadriplica') return num * 4;
// }

// console.log(conta('triplica', 2));
// console.log(conta('quadriplica', 2));

function conta(multplicador) {
   return (n) => n * multplicador;
}

const duplica = conta(2);
const triplica = conta(3);
const quadriplica = conta(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(2));
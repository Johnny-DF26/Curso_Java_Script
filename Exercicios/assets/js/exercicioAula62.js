/* 
    Escreva uma função que receba um número e retorne o seguinte:
número é divisivel por 3 = Fizz
numero é divisivel por 5 = Buzz
numero é divisivel por 3 e por 5 = FizzBuzz
numero não é divisivel por 3 e por 5 = Retorna o proprio numero
Checar se o numero é realmente um número
Use a função com numeros de 0 a 100
*/

/*
function divisiveis() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: FizzBuzz`);
        } else if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(`${i}: ${i}`);
        } else if (i % 3 === 0) {
            console.log(`${i}: Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i}: Buzz`);
        } 
    }
}
divisiveis();
*/

function fizzBuzz(num) {
    if (typeof(num) !== 'number') return NaN;
    if ( num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if ( num % 3 === 0) return 'Fizz';
    if ( num % 5 === 0) return 'Buzz';
    return num;
}

for(let i = 0; i<= 100;i++) {
    console.log(i,fizzBuzz(i));
}
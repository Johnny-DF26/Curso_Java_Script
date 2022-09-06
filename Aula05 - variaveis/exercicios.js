const nome = 'Johnny';
const sobreNome = 'Cleyson';
let idade = 29;
let peso = 70;
let altura = 1.76;
let anoNascimento = 2022 - idade;
const imc = peso / (altura^2);


console.log(`Nome é ${nome} ${sobreNome}.`);
console.log(`Pesa ${peso} e altura ${altura} seu IMC é de: ${imc}.`);
console.log(`Tem ${idade} anos, nasceu em: ${anoNascimento}.`)

// Escreva uma função que recebe 2 números e retorna o maior deles
//####################################################
function maior(numero1, numero2){ 
    let maior;
    if (numero1 > numero2){
        maior = numero1;
    } else if (numero2 > numero1) {
        maior = numero2;
    } else {
        return 'Os números são iguais!';
    }
    return maior;
}

console.log(maior(5,5));
//#####################################################

// Refatoração

// Utilizando identação 
function maior(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
console.log(maior(3,2));
//#####################################################

// Reduzindo o IF
function maior(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log(maior(1,2));
//#####################################################

// Utilizando array function
const max2 = (x,y) => (x > y) ? x : y;
console.log(max2(10,20));

//#####################################################
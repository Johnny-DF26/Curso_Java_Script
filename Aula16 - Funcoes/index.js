// function soma(x=1, y=1) {
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(4,3));

// Função Anonima 
// const raiz = function(num) {
//     return num ** 0.5;
// };
// console.log(raiz(9));

// Função Array
// const raiz2 = num => num ** 0.5;
// console.log(raiz2(9));


// Funcao callback

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function f3() {
//     console.log('f3');
// }

// f1();
// f2();
// f3();
// console.log('Olá mundo !');


// Funções invocáveis (IIFE) - Immediately invoked function expression

(function(idade, peso, altura) {

   const sobrenome = 'Miranda';
   function criaNome(nome) {
    return nome + ' ' + sobrenome;
   } 

   function falaNome() {
    console.log(criaNome('Luiz'));
   }

   falaNome();
   console.log(peso,altura,idade);

})(30,80,1.80);
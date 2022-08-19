/*   
&&      // Irá retornar o (valor) que é falso
||      // Irá retornar o (valor) verdadeiro
FALSY:
    * false
    * 0
    * '' "" ``
    * null / undefined
    * NaN

*/

// console.log('Luiz Otavio' && true && NaN);   // retorna o valor que é false ou true da expressao
// console.log(0 || false || null || 'Luiz Otávio' || true); // retornará o valor da expressao verdadeira


// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);


const a  = 0;
const b  = null;
const c  = false; // Aqui é uma string com frase false
const d  = false;
const e  = NaN;

console.log(a || b || c || d || e );
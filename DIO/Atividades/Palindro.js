// solução 1
function verificarPalindro(string) {
    if (!string) return 'String inexistente';

    return string.split('').reverse().join('') === string
}

let myVar = 'ama'
console.log(verificarPalindro(myVar));

// Solucao 2

function verificarPalindro2(string) {
    if(!string) return 'String inexistente!';

    for ( let i = 0; i < string.length; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindro2('abba'));

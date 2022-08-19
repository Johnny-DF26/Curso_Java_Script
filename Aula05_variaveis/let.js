let mulher = 'Media';
let filho = 'Eduardo';

// Regras:
/*
 Não podemos criar variáveis com palavras reservadas
 Variáveis precisam ter nomes significativos
 Não pode começar o nome de uma variável com um número
 Não pode conter espaços ou traços
 Case-sensitive
 Utiliza-se por boas práticas o camelCase: let nomeCompleto
 Por questoes de segurança não se utiliza mais a variável 'var', mas sim 'let'
*/


// Não podemos redeclarar variáveis com let e const:

let nomeCliente = 'Luiz';
nomeCliente = 'Otávio';

console.log(nomeCliente);
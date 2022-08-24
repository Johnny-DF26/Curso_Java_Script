//  OPERDAOR TERNARIO
//  ? 'Valor Verdadeiro'  : 'Valor para Falso'
const pontUsuario = 1001;

if (pontUsuario > 1000) {
    console.log('Usuario VIP')
} else {
    console.log('Usuario Basic');
}

pontUsuario > 1000 ? 'Usuario VIP': 'Usuario Basic';
const nivelUsuario = pontUsuario > 1000 ? 'Usuario VIP': 'Usuario Basic';       // em uma variável

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
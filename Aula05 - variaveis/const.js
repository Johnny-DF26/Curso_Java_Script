/* Regras:

    Não podemos criar variáveis com palavras reservadas
    Variáveis precisam ter nomes significativos
    Não pode começar o nome de uma variável com um número
    Não pode conter espaços ou traços
    Case-sensitive
    Utiliza-se por boas práticas o camelCase: let nomeCompleto
    Por questões de segurança não se utiliza mais a variável 'var', mas sim 'const'
    Precisa declarar e inicializar ela, não o fazendo ocorrerá um erro
    Não se pode modificar
*/

const nome = 'Joao';
const nomePessoal = nome  // Podemos pegar uma constante e coloca-la em outra variável const,let
console.log(nomePessoal);
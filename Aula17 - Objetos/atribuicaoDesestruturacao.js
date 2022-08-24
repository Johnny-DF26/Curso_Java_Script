const pessoa = {
     nome: 'Johnny',
     sobrenome: 'Alves',
     idade: 29,
     endereco: {
          rua: 'Av Brasil',
          numero: 320
     }
};

//const nome = pessoa.nome;
//console.log(nome);
 
//                                       Atribuicao via desestruturação

//const {nome='', sobrenome, endereco:{rua,numero}, endereco, idade} = pessoa;    
//console.log(nome, sobrenome, rua,numero, idade);


//                                              Utilizando o REST
const {nome, ...resto} = pessoa;      
console.log(nome,resto);
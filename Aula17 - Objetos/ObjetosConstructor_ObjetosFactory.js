// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.peso = 70;
// pessoa1.altura = 1.76;
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//    console.log(`${this.nome} ${this.sobrenome} esta falando algo`);
// };
// pessoa1.imc = function() {
//    const imc = this.peso / (this.altura**2);
//    console.log(`O IMC de ${this.nome} é: ${imc.toFixed(2)}`);
// };
// pessoa1.getDataNascimento = function() {
//    const dataAtual = new Date();
//    console.log(`Seu ano de nascimento é: ${dataAtual.getFullYear() - this.idade}`);
// };
// for (let chave in pessoa1){
//    console.log(pessoa1[chave]);
// }

// pessoa1.falarNome();
// pessoa1.imc();
// pessoa1.getDataNascimento();

// Factory Functions / Constructor functions / Class
// Factory Function

// function pessoa(nome,sobrenome, idade) {
//    return {
//       nome: nome,
//       sobrenome: sobrenome,
//       idade: idade,
//       nascimento() {
//          const dataAtual = new Date();
//          return dataAtual.getFullYear() - this.idade; 
//       }
//    }
// } 

// const pessoa1 = pessoa('Anna', 'Maria', 23);
// console.log(`${pessoa1.nome} nasceu em ${pessoa1.nascimento()}.`);

//                                        Factory Functions

function pessoa(nome,sobrenome, idade) {
   return {
      nome,
      sobrenome,
      idade,
      get nascimento() {
         const idadeAtual = new Date();
         return idadeAtual.getFullYear() - this.idade;
      }
   }
}

const pessoa1 = pessoa('Ana','Ribeiro', 23);
//console.log(`${pessoa1.nome} nasceu em ${pessoa1.nascimento}`);

//                                       Construction Functions

class Pessoa {
   constructor(nome, sobrenome, idade) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
      this.nascimento = () => {
         const idadeAtual = new Date();
         return idadeAtual.getFullYear() - this.idade;
      };
      Object.freeze(this);  // Trava todos os objetos da função, tornando a funcão ou classe imutavel
   }
}

const p1 = new Pessoa('Luiz', 'Miranda',32);
// Object.freeze(p1);   // Trava objeto para ser imutavel, modificável                 
// p1.nome = 'Outra coisa';
// p1.fala = function() {console.log('Oi');} // Criando uma funcão fora da classe
// delete p1.nome;   // Deleta o nome 
const p2 = new Pessoa('Amanda', 'Oliveira', 21);
console.log(p1);
console.log(p2);
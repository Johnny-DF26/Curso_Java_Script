function criaPessoa(nome, sobrenome, peso, altura, idade) {
   return {
      nome: nome,
      sobrenome: sobrenome,

      // getter
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`;
      },

      // setter
      set nomeCompleto(valor) {
         valor = valor.split(' ');
         this.nome = valor.shift();
         console.log(this.nome);
         this.sobrenome = valor.join(' ');
         console.log(this.sobrenome);
      },

      fala(assunto) {
         return `${this.nome} está ${assunto}.`;
      },

      peso: peso,
      altura: altura,
      idade: idade,

      get imc() {
         const indice = this.peso / (this.altura ** 2)
         return indice.toFixed(2);
      }
   };
}

const p2 = criaPessoa('Anna','Ribeiro', 50, 1.65, 21);
//console.log(p2.nomeCompleto);
//console.log(`O IMC de ${p2.nome} ${p2.sobrenome} é ${p2.imc()}`);
const p1 = criaPessoa('Maria Miranda Ribeiro');
//p1.nomeCompleto = 'Maria Alves da silva';
//console.log(p1.fala('Falando sobre JS'));


console.log(p2.imc);


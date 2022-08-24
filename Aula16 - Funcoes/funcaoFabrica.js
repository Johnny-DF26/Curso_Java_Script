function pessoa(nome, sobrenome) {
   return {
      nome,
      sobrenome,
      fala(assunto) {
         return `${this.nome} ${this.sobrenome}, com peso ${this.peso} está ${assunto}.`;
      },
      peso: 80
   };
}

const p1 = pessoa('Johnny','Cleyson');
console.log(p1.fala('Falando sobre JS'));

const p2 = pessoa('Ana','alves');
console.log(p2.fala('Falando algo...'));
function criaPessoa(nome,sobrenome) {
   const pessoaPrototype = {
      falar() {
         console.log(`${this.nome} etá falando.`);
      },
   
      comer() {
         console.log(`${this.nome} etá comendo.`);
      },
      
      beber() {
         console.log(`${this.nome} etá bebendo.`);
      },
   };

   return Object.create(pessoaPrototype, {
      nome: {value: nome},
      sobrenome: {value: sobrenome},
   });

}

const p1 = criaPessoa('Johnny', 'Silva');
const p2 = criaPessoa('Maria', 'Oliveira');
p1.comer();
p2.beber();
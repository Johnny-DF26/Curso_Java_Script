class pessoa {
   constructor(nome,sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   }

   get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
   }

   set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
   }

}

const p1 = new pessoa('Anna','Oliveira');
p1.nomeCompleto = 'Luiz Miranda Alves';
//console.log(p1.nomeCompleto());                 // Não utiliza o get no método dentro da classe.
console.log(p1.nomeCompleto);                     // Não precisa utilizar ().
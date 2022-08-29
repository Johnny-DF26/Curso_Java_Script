// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

class Pessoa {
   constructor(nome, sobrenome) {
      const Id = '12345'; // Atributos ou métodos privados
      this.nome = nome;   // Atributos ou métodos públicos
      this.sobrenome = sobrenome;


      this.frase = () => console.log(`${this.nome} ${this.sobrenome} disse OI.`);
   }

   constructor2(altura, peso) {
      const imc = peso / (altura**2);
      return imc.toFixed(2);
   }

}

const pessoa1 = new Pessoa('joao', 'Alberto');
const pessoa2 = new Pessoa('Rita', 'Cadilac');

pessoa2.frase();

console.log(`${pessoa1.nome} tem o imc de: ${pessoa1.constructor2(1.76, 70)}`);


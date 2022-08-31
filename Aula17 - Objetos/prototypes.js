// // Construtora -> molde (classe)
// function Pessoa(nome,sobrenome) {
//    this.nome = nome;
//    this.sobrenome = sobrenome;
//    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// Pessoa.prototype.nomeCompleto = function() {
//    return this.nome + ' ' + this.sobrenome;
// };

// // Instancias
// const pessoa1 = new Pessoa('Luiz', 'O.');
// const pessoa2 = new Pessoa('Maria', 'A');
// const data = new Date();



// console.dir(pessoa1);
// console.dir(pessoa2);
// console.dir(data);

function Produto(nome,preco) {
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function(valor) {
   this.preco = this.preco - (this.preco * (valor/100));
};

Produto.prototype.aumento = function(valor) {
   this.preco = this.preco + (this.preco * (valor/100));
};

const p1 = new Produto('camiseta', 50);
//console.log(p1);

// Literal
// const p2 = {
//    nome: 'Caneca',
//    preco: 15,
// }
// Object.setPrototypeOf(p2, Produto.prototype);
// p2.aumento(10);
//console.log(p2);

const p3 = Object.create(Produto.prototype, {
   preco: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 99
   },
   tamanho: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 42
   },
});
p3.aumento(10);
console.log(p3);

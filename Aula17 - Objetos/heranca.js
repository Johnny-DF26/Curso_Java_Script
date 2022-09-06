//Produto -> aumento, desconto
// Camiseta, caneca = material

function Produto(nome, preco) {
   this.nome = nome;
   this.preco = preco;

}

Produto.prototype.aumento = function(quantia) {
   this.preco += quantia
};
Produto.prototype.desconto = function(quantia) {
   this.preco -= quantia
};


function Camiseta(nome, preco, cor) {
   Produto.call(this, nome, preco);
   this.cor = cor;

}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(perc) {
   this.preco = this.preco + (this.preco *(perc / 100));
}

function Caneca(nome, preco, material, estoque) {
   Produto.call(this, nome, preco);
      this.material = material;
      
      Object.defineProperty(this, 'estoque', {
         enumerable: false,
         configurable: false,
         get: function(){ 
            return estoque;
         },
         set: function(valor) {
            if (typeof(valor) !== 'number') return;
            estoque = valor;
         }
      });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('regata', 7.5, 'preta');
const produto = new Produto('Gen', 111);
const caneca = new Caneca('caneca', 13, 'plastico', 5);
//caneca.estoque = 100;

console.log(caneca);
console.log(camiseta);
console.log(produto);


class Produto {
   constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      let estoquePrivado = estoque;
      Object.defineProperty(this, 'estoque', {
         enumerable: true,
         configurable: true,
         get: function() {
            return estoquePrivado;   // Somente pegar o valor
         },
         set: function(valor) {
            if (typeof(valor) !== 'number'){
               console.log('ERRO, estoque não está em quantidade numérica');
            }
            estoquePrivado = valor;
         }
      });
   }
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.console = 'dasdsadadas';
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);
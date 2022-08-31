// // defineProperty - Define uma 
// // defineProperties - Define várias

// class Produto {
//    constructor(nome, preco, estoque) {
//       //this.nome = nome;
//       //this.preco = preco;
      

//       Object.defineProperty(this, 'estoque', {
//          enumerable: false,  // mostra a chave
//          //value: function() {return estoque;}, // tambe pode ser uma função
//          value: estoque,  // valor da chave
//          writable: false,  // pode alterar ou nao o valor
//          configurable: false  // pode ou nao apagar,(reconfigurar) a chave 
//       });

//       Object.defineProperties(this, {   // Muitas propriedades
//          nome: {
//             enumerable: true,
//             value: nome,
//             writable: true,
//             configurable: true
//          },
//          preco: {
//             enumerable: true,
//             value: preco,
//             writable: true,
//             configurable: true
//          },
//       });
//    }
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 50000;
// console.log(p1);
// console.log(Object.keys(p1));  // Visualizar a chave do objeto

function Produto(nome, preco, estoque) {
   // this.nome = nome;
   // this.preco = preco;

   Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      value: estoque,   // valor
      writable: true,  // pode alterar
      configurable: false // pode apagar ou reconfigurar
   });

   Object.defineProperties(this, {
      nome: {
         enumerable: true,
         value: nome,
         writable: true,
         configurable: false
      },
      preco: {
         enumerable: true,
         value: preco,
         writable: true,
         configurable: false
      },
   });
}

const p1 = new Produto('Camiseta', 20,3);
console.log(p1);

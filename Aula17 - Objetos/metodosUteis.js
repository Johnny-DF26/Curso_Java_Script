/*
Object.values (Retorna valores)
Object.entries (Retorna chave e valor em arrays)
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop') (Define a propriedade se é visivel, mutavel, configurável)
   writable: false,
... (spread)

// Já vimos

Object.keys ( retorna as chaves)
Object.freeze (congela o Object)
Object.defineProperty  (difine uma propriedade)
Object.defineProperties (define várias propriedades)
*/

const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = {...produto, material: 'porcelana'};   // Copia o objeto sem alterar o original
//                   ^---copy          add itens
const caneca = Object.assign({}, produto, {material2: 'vidro'}); // Tambem copia sem alterar o original
//                            ^----copy      add itens
const caneca2 = {nome: produto.nome, preco: produto.preco};  // Forma manual de copiar

Object.defineProperty(produto, 'nome', {   // Define a propriedade se é visivel, mutavel, configurável
   writable: false,
   configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Vai descrever a propriedade 

outraCoisa.nome = 'copo';
outraCoisa.preco = 1.5;
// console.log(produto);
// console.log(outraCoisa);
// console.log(caneca);

for (let [chave, valor] of Object.entries(produto)) {  // Destructor 
   console.log(chave, valor);                          // Podemos usar valor[0], valor[1]
}
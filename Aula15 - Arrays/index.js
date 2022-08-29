//                 0         1       2
const nomes = ['Eduardo', 'Maria','Joana'];

nomes[2] = 'Joao';       // Trocando elemento por outro pelo index
console.log(nomes);

delete nomes[2];        // deleta o elemento do index 2, mas não quer mexer nos index do array
console.log(nomes);

const nome2 = new Array('Anna', 'maria', 'Paulo');   // Uma maneira de criar uma array



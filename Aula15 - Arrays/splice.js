//                -5      -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Júlia'];
//nomes.slice(indice, delete, elem1, elem2, elem3);
//nomes.splice(4,1);

// pop
// Remove o ultimo elemento e coloca em uma array
const removidosNomes = nomes.splice(-1, 1);        


// no indice 3 remove 2 elementos pra frente e adiciona no lugar deles, luiz e Otávio
const adiconaNomes = nomes.splice(3, 2, 'Luiz', 'Otávio');
console.log(nomes);

//shift                             i  del
const removeNoComeco = nomes.splice(0, 1);
console.log(nomes);

//push                            ult indice   del   elemento
const removeUltimo = nomes.splice(nomes.length, 1, 'Johnny');  // posso colocar mais nomes 
console.log(nomes);

//unshift                             i  del
const adicionaNoComeco = nomes.splice(0, 0, 'Renato');
console.log(nomes);
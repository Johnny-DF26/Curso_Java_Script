// Map 

const numeros = [1, 2, 3, 4, 5, 6, 10, 22, 65];
const numsDobro = numeros.map(num => num * 2);
console.log(numsDobro);

// Retorne apesnas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
   {nome: 'Luiz', idade: 62},    // 0
   {nome: 'Maria', idade: 23},   // 1
   {nome: 'Eduardo', idade: 55}, // 2
   {nome: 'Letícia', idade: 19}, // 3
   {nome: 'Rosana', idade: 32},  // 4
   {nome: 'Wallace', idade: 47}, // 5
];

// A
const nome = pessoas.map(obj => obj.nome);
console.log(nome);

// B
const idades = pessoas.map(obj => ({ idade: obj.idade}));  // posso usar o delete
console.log(idades);

//C    Alterando o objeto Orignal
// const id = pessoas.map((obj, indice) => {
//    obj.id = (indice +1);
//    return obj
// });
// console.log(id);

// Sem alterar o objeto original
const id2 = pessoas.map((obj, indice) => {
   const newObj = {...obj};
   newObj.id = (indice+1);
   return newObj;
});
console.log(id2);
console.log(pessoas);



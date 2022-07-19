// const pessoa = {
//     nome: "Miguel"
// }

// const animal = {
//     nome: "Café Com Leite"
// }

// function pegaNome() {
//     console.log(this.nome);
// }

// pegaNome.call(animal);

const myObj = {
    num1: 2,
    num2: 4
}

function soma(a,b) {
    console.log(this.num1 + this.num2);
}

soma.call(myObj);
// function criaPessoa(nome, sobreNome, idade) {
//     return { nome, sobreNome, idade };
// }

// const pessoa1 = criaPessoa('Maria', 'Alves', 22);
// const pessoa2 = criaPessoa('Anna', 'Alves', 29);
// const pessoa3 = criaPessoa('Leo', 'Alves', 29);
// const pessoa4 = criaPessoa('Jean', 'Alves', 29);
// const pessoa5 = criaPessoa('Emma', 'Alves', 29);
// console.log(pessoa3.nome);


const pessoa1 = {
    nome: 'Luiz',
    sobreNome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
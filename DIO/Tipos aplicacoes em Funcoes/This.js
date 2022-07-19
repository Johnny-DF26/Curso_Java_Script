const pessoa = {
    nome: "André",
    sobrenome: "Soaraes",
    id: 2,
    fullName: function() {
        return `${this.nome} ${this.sobrenome}`
    },
    getId: function() {
        return this.id;
    }
}

console.log(pessoa.fullName());
console.log(pessoa.getId());
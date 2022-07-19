function conta(arr, media) {
    let aprovados = [];
    for (i in arr) {
        //const {nota,nome} = arr[i];
        if (arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        } else {
            //console.log(`O aluno ${arr[i][0]} foi reprovado com a nota: ${arr[i][1]}`);
        }
    }
    return aprovados;
}

const alunos = [{
    nome: "João",
    nota: 5,
    turma: "1B"
},
{
    nome: "Maria",
    nota: 9,
    turma: "1B"
},
{
    nome: "Paulo",
    nota: 6,
    turma: "2C"
}
]
console.log(conta(alunos,6));
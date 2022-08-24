//const pai = document.querySelector('.container');
const inputTarefa = document.querySelector('.novaTarefa');
const botaoTarefas = document.querySelector('.adicionarTarefa');
const tarefas = document.querySelector('.tarefas');



function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    li.appendChild(botaoApagar);
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa.');
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adiconaTarefaSalvas() {
    const tarefas = localStorage.getItem(tarefas);
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);
    
}
adiconaTarefaSalvas();


botaoTarefas.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});
const elementos = [
     {tag: 'p', texto: 'Frase 1'},
     {tag: 'div', texto: 'Frase 2'},
     {tag: 'footer', texto: 'Frase 3'},
     {tag: 'section', texto: 'Frase 4'}
];

const pai = document.querySelector('.container');
const divPai = document.createElement('div');

for (let i of elementos) {
     let {tag, texto} = i;              // Desestruturação
     let tagCriada = document.createElement(tag);
     divPai.appendChild(tagCriada);
     tagCriada.innerText = texto;
}

pai.appendChild(divPai);

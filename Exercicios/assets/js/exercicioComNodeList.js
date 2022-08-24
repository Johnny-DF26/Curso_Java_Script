const paragrafos = document.querySelector('.paragraph');
const ps = paragrafos.querySelectorAll('p');

//const estilosBody = getComputedStyle(document.body);   // Retorna o valor de uma propriedade Style no CSS
//const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
     p.style.background = 'rgb(8, 153, 153)';
     p.style.color = 'white';
}
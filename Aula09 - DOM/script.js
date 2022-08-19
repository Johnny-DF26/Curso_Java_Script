function displayAttribute() {
    const img = document.querySelector('a');
    const p = document.querySelector('p');
    p.innerHTML = img.getAttribute('style');
}

function mudarPagina() {
    const parent = document.getElementById('parent');
    parent.style.background = 'white';
    parent.style.color = 'black';
}
const button = document.querySelector('#barraBack').addEventListener("click", mudarPagina);
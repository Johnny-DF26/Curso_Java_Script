function mostraDiaSemana(diaSemana) {
    const diasSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
    return diasSemana[diaSemana];
}
const data = new Date();
const tituloH3 = document.getElementById('data');
tituloH3.style.fontWeight = 'bolder';
tituloH3.style.textAlign = 'center';
tituloH3.innerHTML = `${formatarData(data)}<br>${criarHora(data)}`;

// const data = new Date();
// const tituloH3 = document.getElementById('data');
// tituloH3.style.fontWeight = 'bolder';
// tituloH3.style.textAlign = 'center';
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle : 'short'
// };

// tituloH3.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
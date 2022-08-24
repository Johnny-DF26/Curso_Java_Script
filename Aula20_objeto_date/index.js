// const data = new Date(1661017115737);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()+1);        // Mês começa com zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());    // 0 - Domingo, 6 - Sábado
// console.log(data.toString());
// //console.log(Date.now());                     // Contado em milesimos de segundos



function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    return dia, '/', mes, '/', ano;
}

const data = new Date();
const dataBrasil = formataData(data);
formataData(dataBrasil);
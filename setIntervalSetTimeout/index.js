function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-br');
}

const timer = setInterval(function() {   // setInterval executa um timer com a hora 1000 milesimo de segundo
    console.log(mostraHora());
},1000);

const clear = setTimeout(function(){     // setTimeout executa somente uma vez e para a execução
    clearInterval(timer);
}, 10000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);
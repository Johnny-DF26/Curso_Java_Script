function criarTime() {
    const relogio = document.querySelector('.timer');
    let segundos = 0;
    let timer;

    function criaHoraEmSegundos(segs) {
        const data = new Date(segs * 1000);
        return data.toLocaleTimeString('pt-br', {
            timeZone: 'GMT'
        });
    }
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraEmSegundos(segundos);
        }, 1000);
    }
    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    });
}
criarTime();
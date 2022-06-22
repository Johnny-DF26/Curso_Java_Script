function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<strong>São exatamente ${hora} Horas.</strong>`
    if (hora > 6 && hora <= 12) {
        msg.innerHTML = `<strong>Bom Dia !</strong>`
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E8B400'
    } 
    else if (hora > 12 && hora <= 18){
        msg2.innerHTML = '<strong>Boa Tarde!</strong>'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#5BD3FF'
    }
    else if (hora > 18 && hora <= 23){
        msg2.innerHTML = '<strong>Boa Noite!</strong>'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#291D24'
    }
    else {
        msg2.innerHTML = '<strong>Boa Madrugada !</strong>'
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#44454A'
    }
} 

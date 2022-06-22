function multiplicar() {
    let num = document.getElementById('txt1')
    let tab = document.getElementById('tab')
    if (num.value.length == 0) {
        window.alert('Erro ! Digite um valor numérico !')
    } else {
        let c = 1
        let n = Number(num.value)
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        /*
        for (var c = 1; c <= 10; c++) {
            tab.innerHTML += `<br>${n} x ${c} = ${c * n} <br>`
        }
        */
    }   
}
function calcularImc() {
    const pai = document.querySelector('#parent');
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    const p = document.querySelector('#paragraph');
    p.style.background = '#02c584';
    const imc = peso / (altura ** 2);

    if ( imc < 18.5) {
        p.innerText = `Seu IMC ${imc.toFixed(2)} (Abaixo do Peso)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        p.innerText = `Seu IMC ${imc.toFixed(2)} (Peso Normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
        p.innerText = `Seu IMC ${imc.toFixed(2)} (Sobrepeso)`;
    } else if (imc >= 30 && imc <= 34.9) {
        p.innerText = `Seu IMC ${imc.toFixed(2)} (Obesidade grau 1)`;
    } else if (imc >= 35 && imc <= 39.9) {
        p.innerText = `Seu IMC ${imc.toFixed(2)} (Obesidade grau 2)`;
    } else if (imc > 40) {
        p.innerText = `Seu IMC ${imc.toFixed(2)} (Obesidade grau 3)`;
    }

    if (peso == '' || altura == '' || typeof(peso) == 'string' || typeof(altura) == 'string') {
        p.innerText = 'Inválido!';
        p.style.backgroundColor = '#ff0000a4';
    } 
}

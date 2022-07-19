var currentNumberWrapper = document.getElementById("currentNumber");    
var currentNumber = 0;

// Incrementa o contador de 1 em 1, ao clicar no +
function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'blue'
    }
}
// Decrementa o contador de 1 em 1, ao clicar no -
function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    }
}

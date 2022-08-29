class Calculadora {
   constructor() {
      this.display = document.querySelector('.display'); // busca a class display e coloca em um argumento
      //this.btnClear = document.querySelector('.btn-clear'); // busca a class clear e coloca em um argumento

      this.inicia = () => {this.clickButton(); this.keyEnter();}; // inicia e vai para outra funcao
      
      this.keyEnter = () => {
         document.addEventListener('keyup', (e) => { // verifica qual botao foi clicado
            if (e.keyCode === 13) { // se for a tecla enter
               this.realizaConta()  // realiza a conta em outr funcao(método)
            }
         });
      }
      
      this.clickButton = () => {
         // this -> Calculadora
         document.addEventListener('click', (e) => {      // busca o evento de que botao foi clicado
            const el = e.target;     // coloca o botao (e) pressionado e coloca em uma variavel
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el); //se o botao for num, vai chamar outro metodo
            if (el.classList.contains('btn-clear')) this.clearDisplay();  // envia para a funcao para limpar o display
            if (el.classList.contains('btn-del')) this.del(); // envia para a funcao para deletar o ultimo elemento
            if (el.classList.contains('btn-eq')) this.realizaConta(); // envia para a funcao para execultar a conta
         });
      }
      
      this.btnParaDisplay = (el) => {this.display.value += el.innerText; this.display.focus();} // vai mostra no display 
      this.clearDisplay = () => this.display.value = '';  // vai limpar o display, quando clicado
      this.del = () => this.display.value = this.display.value.slice(0, -1); // vai deletar o ultimo num, quando clicado

      this.realizaConta = () => {
         try {
            const conta = eval(this.display.value);  // pega os nums e faz a conta e coloca em uma variavel
            if (!conta) {  // se nao for uma conta valida
               alert('Conta Inválida'); // sai esse resultado
               return;
            }
            this.display.value = conta;   // se for valida irá mostra no display o resultado
         } catch (e) {
            alert('Conta Inválida');
            return;
         }
      }
   }
}

const calculadora = new Calculadora();
calculadora.inicia();
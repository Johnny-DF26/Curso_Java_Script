// Declaração de função (Function hoisting)

// function funcao({nome, sobrenome, idade}) {
//    console.log(nome, sobrenome, idade);
// }

// funcao({nome: 'Jhonny', sobrenome: 'Alves', idade: 20});


function conta(operador, acumulador, ...numeros) {
   for (let numero of numeros) {
      if (operador === '+') acumulador += numero;
      if (operador === '-') acumulador += numero;
      if (operador === '*') acumulador *= numero;
      if (operador === '/') acumulador /= numero;
   }
   console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
function Conta(agencia, conta, saldo) {
   this.agencia = agencia;
   this.conta = conta;
   this.saldo = saldo;
}
console.log(`______________________________`);
console.log('        Banco Nacinal         ');
Conta.prototype.sacar = function (valor) {
   if (valor > this.saldo) {
      console.log(`Saldo Insuficiente:  ${this.saldo}`);
      return;
   }
   this.saldo -= valor;
   console.log(`Saldo:${this.saldo}`);
};

Conta.prototype.depositar = function (valor) {
   if (valor < 0) {
      console.log(`Valor Inválido`);
      return;
   }
   this.saldo += valor;
   console.log(`Saldo:${this.saldo}`);
};


Conta.prototype.verSaldo = function () {
   console.log(`Agencia: ${this.agencia}\nConta: ${this.conta}\nSaldo: ${this.saldo}`);
   console.log(`______________________________`);
};


function ContaCorrente(agencia, conta, saldo, limite) {
   console.log(`______________________________`);
   console.log('        Conta Corrente        ');
   console.log(`______________________________`);
   Conta.call(this, agencia, conta, saldo);
   this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


ContaCorrente.prototype.sacar = function (valor) {
   if (valor > (this.saldo + this.limite)) {
      console.log(`Saldo Insuficiente: ${this.saldo}`);
      return;
   }
   this.saldo -= valor;
   console.log(`Saldo:${this.saldo}`);
};


function ContaPoupanca(agencia, conta, saldo) {
   console.log(`______________________________`);
   console.log('        Conta Poupança        ');
   console.log(`______________________________`);
   Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(1232, 3254356324254, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);
console.log('');
const cp = new ContaPoupanca(1234, 12312321412, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);




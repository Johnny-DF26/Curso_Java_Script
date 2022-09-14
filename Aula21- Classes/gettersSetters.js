const _velocidade = Symbol('vel');

class Carro {
   constructor(nome){
      this.nome = nome;
      this[_velocidade] = 0;
   }

   get velocidade() {
      console.log('Getter');
      return this[_velocidade];
   }

   set velocidade(valor) {
      console.log('Setter');
      if(typeof(valor) !== 'number') return;
      if(valor >= 100 || valor <= 0) return;
      this[_velocidade] = valor;
   }

   acelera() {
      if (this[_velocidade] >= 100) return;
      this[_velocidade]++;
   }

   freiar() {
      if (this[_velocidade] <= 0) return;
      this[_velocidade]--;
   }
}

const c1 = new Carro('Fusca');

// for (let i = 0; i <= 100; i++) {
//    c1.acelera();
// }

c1.velocidade = 80;
console.log(c1.velocidade);

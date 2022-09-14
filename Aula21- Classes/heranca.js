class DispositivoEletronico {
   constructor(nome){
      this.nome = nome;
      this.ligado = false;

   }

   ligar() {
      if(this.ligado) {
         console.log(`${this.nome} já ligado!`);
         return;
   }
   console.log('Ligou');
   this.ligado = true;
}

   desligar() {
      if(!this.ligado) {
         console.log(`${this.nome} já está desligado!`);
         return;
      }
      console.log('Desligou');
      this.ligado = false;
   }
}

class Smartphone extends DispositivoEletronico {
   constructor(nome, cor, modelo) {
      super(nome);
      this.cor = cor;
      this.modelo = modelo;
   }
}

class Tablet extends DispositivoEletronico {
   constructor(nome, temWifi) {
      super(nome);
      this.temWifi = temWifi;
   }

   ligar() {
      console.log('Você alterou o método ligar.');
   }

   falaOi() {
      console.log('Oi');
   }
}

const s1 = new Smartphone('Iphone', 'preto');
const s2 = new Smartphone('Samsung', 'branco', 'Galaxy S10');
s1.ligar();
console.log(s2);

const t1 = new Tablet('Ipad', true);
console.log(t1.ligado);
t1.ligar();
t1.ligar();
t1.falaOi();

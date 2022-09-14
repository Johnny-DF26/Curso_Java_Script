class ControleRemoto {
   constructor(tv) {
      this.tv = tv;
      this.volume = 0;

   }

   // Método de instância
   aumentarVolume() {
      this.volume += 1;
   }

   // Método de instância
   dominuirVolume() {
      this.volume -= 1;
   }

   // Método estático
   static trocaPilha() {
      console.log('Pilha fraca, trocar as pilhas !!!')
   }
}

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();

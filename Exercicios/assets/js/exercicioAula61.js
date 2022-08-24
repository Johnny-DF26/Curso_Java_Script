/* Escreva uma funcão chamada ePAisagem
* que recebe dois argumentos, largura e altura
* de uma imagem (number).
*  Retorne true se a imagem estiver no modo paisagem
*/



function modoPaisagem(larg, alt) {
    return (larg > alt) ? true: false;  // Pode eliminar o true e false !!!!
}
//console.log(modoPaisagem(40,20));
//#################################################################


const ePaisagem = (larg, alt) => (larg > alt);  // Retirado o true ou false
console.log(`A imagem está no modo paisagem ? ${ePaisagem(1920,1080)}`);

var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if (horas >= 5 && horas <= 12){
    console.log('Bom Dia !')
} else if (horas > 12 && horas <= 18) {
    console.log('Boa Tarde !')
} else if ( horas > 18 && horas < 23){
    console.log('Boa Noite !')
} else {
    console.log('Boa Madrugada !')
}
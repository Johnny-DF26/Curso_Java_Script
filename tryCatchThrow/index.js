
// try {
//     console.log(NãoExisto);
// } catch(erro) {
//     console.log('Não existe, não existe');
//     console.log(erro);
// }

// function soma(x, y) {
//     if (typeof(x) !== 'number' || typeof(y) !== 'number'){
//         throw new Error('x e y precisam ser números !');
//     }
//     return x + y;
// }

/*
try {
    console.log(soma(1,2));  // Execultada quando não há erros !!
    console.log(soma('1',2));

} catch(error) {
    console.log(error);  // Execultado quando há erros !!
} finally {
    // Sempre será execultado !!
}
*/

// try {
//     console.log(a);
//     console.log('Abri o arquivo');
//     console.log('Manipulei o arquivo');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('Eu sempre sou executado');
// }


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date')
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 12:59:02');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia');
}
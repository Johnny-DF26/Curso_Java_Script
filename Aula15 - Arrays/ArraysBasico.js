const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
alunos.push('Pedro');                // Adicona um elemento no ultimo indice 
console.log(alunos);
alunos.push('Anna');                 // Adicona um elemento no ultimo indice
console.log(alunos);
console.log(alunos.length);          // Mostra quantos elementos tem na array
alunos.pop();                        // Apaga o ultimo elemento do array
console.log(alunos);
console.log(alunos.sort());          // Coloca os elementos em ordem crescente 
alunos.unshift('Roberto');           // Aiciona um elemento no primeiro indice
console.log(alunos);
alunos.shift();                      // Apaga o primeiro elemento !!!
console.log(alunos);
//delete alunos[1];                  // Remove o o elemento do indice !


console.log(alunos.slice(0, 1));     // Fatia o elemento de uma posicao até outra

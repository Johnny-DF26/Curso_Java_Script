const helloWorld = function () {
    return "Hello World";
}

const helloWorld2 = () => {
    return "hello World";
}

const helloWorld3 = () => "Hello World";

//console.log(helloWorld3());

const soma = (a,b) => a + b; // caso exista uma parametro não necessita de parênteses...
console.log(soma(4,6));
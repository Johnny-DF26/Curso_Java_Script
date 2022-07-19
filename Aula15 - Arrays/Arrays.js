
// ------------------------------------ SPREAD --------------------------------------------
// function sum(x,y=0,z=0) {
//     return x + y + z
// }

// const numbers = [1,2,3];
// console.log(sum(...numbers)); // spread

//-------------------------------------- REST ---------------------------------------------

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho();
confereTamanho(1,2);
confereTamanho(3,4,5);
// function* geradora() {
//    // qualquer codigo
//    yield 'valor 1';
//    // qualquer código
//    yield 'valor 2';
//    // qualquer código
//    yield 'valor 3';
// }

// const g1 = geradora();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log('##############################');

// const g2 = geradora();
// for (let valor of g2) {
//    console.log(valor);
// }

// console.log('####################################################################');

// function* contador() {
//    let i = 0;
//    while (true) {
//       yield i;
//       i++;
//    }
// }
// const cont = contador();
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);

// console.log('####################################################################');

// function* geradora3() {
//    yield 0;
//    yield 1;
//    yield 2;
// }

// function* geradora4() {
//    yield* geradora3();
//    yield 3;
//    yield 4;
//    yield 5;
// }

// const g4 = geradora4();
// for(let valor of g4) {
//    console.log(valor);
// }

//console.log('####################################################################');

function* geradora5() {
   yield function() {
      console.log('Vim do y1');
   };

   yield function() {
      console.log('vim do return')
   }
   //

   yield function() {
      console.log('vim do y3');
   };
}

const g5 =  geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();

// Não funciona com sinais de + !!!
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// Concatenação de arrays !!!
const soma = nums1.concat(nums2, [7, 8, 9], 'Johnny');   // posso adicionar mais elementos
console.log(soma);

// Spreed...  e ...Rest
const a3 = [...nums1, ...nums2, 'alberto', ...[7, 8, 9]];
console.log(a3);

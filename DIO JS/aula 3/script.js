// o que são vetores e arrays

// como declarar um array

let array1 = ['string', 1, true];
console.log(array1);

let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);

// for each
/* array2.forEach(function(item, index){console.log(item, index)}) */

/* array2.push('novo item');
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift('novo item no inicio');
console.log(array2);

console.log(array2.indexOf(true));

array2.splice(0, 3);
console.log(array2);

let array3 = array2.slice(0,3);
console.log(array3); */

let objeto = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objeto interno'}}

/* console.log(objeto);

var string = objeto.string;
console.log(string);

var array = objeto.array;
console.log(array); */

var { string, boolean, objectInterno} = objeto;
console.log( string, boolean, objectInterno);
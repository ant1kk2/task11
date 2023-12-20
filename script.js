const arr = [1, 2, 3, 5];

/*----------------function some----------*/

/* По документації колбек метода some приймає (element, index, array]*/

// function some(array, predicate) {
//   for (let i = 0; i < array.length; i++) {
//     if (predicate(array[i], i, array)) {
//       return true;
//     }
//   }
//   return false;
// }

// function testSome(el, i, array) {
//   console.log(i);
//   console.log(array);
//   return el > 1;
// }

// console.log(some(arr, testSome));
// console.log(arr.some(testSome));

/*----------------function filter----------*/

/* По документації колбек метода filter приймає (element, index, array]*/

// function filter(array, predicate) {
//   const filteredArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (predicate(array[i], i, array)) {
//       filteredArray[filteredArray.length] = array[i];
//     }
//   }
//   return filteredArray;
// }

// function testFilter(el, i, array) {
//   console.log(i);
//   console.log(array);
//   return el > 1;
// }

// console.log(filter(arr, testFilter));
// console.log(arr.filter(testFilter));

// /*----------------function reduce----------*/
/* По документації колбек метода reduce приймає (accumulator, currentValue, index, array]*/

// function reduce(array, predicate, initialValue) {
//   let accum = initialValue === undefined ? array[0] : initialValue;
//   const startIndex = initialValue === undefined ? 1 : 0;
//   for (let i = startIndex; i < array.length; i++) {
//     accum = predicate(accum, array[i], i, array);
//   }
//   return accum;
// }

// function testReduce(sum, el, i, array) {
//   console.log(sum);
//   console.log(el);
//   console.log(i);
//   console.log(array)
//   return sum + el;
// }

// console.log(reduce(arr, testReduce, 0));
// console.log(arr.reduce(testReduce, 0));

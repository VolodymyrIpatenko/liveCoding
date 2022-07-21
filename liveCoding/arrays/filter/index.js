///input arr,callback
///output arr

////callback
///input el,index,arr
///out boolean

///algo
///1.create new arr
///2.iterate input arr
///3.apply callback for every element
////4.if true push
// const filterArray = (arr, callback) => {
//   const resArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const callBacks = callback(arr[index], index, arr);
//     if (callBacks) {
//       resArr.push(arr[index]);
//     }
//   }
//   return resArr;
// };
// // -- test data
// const arr = [1, 2, 11, 0, -5, 5, 4, 8, NaN];
// const ar2 = [];
// const ar3 = ['2', '5', '6'];
// const callback = (el, index, arr) => {
//   if (el > 10) {
//     return true;
//   }
//   return false;
// };
// console.log(filterArray(arr, callback));
// console.log(filterArray(ar2, callback));
// console.log(filterArray(ar3, callback));

function multiply(...args) {
  return args.reduce((acc, el) => acc * el);
}

console.log(multiply(10, 7, 6));
console.log(multiply(10, NaN, '1'));
console.log(multiply(10, 7, '2'));

const mapArray = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const callBacks = callback(arr[index], index, arr);
    if (callBacks) {
      resArr.push(arr[index]);
    }
  }
  return resArr;
};
// -- test data
const arr = [1, 0, NaN, null];
const ar2 = [];
const ar3 = ['2', '5', '6'];
const callback = (el, index, arr) => {
  if (el + 10) {
    return true;
  }
  return false;
};
console.log(mapArray(arr, callback));
console.log(mapArray(ar2, callback));
console.log(mapArray(ar3, callback));

const newArr = ['10', 10, NaN, undefined, null, ''];
function filt(newArr) {
  return newArr.filter(el => !isNaN(el));
}
console.log(filt(newArr));

/////////

function mapArr(arr) {
  return arr.map((el, ind) => (el = el * ind)).reduce((acc, el) => acc + el, 0);
}

console.log(mapArr([1, 2, 3]));

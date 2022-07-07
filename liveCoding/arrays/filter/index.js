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
const filterArray = (arr, callback) => {
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
const arr = [1, 2, 11, 0, -5, 5, 4, 8, NaN];
const ar2 = [];
const ar3 = ["2", "5", "6"];
const callback = (el, index, arr) => {
  if (el > 10) {
    return true;
  }
  return false;
};
console.log(filterArray(arr, callback));
console.log(filterArray(ar2, callback));
console.log(filterArray(ar3, callback));

function multiply(...args) {
  return args.reduce((acc, el) => acc * el);
}

console.log(multiply(10, 7, 6));
console.log(multiply(10, NaN, "1"));
console.log(multiply(10, 7, "2"));

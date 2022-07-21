////input parameters, obj,obj
////output object

const getValue = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValue(10, 1000);
const asyncNum2 = getValue(10, 1000);
const asyncNum3 = getValue(10, 1000);

const getSum = numbers =>
  numbers.filter(el => !isNaN(el)).reduce((acc, el) => acc + Number(el), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3).then(result => console.log(result));

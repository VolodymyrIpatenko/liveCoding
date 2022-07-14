////input functions
///output function
const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doIt = compose(add2, square, half);

console.log(doIt(3));
console.log(doIt(-10));
console.log(doIt(2.5));

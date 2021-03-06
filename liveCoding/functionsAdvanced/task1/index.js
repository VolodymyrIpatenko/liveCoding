////input number
//// output object

///algo
////1 create function
////
////create variable to store result
/////create add, substract,mult,div methods

const calc = initValue => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(result);

const closestMultiple10 = num => {
  let drobNum = Math.round(num / 10) * 10;
  return drobNum;
};
console.log(closestMultiple10(0));

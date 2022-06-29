function getSenseOfLife() {
  return 42;
}

//----TEST DATA

const option1 = getSenseOfLife();
console.log(option1);

function getSquared(num) {
  return num * num;
}

console.log(getSquared(5));

function sum(from, to) {
  let total = 0;
  for (let i = from; i <= to; i += 1) {
    total += i;
  }
  return total;
}

console.log(sum(1, 5));
console.log(sum(-5, 5));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  let firstSum = sum(firstFrom, firstTo);
  let secondSum = sum(secondFrom, secondTo);

  return firstSum > secondSum;
}

console.log(compareSums(1, 1, 2, 2));
console.log(compareSums(3, 4, 2, 2));
console.log(compareSums(-1, -2, 1, -5));

const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(1, "2"));
console.log(mult(NaN, undefined));
console.log(mult(2, NaN));

/////////////////////////////////

const getSq = num => num * num;

const getMagicNumber = () => 17;

console.log(getMagicNumber(5));
console.log(getMagicNumber(-10));
console.log(getMagicNumber(NaN));
console.log(getMagicNumber());

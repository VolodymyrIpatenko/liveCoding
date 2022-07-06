const numbersList = [1, 2, 3, 4];
const lastElem = numbersList.pop();
console.log(lastElem);

function sum(from, to, resolve) {
  let sumResult = 0;
  for (let i = from; i <= to; i += 1) {
    sumResult += i;
  }
  resolve(sumResult);
}

function func(num) {
  console.log(num);
}

sum(1, 10, func);

/////////////////

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }

// const sum1 = (a, b) => {
//   console.log(a + b);
// };

// const defferedSum = defer(sum1, 1000);
// defferedSum(1, 4);

function defer(fun, ms) {
  return function () {
    setTimeout(() => fun(...arguments), ms);
  };
}

const sum1 = (a, b) => {
  console.log(a + b);
};

const defferSum = defer(sum1, 1000);
defferSum(1, 10);

const user = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(string) {
    const [firstName, lastName] = string.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.fullName = "Tom Hardy";
console.log(user.fullName);

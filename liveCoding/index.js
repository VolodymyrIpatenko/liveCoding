////input -object
////outpur array

const arr = [
  { name: "Bob", age: 30, id: "10" },
  { name: "Tom", age: 20, id: "55" },
];

function getNames(arr, id) {}
console.log(getNames(arr, 10));
class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("No enough funds");
      return;
    }
    this.#balance -= amount;
  }
}

const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(100);
console.log(wallet1.getBalance());
wallet1.withdraw(50);
console.log(wallet1.getBalance());

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I'am ${this.name} and I'am ${this.age} years old`);
};
const user1 = new User("Bob", 30);
console.log(user1);

const ob = {
  name: "John",
  sayHello() {
    console.log(`${this.name}`);
  },
};

function getOwn(ob) {
  let arr = [];
  for (let key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key);
    }
    return arr;
  }
}

console.log(getOwn(ob));
const vehicle = {
  name: "Argo",
  move() {
    console.log(`${this.name} is moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up.${this.name} is moving`);
  },
  stopMachine() {
    console.log(`${this.name} stopped.${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

ship.move();

// console.log(vehicle);
// console.log(ship);

const arrOf = [
  [1, 1, 3, 3, 2, 3],
  [3, 3, 2, 5, 6, 7, 3],
];

function getMostFReq(arrOf) {
  return arrOf.map(arr =>
    arr
      .sort(
        (a, b) =>
          arr.filter(el => el === a).length - arr.filter(el => el === b).length
      )
      .pop()
  );
}

console.log(getMostFReq(arrOf));

const object = {
  "customer-id-1": {
    name: "Bill",
    age: 70,
  },
  "customer-id-2": {
    name: "Tom",
    age: 50,
  },
};

function getSorted(object) {
  return Object.entries(object).map(([id, customer]) => ({ id, ...customer }));
}
console.log(getSorted(object));

function missingValues(a) {
  const x = a.find(el => a.filter(v => el === v).length === 2);
  return x;
}

console.log(missingValues([1, 1, 1, 2, 2, 3]));

function duplicates(array) {
  if (array.length === 0) {
    return 0;
  }

  const result = {};

  array.forEach(el => {
    if (result[el]) {
      result[el] += 1;
    } else {
      result[el] = 1;
    }
  });
  let pairs = Object.keys(result).map(el => result[el] / 2);
  return pairs.map(el => Math.trunc(el)).reduce((acc, el) => acc + el, 0);
}

console.log(duplicates([1, 1, 1, 1, 3, 3, 5]));
////////////////////
function getIssuer(number) {
  let numbersLen = String(number).split("").length;
  // return numbersLen;
  let firTwo = Number(String(number).split("").slice(0, 2).join(""));
  let firOne = Number(String(number).split("").slice(0, 1).join(""));
  let firFour = Number(String(number).split("").slice(0, 4).join(""));
  if (numbersLen === 15 && (firTwo === 34 || firTwo === 37)) {
    return "AMEX";
  } else if (
    numbersLen === 16 &&
    (firTwo === 51 ||
      firTwo === 52 ||
      firTwo === 53 ||
      firTwo === 54 ||
      firTwo === 55)
  ) {
    return "Mastercard";
  } else if (firFour === 6011 && numbersLen === 16) {
    return "Discover";
  } else if (firOne === 4 && (numbersLen === 13 || numbersLen === 16)) {
    return "VISA";
  } else {
    return "Unknown";
  }
}

console.log(getIssuer(4111111));

function snail(column, day, night) {
  const days = (column - night) / (day - night);
  return days < 1 ? 1 : Math.ceil(days);
}

console.log(snail(3, 2, 1));

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i += 1) {
    sum += arguments[i] * [i + 1];
  }
  return sum;
}

console.log(add(1, 2, 3));

function trouble(x, t) {}
console.log(trouble([4, 1, 1, 1, 4], 2));

function isAllPossibilities(x) {
  if (!Array.isArray(x)) {
    return null;
  }
  let len = x.length;
  x = x.sort((a, b) => a - b).join("");
  let newArr = Array.from({ length: len }, (el, i) => i + 0).join("");

  return x === newArr;
}
console.log(isAllPossibilities([1, 2, 0, 4]));

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays.length === 0) {
    return 0;
  }

  let Apic = arrayOfArrays.map(el => el.length).sort();
  let first = Apic[0];
  let last = Apic[Apic.length - 1];
  let newArr = Array.from({ length: last }, (el, i) => i + first);
  for (let el of newArr) {
    if (!Apic.includes(el)) {
      return el;
    }
  }
}

console.log(
  getLengthOfMissingArray([
    [0, 2, 2],
    [3, 4, 2, 4, 0, 1, 4, 1],
    [4, 1],
    [1, 3, 3, 1, 2],
    [3, 1, 0, 4, 4, 4],
    [2, 0, 3, 4, 3, 2, 3],
    [0, 1, 2, 1, 4, 1, 1, 1, 4, 2, 3, 2],
    [1, 2, 1, 3, 3, 1, 3, 1, 0],
    [1, 1, 3, 0, 1, 2, 3, 1, 1, 1],
    [0, 4, 0, 1, 0, 0, 4, 3, 4, 1, 3],
  ])
);
function sortArray(array) {
  return array.sort((a, b) => (a % 2 !== 0 - (b % 2)) !== 0);
}

console.log(sortArray([5, 8, 6, 3, 4]));

////////////

function getMostFrequent(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter(el => el === a).length - arr.filter(el => el === b).length
    )
    .pop();
}
console.log(getMostFrequent([1, 1, 1, 2, 3, 4, 4, 4, 3, 3, 3]));

function sortOdd(arr) {
  const sortedOdds = arr.filter(el => el % 2).sort((a, b) => a - b);
  const result = arr.map(el => (el % 2 ? sortedOdds.shift() : el));
  return result;
}

console.log(sortOdd([7, 2, 3, 5, 1, 4]));

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}
console.log(sumTwoSmallestNumbers([1, 5, 7, 10, 3]));

function getMissingVal(ar1, ar2) {
  ar1 = ar1.reduce((acc, el) => acc + el, 0);
  ar2 = ar2.reduce((acc, el) => acc + el, 0);

  return ar1 - ar2;
}

console.log(getMissingVal([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));

function sumUpNoAdjacents(a, n) {
  if (a.length === 0) {
    return false;
  }
  const result = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
      if (a[i] + a[j] === n) {
        result.push(a[i]);
        result.push(a[j]);
      }
    }
  }
  let first = result[0];
  let second = result[1];
  let firindex = a.indexOf(first);
  let secIndex = a.indexOf(second);

  let diff = secIndex - firindex;
  return diff > 1 ? true : false;
}

console.log(sumUpNoAdjacents([2, 5, 10, 4], 14));

function strong(n) {
  if (n === 0) {
    return "Not Strong !!";
  }
  function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    // return fact;
  }
  let factSum = String(n)
    .split("")
    .map(Number)
    .map(el => factorial(el))
    .reduce((acc, el) => acc + el, 0);
  if (factSum === n) {
    return "STRONG!!!!";
  }
  return "Not Strong !!";
}

console.log(strong(93));

function hasPair(A, sum) {
  let set = new Set();
  for (num of A) {
    if (set.has(sum - num)) return true;
    set.add(num);
  }
  return false;
}

console.log(hasPair([1, 3, 7], 10));

function pigIt(str) {
  let acr = str
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "")
    .split("")
    .map(el => el + "ay");

  return str
    .split(" ")
    .map(el => el.slice(1))
    .map(el => (el = el + acr.shift()))
    .join(" ");
}
console.log(pigIt("Oay emporatay oay oresmay !ay"));
function common(a, b, c) {
  let commons = [...a, ...b, ...c];
  return commons;
}

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2]));

const getMaxes = arr => arr.map(el => Math.max(...el));

console.log(
  getMaxes([
    [1, 2, 3],
    [4, 5],
    [6, 7],
  ])
);

const createMessenger = () => {
  let message = "Just learn it";
  let sender = "Gromcode";

  function sendMessage(name) {
    console.log(
      `Hello, ${name}! ${message}! This message was sent by ${sender}`
    );
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(text) {
    sender = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

const messenger1 = createMessenger();
messenger1.sendMessage("Anna");

const messenger2 = createMessenger();
messenger2.setMessage("You are learning JS and you do it well");
messenger2.sendMessage("Michael");

const messenger3 = createMessenger();
messenger3.setMessage("The weather is amazing today");
messenger3.setSender("Anna");
messenger3.sendMessage("Alex");

////////////////////////////////

function makeCounter() {
  return function () {
    let count = 0;
    return count++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

//////////////////////////////////////////////

function createCalculator() {
  let num = 0;
  let int = 1;

  function add(int) {
    return (num += int);
  }

  function decrease(int) {
    return (num -= int);
  }

  function reset() {
    return (num = 0);
  }

  function getMemo() {
    return num;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

// function createLogger() {
//   const messages = [];

//   function warn(text) {
//     if (text === "warn") {
//       messages.push({ text });
//     }
//     return messages;
//   }
//   function error(text) {
//     if (text === "error") {
//       messages.push({ text });
//     }
//     return messages;
//   }
//   function log(text) {
//     if (text === "log") {
//       messages.push({ text });
//     }
//     return messages;
//   }

//   return {
//     warn,
//     error,
//     log,
//     getRecords(type) {},
//   };
// }

// // const logger1 = createLogger();
// logger1.log("User logged in");
// logger1.warn("User is tring to ented restricted page");
// logger1.error("Unexpected error on the site");

// logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords("log"); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords("error"); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// logger1.getRecords("warn");
function createLogge() {
  const messages = [];

  function warn(type) {
    if (type === "warn") {
      messages.push(type, messages);
    }
  }
  function error(type) {
    if (type === "error") {
      messages.push(type, messages);
    }
  }
  function log(text, messages) {
    if (text === "log") {
      messages.push({ text, type: "log" });
    }
  }

  function getRecords(type) {
    if (type !== "warn" || type !== "error" || type !== "log") {
      return [];
    } else if ((type, messages)) {
      let sorted = messages.sort((a, b) => a.dateTime - b.dateTime);
      return sorted;
    } else {
      return;
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogge();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

const obj = { John: 17, Jane: 50, Smith: 30 };
function getEntr(obj) {
  return Object(Object.keys(obj).filter(el => obj[el] > 18));
}
console.log(getEntr(obj));

function getTotal(arr) {
  return "$" + arr.reduce((acc, el) => acc + el, 0).toFixed(2);
}

console.log(getTotal([1, 2, 3, 3.565757]));

const objec = {};

function createMore(objec) {
  objec.address = {};
  return objec;
}

console.log(createMore(objec));

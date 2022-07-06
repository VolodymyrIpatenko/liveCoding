////   1.Iterate from 2 to num
////  2. Check if number is isPrime
///  3.if prime, print it out

// function getPrimes(num) {
//   function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) console.log(i);
//   }
// }

// console.log(getPrimes(10));
// console.log(getPrimes(15));
// console.log(getPrimes(20));

// function createLogger() {
//   const messages = [];

//   function warn(messages) {
//     messages.push({ messages, type: "warn", dateTime: new Date() });
//   }
//   function error(messages) {
//     messages.push({ messages, type: "error", dateTime: new Date() });
//   }
//   function log(messages) {
//     messages.push({ messages, type: "log", dateTime: new Date() });
//   }

//   function getRecords(type) {
//     if (type !== "warn" || type !== "error" || type !== "log") {
//       return [];
//     } else if (type) {
//       return messages.sort((a, b) => a.dateTime - b.dateTime);
//     } else {
//       return messages;
//     }
//   }

//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// }

// examples
// const logger1 = createLogger();
// logger1.log("User logged in");
// logger1.warn("User is tring to ented restricted page");
// logger1.log("User logged out");
// logger1.error("Unexpected error on the site");

function defer(func, ms) {
  return function () {
    setTimeout(() => func(...arguments), ms);
  };
}

const sum1 = (a, b) => {
  console.log(a + b);
};

const defferedSum = defer(sum1, 1000);
defferedSum(1, 4);

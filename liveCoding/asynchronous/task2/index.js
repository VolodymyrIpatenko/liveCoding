///input number,number
////output string
///algo
///create function

// const pinger = (num, period) => {
//   let i = num;
//   console.log('Ping');
//   const interval = setInterval(() => {
//     if (--i > 0) {
//       console.log('Ping');
//     } else {
//       clearInterval(interval);
//     }
//   }, period);
// };

// pinger(5, 1000);

const second = () => {
  console.log('Hello there!');
};

const first = () => {
  console.log('Hi there!');
  second();
  third();
  console.log('The End');
};

const third = () => {
  console.log('Third');
};

first();

////input object
/////output object

///algo
///create function
////create methods:add,subtract

// export const shmoment = initialValue => {
//   const result = new Date(initialValue);

//   const calculator = {
//     years: result.getFullYear(),
//     months: result.getMonth(),
//     days: result.getDate(),
//     hours: result.getHours(),
//     minutes: result.getMinutes(),
//     seconds: result.getSeconds(),
//     milliseconds: result.getMilliseconds(),

//     add(key, value) {
//       if (Object.keys(calculator).includes(key)) {
//         this[key] += value;
//       }
//       return this;
//     },
//     subtract(key, value) {
//       if (Object.keys(calculator).includes(key)) {
//         this[key] -= value;
//       }
//       return this;
//     },
//     result() {
//       return new Date(...Object.values(calculator));
//     },
//   };
//   return calculator;
// };

// const result = new Date(2020, 0, 7, 17, 17, 17)
//   .add('minutes', 2)
//   .subtract('years', 1)
//   .result();
// console.log(result);

// function sum(n) {
//   if (n == 1) return 1;
//   return n + sum(n - 1); ///// К изначальному  значению прибавляем результат рекурсивного вызова функции
// }
// console.log(sum(4));
// console.log(sum(10));

function getYear(date) {
  return date.getFullYear();
}
console.log(getYear(new Date(2020, 0, 7, 17, 17, 17)));
function getMonth(date, months) {
  const currentMonth = date.getMonth();
  return months[currentMonth];
}
console.log(
  getMonth(new Date(2020, 0, 7, 17, 17, 17), [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ])
);

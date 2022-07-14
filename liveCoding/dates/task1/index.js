///input obj, number
///output string

const dayOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return dayOfWeek[new Date(dateInFuture).getDay()];
};

const result = getDayOfWeek(new Date(2022, 6, 10), '5');
const resultTwo = getDayOfWeek(new Date(2022, 6, 10), 3);
const resultThree = getDayOfWeek(new Date(2022, 3, 3), NaN);

console.log(result);
console.log(resultTwo);
console.log(resultThree);

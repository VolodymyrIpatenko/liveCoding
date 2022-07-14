///input two objects
///output string

window.addEventListener('beforeunload', () => {
  alert('Sure');
});

function getDiff(startDate, endDate) {
  const days = parseInt(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24));
  const hours = parseInt(
    (Math.abs(endDate - startDate) / (1000 * 60 * 60)) % 24
  );

  const minutes = parseInt(
    (Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60)) % 60
  );
  const seconds = parseInt(
    (Math.abs(endDate.getTime() - startDate.getTime()) / 1000) % 60
  );
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const result = getDiff(
  new Date('December 16,2021 03:11:15'),
  new Date('December 12,2021 04:11:20')
);

const resultTwo = getDiff(
  new Date('July 12 2022 14:11:25'),
  new Date('July 12,2022 14:11:20')
);

console.log(result);
console.log(resultTwo);

const resultThree = getDiff(
  new Date('December 12,2011 03:11:15'),
  new Date('December 12,2010 04:11:20')
);

console.log(resultThree);

const t = new Date('December 12,2022 03:11:15');
console.log(t.getDate());

console.log(new Date(Date.UTC(2022, 6, 10, 12, 10, 10)));
/////input number,number,number
////output  array
///algo
////1 Check if there are any integers between two numbers or from>to
////2 create array and fill it with random numbers
const getRandomNumbers = (length, from, to) => {
  const start = Math.ceil(from);
  const end = Math.ceil(to);
  const arrayLength = length;
  if (Math.abs(end - start) < 1 || start > end) {
    return null;
  }
  return [...new Array(arrayLength)].fill().map(el => {
    return Math.round(Math.random() * (end - start) + start);
  });
};

console.log(getRandomNumbers(5, 1.5, 2.3));
console.log(getRandomNumbers(3, 0.9, 0.5));
console.log(getRandomNumbers(7, 3, 1));

///BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

////GOOD
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = (balances[curentClient] -= amount);
//   return newBalance > 0 ? newBalance : -1;
// };

/////NORM
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

/////GOOD
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

const getRandomNumbers = (length, from, to) => {
  const arr = new Array(length);
  if (to - from < 1) {
    return null;
  }
  return arr.fill(
    Math.trunc(
      Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)
    )
  );
};

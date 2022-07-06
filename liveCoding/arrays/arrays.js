const arrr = [
  { name: "John", id: "1" },
  { name: "Mary", id: "2" },
];

function getName(arrr, id) {
  return arrr
    .filter(el => el.id === id)
    .map(el => el.name)
    .join("");
}

console.log(getName(arrr, "2"));
// const numbersList = [5, 0, 8, 10, -4, 50, 220];
// const mapResult = numbersList.map(el => {
//   const newEl = el * el;
//   return newEl;
// });

// console.log(mapResult);

// const newMap = numbersList.map((el, ind) => (ind > 2 ? el * el : el));
// console.log(newMap);

// const forEachRes = numbersList.forEach(el => (el > 0 ? console.log(el) : el));
// console.log(forEachRes);

// const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// // const redResult = transactions.reduce((acc, el) => {
// //   console.log("acc", acc);
// //   console.log("el", el);
// //   if (el > 100) {
// //     acc += el;
// //   }
// //   return acc;
// // });

// // console.log(redResult);

// const redRes = transactions.reduce((acc, el) => (el > 100 ? acc + el : acc), 0);

// console.log(redRes);

// class User {
//   constructor(id, name, sessionId) {
//     this._id = id;
//     this._name = name;
//     this._sessionId = sessionId;
//   }

//   get id() {
//     this._id = id;
//   }
//   get name() {
//     return (this._name = name);
//   }
//   get sessionId() {
//     return (this._sessionId = sessionId);
//   }
// }

// class UserRepository {
//   ///int arr
//   ///out none
//   constructor(users) {
//     this.users = Object.freeze(users);
//   }

//   get users() {
//     return this._users;
//   }

//   getUsersNames() {
//     return this.users.map(el => el.name);
//   }
//   getUserIds() {
//     return this.users.map(el => el.id);
//   }
//   getUserNameById() {}
// }

// // examples
// const user = new User("1", "Tom", "session-id");

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// // но изменить эти свойства нельзя
// // user.name = 'Bob'; // пытаемся изменить старое значение
// // console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

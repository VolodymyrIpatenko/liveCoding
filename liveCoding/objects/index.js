// function addProrerty(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// console.log(addProrerty({}, 'name', 'Tom'));
// console.log(addProrerty({}, NaN, 15));
// console.log(addProrerty({}, null, '0'));

// function addProrertyV2(obj, key, value) {
//   ///input target object, obj,obj
//   //// output object
//   return Object.assign(obj, { [key]: value });
// }

// console.log(addProrertyV2({}, 'currency', 'USD'));

// function addProrertyV3(obj, key, value) {
//   ///input object,object,object
//   ///output object

//   return Object.assign({}, obj, { [key]: value });
// }

// const transaction = {
//   sum: 200,
// };
// const res1 = addProrertyV3(transaction, 'currency', 'USD');
// const res2 = addProrertyV3(res1, 'city', 'Kyiv');

// console.log(res1);
// console.log(res2);
// console.log(transaction);
// console.log(res1, res2, transaction);

// function addProrertyV4(obj, key, value) {
//   return { ...obj, [key]: value };
// }

// const company = {
//   name: 'Apple',
// };

// console.log(addProrertyV4({}, 'name', 'Bob'));
// const result = addProrertyV4(company, 'age', 150);
// console.log(result);
// console.log(company);
// const keysList = ['name', 'address', 'age'];
// const valuesList = ['Bob', 'Ukraine', 34];

// function buildObject(keysList, valuesList) {
//   return keysList.reduce(
//     (obj, key, index) => ({
//       ...obj,
//       [key]: valuesList[index],
//     }),
//     {}
//   );
// }
// console.log(buildObject(keysList, valuesList));

// const obb = {
//   name: 'Apple',
//   country: 'USA',
// };
// console.log(obb['name']);

// const man = new Array();
// const man2 = [];
// console.log(man2.__proto__ === man.__proto__);

// const getCustomersList = obj => {
//   // put your code here
// };

// const obj1 = {
//   name: 'Bob',
//   age: 17,
//   isStudent: true,
// };

// const obj2 = {
//   name: 'Tom',
//   age: 35,
//   isStudent: true,
// };
// const obj3 = {
//   name: 'Tom',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   age: 17,
//   name: 'Tom',
// };

// function compareObjects(obj1, obj2) {
//   const firstObjectKeys = Object.keys(obj1);
//   const secondObjectKeys = Object.keys(obj2);
//   if (firstObjectKeys.length !== secondObjectKeys.length) {
//     return false;
//   }
//   return firstObjectKeys.every(key => obj1[key] === obj2[key]);
// }

// console.log(compareObjects(obj1, obj2));

// ////input obj
// ////output arr

// //////get pair key/value
// ////// iterate arr of entries  - on every step creae new object
// /////sort arr
// const getPeople = customers => {
//   return Object.entries(customers)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);
// };

// const customers = {
//   'customers-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customers-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
//   'customers-id-3': {
//     name: 'Ann',
//     age: 16,
//   },
// };
// console.log(getPeople(customers));

// /////Alexsandr
// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort(
//       (customerFirst, customerSecond) => customerFirst.age - customerSecond.age
//     );

// ///////// Anastasia
// ////dont't use values
// ////don't use index
// ////bad naming
// const getCustomersList = obj => {
//   return (
//     Object.keys(obj)
//       // const values = Object.values(obj);
//       .map(key => ({ ...obj[key], id: key }))
//       .sort((a, b) => a.age - b.age)
//   );
// };

// ////////Olekii
// ////don't use values
// ////don't use index
// ///bad naming
// /////remove redundant variables
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({
//       ...customerIdValue,
//       id: customersIdList[index],
//     }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// ////////Olexandr
// //////bad

// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

///////Vitalyi
/////Bad
///////bad naming
////redundant variables
////don't use shift
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

///////Don't use index
/////bad naming

// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc[index] = { id: elem, ...customers[elem] };
//      return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);
////////
////Bad
////redundant variables
////bad naming
/////
// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };

const setId = obj => {
  const keys = Object.keys(obj);
  return keys.map(key => ({ id: key, ...obj[key] }));
};
const obj = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customers-id-3': {
    name: 'Ann',
    age: 16,
  },
};
console.log(setId(obj));

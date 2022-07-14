function addProrerty(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(addProrerty({}, 'name', 'Tom'));
console.log(addProrerty({}, NaN, 15));
console.log(addProrerty({}, null, '0'));

function addProrertyV2(obj, key, value) {
  ///input target object, obj,obj
  //// output object
  return Object.assign(obj, { [key]: value });
}

console.log(addProrertyV2({}, 'currency', 'USD'));

function addProrertyV3(obj, key, value) {
  ///input object,object,object
  ///output object

  return Object.assign({}, obj, { [key]: value });
}

const transaction = {
  sum: 200,
};
const res1 = addProrertyV3(transaction, 'currency', 'USD');
const res2 = addProrertyV3(res1, 'city', 'Kyiv');

console.log(res1);
console.log(res2);
console.log(transaction);
console.log(res1, res2, transaction);

function addProrertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

const company = {
  name: 'Apple',
};

console.log(addProrertyV4({}, 'name', 'Bob'));
const result = addProrertyV4(company, 'age', 150);
console.log(result);
console.log(company);

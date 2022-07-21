const makePromise = value => {
  return Promise.resolve(value);
};
console.log(makePromise(10));

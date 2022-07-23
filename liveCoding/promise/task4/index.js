const failedPromise = new Promise((resolve, reject) => {
  /* ...code here */
  reject(new Error('Oops, error!'));
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
  /* ...code here */
  console.log(error);
});

function makePromise(value) {
  return Promise.resolve(value);
}
console.log(makePromise(10));

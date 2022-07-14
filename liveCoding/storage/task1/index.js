///input string,number,boolean,null
////output object
// localStorage.clear();
localStorage.setItem('hobby', JSON.stringify({ name: 'Bill' }));
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(20));

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (el) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());

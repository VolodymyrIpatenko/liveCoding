////input number
///output object
const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('Done');
    }, 1000);
  });

delay(1000).then(value => console.log(value));

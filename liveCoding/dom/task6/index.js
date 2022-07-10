// const setButton = buttonText => {
//   document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
// };

// setButton('button text');

// function createButton(buttonText) {
//   const body = document.querySelector('body');
//   const button = document.createElement('button');
//   button.textContent = buttonText;
//   body.append(button);
// }

// console.log(createButton('send email'));

function finishList() {
  const fifth = document.querySelector('.special');
  const list = document.querySelector('.list');
  const firstLi = document.createElement('li');
  firstLi.textContent = 1;
  const fourthLi = document.createElement('li');
  fourthLi.textContent = 4;
  const sixthLi = document.createElement('li');
  sixthLi.textContent = 6;
  const eigthLi = document.createElement('li');
  eigthLi.textContent = 8;
  list.prepend(firstLi);
  list.append(eigthLi);
  fifth.before(fourthLi);
  fifth.after(sixthLi);
}

finishList();

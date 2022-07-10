const inputText = document.querySelector('.text-input');

function getText(event) {
  console.log(event.target.value);
}

inputText.addEventListener('change', getText);

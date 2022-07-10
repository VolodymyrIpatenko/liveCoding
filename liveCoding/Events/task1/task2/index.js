const textInput = document.querySelector('.text-input');

function getValue() {
  console.log(textInput.value);
}

textInput.addEventListener('change', getValue);

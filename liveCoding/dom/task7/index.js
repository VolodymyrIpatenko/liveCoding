function finishForm() {
  const secondInput = document.querySelector('.login-form input[type=text]');
  const form = document.querySelector('.login-form');
  const newNode = document.createElement('input');
  newNode.setAttribute('name', 'login');
  newNode.setAttribute('type', 'text');
  form.prepend(newNode);
  secondInput.setAttribute('type', 'password');
}

finishForm();

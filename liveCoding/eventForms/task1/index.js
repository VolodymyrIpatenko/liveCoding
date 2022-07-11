///input string
///output object

const emailElem = document.querySelector('#email');
const passwordElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');

const isMail = value =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorByField = {
  email: [isRequired, isMail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

emailElem.addEventListener('input', onEmailChange);
passwordElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value })
  );
  alert(formData);
};
formElem.addEventListener('submit', onFormSubmit);

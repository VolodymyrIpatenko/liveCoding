const squaredNumbers = () => {
  const number = [...document.querySelectorAll('.number')];
  const squared = elem => elem * elem;

  number.map(el => {
    const { number } = el.dataset;
    el.setAttribute('data-squared-number', squared(number));
  });
};

squaredNumbers();

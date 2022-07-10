const btn = document.querySelector('.single-use-btn');

function clickBtn() {
  console.log('clicked');
  btn.removeEventListener('click', clickBtn);
}

btn.addEventListener('click', clickBtn);

// btn.addEventListener('click', clickBtn, { once: true });

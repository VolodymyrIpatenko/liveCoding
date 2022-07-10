const btns = document.querySelectorAll('.btn');

function handleClick(event) {
  const target = event.target;
  console.log(target.textContent);
}

const result = [...btns].map(el => el.addEventListener('click', handleClick));

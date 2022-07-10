const elem = document.querySelectorAll('.pagination__page');

function getNumber(event) {
  console.log(event.target.dataset.pageNumber);
}

const result = [...elem].map(el => el.addEventListener('click', getNumber));

const btnSearch = document.querySelector('.search__btn');
const inputSearch = document.querySelector('.search__input');

function inputText() {
  console.log(inputSearch.value);
}

btnSearch.addEventListener('click', inputText);

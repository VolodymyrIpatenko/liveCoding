function getSection(num) {
  const findElement = document.querySelector(`span[data-number="${num}"]`);
  const parents = findElement.closest('.box');
  return parents.dataset.sec;
}

console.log(getSection(1));

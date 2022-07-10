const checkBox = document.querySelector('.task-status');

function changeStatus(event) {
  console.log(event.target.checked);
}

checkBox.addEventListener('change', changeStatus);

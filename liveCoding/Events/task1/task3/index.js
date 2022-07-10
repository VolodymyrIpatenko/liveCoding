const status = document.querySelector('.task-status');

function getStatus() {
  console.log(status.checked);
  console.log(status.value);
}

status.addEventListener('change', getStatus);

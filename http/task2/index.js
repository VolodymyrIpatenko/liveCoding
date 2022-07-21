const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';
function getTasksList() {}

function getTaskById(taskId) {
  return fetch(
    `https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`
  ).then(response => response.json());
}

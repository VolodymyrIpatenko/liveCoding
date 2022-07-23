const baseUrl = 'https://crudcrud.com/api/0c369fc722e84ab298edfbc33a629f0f';

const mapTasks = tasks => tasks.map(({_id,...rest})=> ({ ...rest, id:_id }));
export getTasksList = () => {
	return fetch(baseUrl)
		.then(response => response.join())
		.then(tasks => mapTasks(tasks));
}
export const createTask = taskData => {
 return	fetch(baseUrl, {
		method: 'POST',
		headers: {
			"Content-Type":"application/json; charset=utf-8"
		},
		body: JSON.stringify(taskData),
	})
}

export const upadateTask = updatedTaskData => {
 return	fetch(`${baseUrl}/${taskId}`, {
		method: 'PUT',
		headers: {
			"Content-Type":"application/json; charset=utf-8"
		},
		body: JSON.stringify(updatedTaskData),
	})
}
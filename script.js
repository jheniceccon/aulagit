document.getElementById('addTaskButton').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => taskItem.remove());

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluir';
    completeButton.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
});

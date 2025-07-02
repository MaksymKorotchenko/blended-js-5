import { saveLocal } from './local-storage-api';
import { form } from './refs';
import { addTask } from './render-tasks';

let tasks = [];

export const handleSubmit = event => {
  event.preventDefault();
  const { taskName, taskDescription } = event.currentTarget.elements;

  if (!taskName.value.trim() || !taskDescription.value.trim()) return;

  const newTask = {
    title: taskName.value.trim(),
    description: taskDescription.value.trim(),
    id: Date.now(),
  };

  form.reset();
  tasks.push(newTask);

  saveLocal(tasks);

  addTask(newTask);
};

export const handleClick = event => {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const currentTask = event.target.closest('.task-list-item');
  const taskId = Number(currentTask.id);
  tasks = tasks.filter(task => task.id !== taskId);

  saveLocal(tasks);
  currentTask.remove();
};

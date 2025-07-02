import { items } from './refs';
import { addTask } from './render-tasks';

export const saveLocal = data => {
  localStorage.setItem('taskData', JSON.stringify(data));
};

export const loadLocal = () => {
  const savedData = JSON.parse(localStorage.getItem('taskData'));
  if (!savedData) return;
  savedData.forEach(item => {
    addTask(item);
  });
};

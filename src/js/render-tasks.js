import { list } from './refs';
import { createMarkup } from './markup-tasks';

export const addTask = item => {
  list.insertAdjacentHTML('beforeend', createMarkup(item));
};

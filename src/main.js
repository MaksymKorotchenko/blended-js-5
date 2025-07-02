import { list } from './js/refs';
import { loadLocal, saveLocal } from './js/local-storage-api';
import { deleteBtn, form, themeBtn } from './js/refs';
import { handleClick, handleSubmit } from './js/tasks';
import { checkTheme, handleThemeClick, applyTheme } from './js/theme-switcher';
// Розмітка картки задачі
// <li class="task-list-item">
//     <button class="task-list-item-btn">Delete</button>
//     <h3>Заголовок</h3>
//     <p>Текст</p>
// </li>
checkTheme();
applyTheme();
loadLocal();

form.addEventListener('submit', handleSubmit);
list.addEventListener('click', handleClick);
themeBtn.addEventListener('click', handleThemeClick);

const form = document.querySelector('.header-form'),
  inputName = document.querySelector('.header-form-input[taskName]'),
  inputDesc = document.querySelector('.header-form-input[taskDescription]'),
  submitBtn = document.querySelector('.header-form-btn'),
  deleteBtn = document.querySelector('.task-list-item-btn'),
  list = document.querySelector('.tasks-list'),
  items = document.querySelectorAll('.task-list-item'),
  themeBtn = document.querySelector('.theme-toggle-button');

export {
  form,
  inputName,
  inputDesc,
  submitBtn,
  list,
  items,
  deleteBtn,
  themeBtn,
};

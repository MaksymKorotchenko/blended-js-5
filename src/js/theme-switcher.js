export const checkTheme = () => {
  if (!localStorage.getItem('savedTheme')) {
    localStorage.setItem('savedTheme', 'theme-dark');
  }
};

export const handleThemeClick = () => {
  const current = localStorage.getItem('savedTheme');
  const newTheme = current === 'theme-dark' ? 'theme-light' : 'theme-dark';
  localStorage.setItem('savedTheme', newTheme);

  applyTheme();
};

export const applyTheme = () => {
  const saved = localStorage.getItem('savedTheme');

  document.body.classList.remove('theme-dark', 'theme-light');
  document.body.classList.add(saved);
};

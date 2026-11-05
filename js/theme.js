const button =
  document.getElementById('themeBtn');

button.addEventListener('click', () => {
  const dark =
    document.body.classList.toggle(
      'dark-theme',
    );
  button.textContent = dark
    ? 'Светлая тема'
    : 'Тёмная тема';
  button.setAttribute(
    'aria-pressed',
    String(dark),
  );
});

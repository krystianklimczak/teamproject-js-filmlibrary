const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

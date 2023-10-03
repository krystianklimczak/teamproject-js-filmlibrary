const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  arrow.classList.toggle('arrow--hidden', window.scrollY < 35);
});

const arrow = document.querySelector('.arrow');
const header = document.querySelector('.header');

arrow.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

let observer = new IntersectionObserver(showArrow, options);
observer.observe(header);

function showArrow(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      arrow.classList.add('is-hidden');
    } else {
      arrow.classList.remove('is-hidden');
    }
  });
}

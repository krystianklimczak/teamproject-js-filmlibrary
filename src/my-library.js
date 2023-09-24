import './sass/main.scss';

const navigation = document.querySelectorAll('.navigation__item');

for (const item of navigation) {
  item.classList.toggle('is-active');
}

const library = document.querySelector('.my-library');

if (library.innerHTML === '') {
  library.classList.add('is-empty');
}

const header = document.querySelector('.header');

header.classList.toggle('header-library');

const form = document.querySelector('.search-form');
form.classList.add('is-hidden');

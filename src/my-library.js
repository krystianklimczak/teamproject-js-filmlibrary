import './sass/main.scss';

const navigation = document.querySelectorAll('.navigation__item');
const myLibrary = document.querySelector('.my-library');
const header = document.querySelector('.header');
const form = document.querySelector('.search-form');
const libraryBtns = document.querySelectorAll('.library__button');
const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');

for (const item of navigation) {
  item.classList.toggle('is-active');
}

if (myLibrary.innerHTML === '') {
  myLibrary.classList.add('is-empty');
}

header.classList.toggle('header-library');

form.classList.add('is-hidden');

for (const btn of libraryBtns) {
  btn.classList.toggle('is-hidden');
}

for (const btn of libraryBtns) {
  btn.addEventListener('click', e => {
    const classArray = e.target.classList;
    btn.classList.toggle('library__button--current');
  });
}

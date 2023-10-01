import './sass/main.scss';
import './js/modal-squad';
import './js/sticky-menu';
import { checkLibraryMovies } from './js/my-library';

const navigation = document.querySelectorAll('.navigation__item');
const myLibrary = document.querySelector('.my-library');
const header = document.querySelector('.header');
const banner = document.querySelector('.banner');
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

document.querySelector('.banner-library').style.display = "block";
document.querySelector('.banner').style.display = "none";

for (const btn of libraryBtns) {
  btn.classList.toggle('is-hidden');
  btn.addEventListener('click', e => {
    const arrayL = [...e.target.classList];
    const check = arrayL.some(el => el === 'library__button--current');
    if (check) {
      return;
    } else {
      watched.classList.toggle('library__button--current');
      queue.classList.toggle('library__button--current');
    }
  });
}

checkLibraryMovies();

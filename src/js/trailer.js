import { fetchTrailer } from './filmApi';
import Notiflix from 'notiflix';

export async function getTrailerKey(id) {
  try {
    const response = await fetchTrailer(id);
    const trailerKey = await response.data.results[0].key;

    return trailerKey;
  } catch (error) {
    return Notiflix.Notify.failure('Ups! No video has been found.');
  }
}

const backdrop = document.querySelector('.modal-backdrop');
const trailer = document.querySelector('.modal-trailer');

export function showTrailer(key) {
  if (!key) {
    return;
  }
  trailer.innerHTML = '';
  trailer.insertAdjacentHTML(
    'afterbegin',
    `<iframe class="modal-trailer__iframe" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  );
  //TRAILER CLOSE BTN
  const trailerCloseBtnHTML = `<button class ="modal-trailer__button">X</button>`;
  trailer.insertAdjacentHTML('beforeend', trailerCloseBtnHTML);

  const trailerCloseBtn = document.querySelector('.modal-trailer__button');
  trailerCloseBtn.addEventListener('click', closeTrailer);

  backdrop.innerHTML = '';
  backdrop.classList.remove('is-hidden');
  trailer.classList.remove('is-hidden');
  backdrop.addEventListener('click', closeTrailer);
  document.addEventListener('keydown', handler);
  document.body.style.overflow = 'hidden';
}

function closeTrailer() {
  const trailerCloseBtn = document.querySelector('.modal-trailer__button');
  trailerCloseBtn.removeEventListener('click', closeTrailer);
  trailer.innerHTML = '';
  backdrop.classList.add('is-hidden');
  trailer.classList.add('is-hidden');
  backdrop.innerHTML = '';
  document.body.style.overflow = 'auto';
  backdrop.removeEventListener('click', closeTrailer);
  document.removeEventListener('keydown', handler);
}
function handler(e) {
  if (e.key === 'Escape') {
    const trailerCloseBtn = document.querySelector('.modal-trailer__button');
    trailerCloseBtn.removeEventListener('click', closeTrailer);
    trailer.innerHTML = '';
    backdrop.classList.add('is-hidden');
    trailer.classList.add('is-hidden');
    backdrop.innerHTML = '';
    document.body.style.overflow = 'auto';
    backdrop.removeEventListener('click', closeTrailer);
    document.removeEventListener('keydown', handler);
  }
}

import { fetchTrailer } from './filmApi';
import Notiflix from 'notiflix';

export async function getTrailerKey(id) {
  try {
    const response = await fetchTrailer(id);
    const trailerKey = await response.data.results[0].key;

    return trailerKey;
  } catch (error) {
    console.log(error);
  }
}
const backdrop = document.querySelector('.modal-backdrop');
const trailer = document.querySelector('.modal-trailer');

export function showTrailer(key) {
  // `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  if (!key) {
    return Notiflix.Notify.failure('Ups! No video has been found.');
  }
  //const trailer = document.createElement('div');
  //trailer.classList.add('modal-trailer');
  trailer.innerHTML = '';
  trailer.insertAdjacentHTML(
    'afterbegin',
    `<iframe class="modal-trailer__iframe" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  );
  //TRAILER CLOSE BTN
  const trailerCloseBtn = `<button class ="modal-trailer__button">X</button>`;
  trailer.insertAdjacentHTML('beforeend', trailerCloseBtn);

  //
  backdrop.innerHTML = '';
  backdrop.insertAdjacentElement('afterbegin', trailer);
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  backdrop.addEventListener('click', closeTrailer);
  document.addEventListener('keydown', handler);
}
function closeTrailer() {
  backdrop.classList.add('is-hidden');
  backdrop.innerHTML = '';
  document.removeEventListener('click', closeTrailer);
  document.body.style.overflow = 'auto';
}
function handler(e) {
  if (e.key === 'Escape') {
    backdrop.classList.add('is-hidden');
    backdrop.innerHTML = '';
    document.removeEventListener('keydown', handler);
    document.body.style.overflow = 'auto';
  }
}

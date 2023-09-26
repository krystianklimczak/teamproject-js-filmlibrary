<<<<<<< HEAD
import { fetchTrailers } from './filmApi';

const main = document.querySelector('.main-section');
main.addEventListener('click', e => {
  if (e.target.type === 'button') {
    fetchTrailers(e.target.value)
      .then(key => openModalByKey(key))
      .catch(error => console.log(error));
  }
});
const modalBox = document.querySelector('.modal-trailer');

function openModalByKey(key) {
  modalBox.innerHTML = '';
  const text = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  modalBox.insertAdjacentHTML('beforeend', text);
  modalBox.classList.remove('is-hidden');
  window.addEventListener('keydown', escape);
}

function escape(e) {
  if ((e.key = 'Escape')) {
    modalBox.classList.add('is-hidden');
    modalBox.innerHTML = '';
=======
import { fetchTrailer } from './filmApi';

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

export function showTrailer(key) {
  // `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  const trailer = document.createElement('div');
  trailer.classList.add('modal-trailer');
  trailer.insertAdjacentHTML(
    'afterbegin',
    `<iframe class="modal-trailer__iframe" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  );
  backdrop.innerHTML = '';
  backdrop.insertAdjacentElement('afterbegin', trailer);
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  backdrop.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
    backdrop.innerHTML = '';
    document.body.style.overflow = 'auto';
  });
  document.addEventListener('keydown', handler);
}

function handler(e) {
  if (e.key === 'Escape') {
    backdrop.classList.add('is-hidden');
    backdrop.innerHTML = '';
    document.removeEventListener('keydown', handler);
    document.body.style.overflow = 'auto';
>>>>>>> 289e7698c6e2a78a2629dc5af3de84046917bca1
  }
}

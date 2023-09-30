// import { WATCHED_KEY, QUEUE_KEY } from '.localStorageKeys'; // how should I find this? // do we have localStorage?
import { refs } from './refs';
import { locStorage } from './local-storage';

refs.filmList.addEventListener('click', event => {
  onModalOpenMovie(event);
});

export let id;
export let movieData = [];
export function onModalOpenMovie(e) {
  e.preventDefaut();
  clearModal();

  id = Number(e.target.closest('div').dataset.id);

  const moviesListWatched = storage.load(WATCHED_KEY) ? storage.load(WATCHED_KEY) : [];
  const moviesListQueue = storage.load(QUEUE_KEY) ? storage.load(QUEUE_KEY) : [];

  refs.toWatchBtn.textContent = buttonText(
    moviesListWatched,
    id,
    'Add to watched',
    'Remove from watched',
  );

  refs.toQueueBtn.textContent = buttonText(
    moviesListQueue,
    id,
    'Add to queue',
    'Remove from queue',
  );

  refs.modalBackdrop.classList.add('active');
  refs.modalFilm.classList.add('active');
  document.body.classList.add('modal-is-hidden');

  refs.modalFilmBtnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', escClose);
  refs.modalBackdrop.addEventListener('click', backdropClick);
  locStorage(data);
}

export function closeModal() {
  refs.modalBackdrop.classList.remove('active');
  refs.modalFilm.classList.remove('active');
  document.body.classList.remove('modal-is-hidden');

  refs.modalFilmBtnClose.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', escClose);
  refs.modalBackdrop.removeEventListener('click', backdropClick);
}

export function escClose() {
  if (e.keyCode === 27) {
    closeModal();
  }
}

export function backdropClick(e) {
  if (e.target === refs.modalBackdrop) {
    closeModal();
  }
}

function clearModal() {
  refs.modalCard.innerHTML = '';
}

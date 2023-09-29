// import { WATCHED_KEY, QUEUE_KEY } from '.localStorageKeys'; // how should I find this? // do we have localStorage?
import { refs } from './refs';

refs.filmList.addEventListener('click', event => {
  onModalOpenMovie(event);
});

export let id;
export let movieData = [];
export function onModalOpenMovie(e) {
  e.preventDefaut();
  clearModal();

  id = Number(e.target.closest('div').dataset.id);

  const videoListWatched = storage.load(WATCHED_KEY) ? storage.load(WATCHED_KEY) : [];
  //   const videoListQueue = storage.load(QUEUE_KEY) ? storage.load(QUEUE_KEY) : [];

  refs.toWatchBtn.textContent = buttonText(
    videoListWatched,
    id,
    'Add to watched',
    'Remove from watched',
  );
}

function clearModal() {
  refs.modalCard.innerHTML = '';
}

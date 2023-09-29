import { refs } from './refs';

export let id;
export let movieData = [];
export function onModalOpenMovie(e) {
  e.preventDefaut();
  clearModal;
}

function clearModal() {
  refs.modalCard.innerHTML = '';
}

import Notiflix from 'notiflix';
export function addToWatchQueue() {
  Notiflix.Notify.info('The movie has been added to the queue');
}

export function addToWatched() {
  Notiflix.Notify.info('The movie has been added to watched');
}
export function infoRemoveFromQueue() {
  Notiflix.Notify.info('You delete a movie from the queue');
}

export function infoRemoveFromWatched() {
  Notiflix.Notify.info('You delete a movie from the watched');
}

import {
  addToWatched,
  addToWatchQueue,
  infoRemoveFromQueue,
  infoRemoveFromWatched,
} from './notifications';

export function addBtnsListeners(key) {
  const moviesWatched = JSON.parse(localStorage.getItem('movies-watched')) || [];
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

  const addWatchedRef = document.querySelector('.add-watched');
  const addQueueRef = document.querySelector('.add-queue');

  addWatchedRef.addEventListener('click', onWatchedClick);
  addQueueRef.addEventListener('click', onQueueClick);

  // if (localStorage.length > 0) {
  //   if (moviesWatched.find(item => item === key)) {
  //     addWatchedRef.classList.add('js-remove-from');
  //     addWatchedRef.textContent = 'remove from watched';
  //   }
  // }

  // if (localStorage.length > 0) {
  //   if (moviesQueue.find(item => item === key)) {
  //     addQueueRef.classList.add('js-remove-from');
  //     addQueueRef.textContent = 'remove from queue';
  //   }
  // }

  function onWatchedClick() {
    if (!moviesWatched.find(item => item === key)) {
      moviesWatched.push(key);
      localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));

      const res = addWatchedRef.classList.toggle('js-remove-from');
      addWatchedRef.textContent = `${res ? 'remove from' : 'add to'} watched `;

      addToWatched();

      return;
    }

    let index = moviesWatched.findIndex(object => object === key);

    moviesWatched.splice(index, 1);
    localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));

    const res = addWatchedRef.classList.toggle('js-remove-from');
    addWatchedRef.textContent = `${res ? 'remove from' : 'add to'} watched `;

    infoRemoveFromWatched();
  }

  function onQueueClick() {
    if (!moviesQueue.find(item => item === key)) {
      moviesQueue.push(key);
      localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));

      const res = addQueueRef.classList.toggle('js-remove-from');
      addQueueRef.textContent = `${res ? 'remove from' : 'add to'} queue `;

      addToWatchQueue();

      return;
    }

    let index = moviesQueue.findIndex(object => object === key);

    moviesQueue.splice(index, 1);
    localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));

    const res = addQueueRef.classList.toggle('js-remove-from');
    addQueueRef.textContent = `${res ? 'remove from' : 'add to'} queue `;

    infoRemoveFromQueue();
  }
}

export function checkLocalStorage(key) {
  const watchedLocalStorage = JSON.parse(localStorage.getItem('movies-watched')) || [];
  const queueLocalStorage = JSON.parse(localStorage.getItem('movies-queue')) || [];

  queueLocalStorage.find(queueKey => {
    if (queueKey === key) {
      const addQueueRef = document.querySelector('.add-queue');
      const que = addQueueRef.classList.toggle('js-remove-from');
      addQueueRef.textContent = `${que ? 'remove from' : 'add to'} queue `;
    }
  });

  watchedLocalStorage.find(watchedKey => {
    if (watchedKey === key) {
      const addWatchedRef = document.querySelector('.add-watched');
      const watch = addWatchedRef.classList.toggle('js-remove-from');
      addWatchedRef.textContent = `${watch ? 'remove from' : 'add to'} watched `;
    }
  });
}

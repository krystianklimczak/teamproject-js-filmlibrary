import {
  addToWatched,
  addToWatchQueue,
  infoRemoveFromQueue,
  infoRemoveFromWatched,
} from './notifications';

export function locStorage(data) {
  const moviesWatched = JSON.parse(localStorage.getItem('movies-watched')) || [];
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

  const addWatchedRef = document.querySelector('.add-watched');
  const addQueueRef = document.querySelector('.add-queue');

  addWatchedRef.addEventListener('click', onWatchedClick);
  addQueueRef.addEventListener('click', onQueueClick);

  if (localStorage.length > 0) {
    if (moviesWatched.find(item => item.id === data.id)) {
      addWatchedRef.classList.add('js-remove-from');
      addWatchedRef.textContent = 'remove from watched';
    }
  }

  if (localStorage.length > 0) {
    if (moviesQueue.find(item => item.id === data.id)) {
      addQueueRef.classList.add('js-remove-from');
      addQueueRef.textContent = 'remove from queue';
    }
  }

  function onWatchedClick() {
    if (!moviesWatched.find(item => item.id === data.id)) {
      moviesWatched.push(data);
      localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));

      const res = addWatchedRef.classList.toggle('js-remove-from');
      addWatchedRef.textContent = `${res ? 'remove from' : 'add to'} watched `;

      addToWatched();

      return;
    }

    let index = moviesWatched.findIndex(object => object.id === data.id);

    moviesWatched.splice(index, 1);
    localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));

    const res = addWatchedRef.classList.toggle('js-remove-from');
    addWatchedRef.textContent = `${res ? 'remove from' : 'add to'} watched `;

    infoRemoveFromWatched();
  }

  function onQueueClick() {
    if (!moviesQueue.find(item => item.id === data.id)) {
      moviesQueue.push(data);
      localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));

      const res = addQueueRef.classList.toggle('js-remove-from');
      addQueueRef.textContent = `${res ? 'remove from' : 'add to'} queue `;

      addToWatchQueue();

      return;
    }

    let index = moviesQueue.findIndex(object => object.id === data.id);

    moviesQueue.splice(index, 1);
    localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));

    const res = addQueueRef.classList.toggle('js-remove-from');
    addQueueRef.textContent = `${res ? 'remove from' : 'add to'} queue `;

    infoRemoveFromQueue();
  }
}

export function addBtnsListeners(key) {
  const addWatchedRef = document.querySelector('.add-watched');
  const addQueueRef = document.querySelector('.add-queue');

  addWatchedRef.addEventListener('click', handlerWatch);
  addQueueRef.addEventListener('click', handlerQueue);

  function handlerWatch(e) {
    console.log(key);
  }

  function handlerQueue(e) {
    console.log(key);
  }
}

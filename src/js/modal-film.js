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
import { fetchApi } from './filmApi';

export function drawModal(key) {
  const modalFilmCard = document.querySelector('.modal-film__card');
  const modalFilmContainer = document.querySelector('.modal-film');
  modalFilmCard.innerHTML = '';
  function drawFilmDetails(data) {
    const movieInfos = [];

    // variables from data
    // const movieImgPath = data.backdrop_path;
    // const movieTitle = data.title;
    // const movieVoteAverage = data.vote_average;
    // const movieVoteCount = data.vote_count;
    // const moviePopulatrity = data.popularity;
    // const movieOryginalTitle = data.original_title;
    // const movieGenres = [];
    // const movieOverview = data.overview;
    const movieGenres = [];
    data.genres.map(genre => {
      movieGenres.push(genre.name);
    });

    const movieImgBox = document.createElement('div');
    movieImgBox.setAttribute('class', 'film-info__poster'); // need this style
    movieImgBox.innerHTML = `<img class="film-info__poster" src="https://image.tmdb.org/t/p/original${data.backdrop_path}" alt="${data.title}"/>`;

    const movieTitle = document.createElement('h2');
    movieTitle.setAttribute('class', 'film-info__title');
    movieTitle.innerHTML = `${data.title}`;
    const movieDetailsBox = document.createElement('div');
    movieDetailsBox.innerHTML = `
    <p class="film-info__stats">Vote / Votes</p>
    <p class="film-info__stats">Popularity</p>
    <p class="film-info__stats">Original Title</p>
    <p class="film-info__stats">Genre</p>
    `;

    const movieDetailsBoxResults = document.createElement('div');
    movieDetailsBoxResults.innerHTML = `
    <p><span class="film-info__vote">${data.vote_average.toFixed(
      1,
    )}</span> / ${data.vote_count.toFixed(0)}</p>
    <p>${data.popularity.toFixed(0)}</p>
    <p>${data.original_title}</p>
    <p>${movieGenres.join(', ')}</p>
    `;

    const movieAbout = document.createElement('div');
    movieAbout.innerHTML = `
    <p class="film-info__about">about</p>
    <p class="film-info__descr">${data.overview}</p>
    `;

    // <button type="button" class="modal-film__btns-addToWatched">Add to watched</button>
    // <button type="button" class="modal-film__btns-addToQueue">Add to queue</button>
    const movieButtonBox = document.createElement('div');
    movieButtonBox.innerHTML = `<button type="button" class="modal-film__btns-addToWatched" value="${key}">Add to watched</button>
      <button type="button" class="modal-film__btns-addToQueue" value="${key}">Add to queue</button>`;

    movieInfos.push(
      movieImgBox,
      movieTitle,
      movieDetailsBox,
      movieDetailsBoxResults,
      movieAbout,
      movieButtonBox,
    );
    modalFilmCard.append(...movieInfos);

    const backdropModalFilm = document.querySelector('.backdrop-modal-film');
    backdropModalFilm.classList.remove('is-hidden');
    modalFilmContainer.classList.remove('is-hidden');
    window.addEventListener('keydown', closeModalEscapeHandler);
    function closeModalEscapeHandler(e) {
      if (e.key === 'Escape') {
        backdropModalFilm.classList.add('is-hidden');
        modalFilmContainer.classList.add('is-hidden');
        window.removeEventListener('keydown', closeModalEscapeHandler);
        backdropModalFilm.removeEventListener('click', closeModalHander);
      }
    }

    backdropModalFilm.addEventListener('click', closeModalHander);

    function closeModalHander(e) {
      console.log(e.target);
      backdropModalFilm.classList.add('is-hidden');
      modalFilmContainer.classList.add('is-hidden');
      window.removeEventListener('keydown', closeModalEscapeHandler);
      backdropModalFilm.removeEventListener('click', closeModalHander);
    }

    const modalFilmBtnClose = document.querySelector('.modal-film__btn-close');
    modalFilmBtnClose.addEventListener('click', () => {
      backdropModalFilm.classList.add('is-hidden');
      modalFilmContainer.classList.add('is-hidden');
    });
  }

  async function getMovieDetails(key) {
    const filmUrl = `https://api.themoviedb.org/3/movie/${key}`;
    const searchFilmParams = {
      api_key: '95f474a01cc4252905d63c7d958d5749',
      language: 'en-US',
    };
    try {
      const data = await fetchApi(filmUrl, searchFilmParams);
      return drawFilmDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  getMovieDetails(key);

  // modalFilmCard.insertAdjacentHTML('beforeend', key);
}

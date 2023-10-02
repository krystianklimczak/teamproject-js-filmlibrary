import { fetchApi } from './filmApi';
import { getTrailerKey, showTrailer } from './trailer';
import { drawModal } from './main';

const spinnerBox = document.querySelector('.spinner-box');
const moviesWatched = JSON.parse(localStorage.getItem('movies-watched')) || [];
const mainContainer = document.querySelector('.main-section');
const queueBtn = document.querySelector('.queue');
const watchedBtn = document.querySelector('.watched');
const emptyLibrary = document.querySelector('.error-library');
const myLibrary = document.querySelector('.my-library');
let posterArray = [];

queueBtn.addEventListener('click', drawQueue);
function drawQueue() {
  emptyLibrary.classList.add('is-hidden');
  myLibrary.classList.remove('is-hidden');
  posterArray = [];
  mainContainer.innerHTML = '';
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];
  if (moviesQueue.length === 0) {
    emptyLibrary.classList.remove('is-hidden');
    myLibrary.classList.add('is-hidden');
  }
  drawMovies(moviesQueue);
  queueBtn.removeEventListener('click', drawQueue);
  watchedBtn.addEventListener('click', drawWatched);
}
watchedBtn.addEventListener('click', drawWatched);
function drawWatched() {
  emptyLibrary.classList.add('is-hidden');
  myLibrary.classList.remove('is-hidden');
  posterArray = [];
  mainContainer.innerHTML = '';
  const moviesWatched = JSON.parse(localStorage.getItem('movies-watched')) || [];
  if (moviesWatched.length === 0) {
    emptyLibrary.classList.remove('is-hidden');
    myLibrary.classList.add('is-hidden');
  }
  drawMovies(moviesWatched);
  watchedBtn.removeEventListener('click', drawWatched);
  queueBtn.addEventListener('click', drawQueue);
}

async function getMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const searchParams = {
    api_key: '95f474a01cc4252905d63c7d958d5749',
    language: 'en-US',
  };
  try {
    const response = await fetchApi(url, searchParams);
    const data = await response.data;
    pushMovie(data);
    mainContainer.append(...posterArray);
  } catch (err) {
    console.log(err.message);
  }
}
function drawMovies(moviesToDraw) {
  moviesToDraw.forEach(id => {
    getMovieDetails(id);
  });
}

export function checkLibraryMovies() {
  spinnerBox.classList.add('spinner-box--hidden');
  if (moviesWatched.length === 0) {
    emptyLibrary.classList.remove('is-hidden');
    myLibrary.classList.add('is-hidden');
  }
  drawMovies(moviesWatched);
}

function pushMovie(response) {
  let genreList = [];
  response.genres.forEach(genre => {
    genreList.push(genre.name);
  });

  const filmPoster = document.createElement('div');
  filmPoster.classList.add('film-poster');
  filmPoster.setAttribute('value', response.id);
  filmPoster.addEventListener('click', e => {
    if (e.target.localName !== 'svg' && e.target.localName !== 'button') {
      drawModal(response.id);
    }
  });
  filmPoster.innerHTML = `<img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${response.poster_path}" alt="${response.title}" loading="lazy"/>`;

  const filmPosterDescription = document.createElement('div');
  filmPosterDescription.classList.add('film-poster__description');

  const filmPosterBtn = document.createElement('button');
  filmPosterBtn.classList.add('film-poster__button');
  filmPosterBtn.setAttribute('type', 'button');
  filmPosterBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>`;
  filmPosterBtn.addEventListener('click', e => {
    getTrailerKey(response.id).then(key => {
      showTrailer(key);
    });
  });

  filmPosterDescription.insertAdjacentElement('afterbegin', filmPosterBtn);
  filmPosterDescription.insertAdjacentHTML(
    'beforeend',
    ` <p class="film-poster__title">
              ${response.title}
            </p><br />
            <p class="film-poster__genre">
              ${genreList.join(', ')} |
            </p>
            <p class="film-poster__year">
              ${response.release_date.substring(0, 4)}
            </p>
          </div>
        </div>`,
  );
  filmPoster.insertAdjacentElement('beforeend', filmPosterDescription);
  posterArray.push(filmPoster);
}

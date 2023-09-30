import { fetchApi } from './filmApi';
import { getTrailerKey, showTrailer } from './trailer';
import { drawModal } from './main';

const mainContainer = document.querySelector('.main-section');
let posterArray = [];

export function checkLibraryMovies() {
  const moviesWatched = JSON.parse(localStorage.getItem('movies-watched')) || [];
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

  //   console.log(moviesWatched);
  //   console.log(moviesQueue);

  async function getMovieDetails(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const searchParams = {
      api_key: '95f474a01cc4252905d63c7d958d5749',
      language: 'en-US',
    };
    try {
      const response = await fetchApi(url, searchParams);
      pushMovie(response);
      mainContainer.append(...posterArray);
    } catch (err) {
      console.log(err.message);
    }
  }

  function drawWatched(moviesWatched) {
    moviesWatched.forEach(id => {
      getMovieDetails(id);
    });
  }

  drawWatched(moviesWatched);
}

// response is object returned from fetch
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

import { axiosSecondFetchFn, fetchGenres } from './filmApi';
import { getTrailerKey, showTrailer } from './trailer';
import { pushPagination } from './pagination';
import { fetchApi } from './filmApi';
import { checkBrowersWidth } from './pagination';
import { addBtnsListeners, checkLocalStorage } from './local-storage';

export const mainContainer = document.querySelector('.main-section');
let allGenres = [];

fetchGenres()
  .then(data => allGenres.push(...data))
  .catch(error => console.log(error));

//Function for drawing first 20 popular films

export async function makeFilmsBox() {
  // const data = await axiosSecondFetchFn()
  //   .then(data => {
  //     drawFilmBox(data.results);
  //   })
  //   .catch(error => console.log(error));
  const url = `https://api.themoviedb.org/3/movie/popular`;
  const searchParams = {
    api_key: '95f474a01cc4252905d63c7d958d5749',
    language: 'en-US',
    page: 1,
  };

  try {
    const response = await fetchApi(url, searchParams);
    const data = await response.data;
    const results = await data.results;

    return (
      drawFilmBox(results),
      pushPagination(url, searchParams, data),
      checkBrowersWidth(url, searchParams)
    );
  } catch (error) {
    console.log(error);
  }
}

export function drawFilmBox(films, isNotMobile = true) {
  let posterArray = [];
  if (isNotMobile) {
    mainContainer.innerHTML = '';
  }
  films.forEach(film => {
    //We need to add link that brings us to modal window if we press .main__photo-card

    let genreList = [];

    for (const id of film.genre_ids) {
      allGenres.map(element => {
        if (element.id === id) {
          genreList.push(element.name);
        }
      });
    }

    const filmPoster = document.createElement('div');
    filmPoster.classList.add('film-poster');
    filmPoster.addEventListener('click', e => {
      if (e.target.localName !== 'svg' && e.target.localName !== 'button') {
        drawModal(film.id);
      }
    });
    filmPoster.setAttribute('value', film.id);
    // THERE IS UPDATED POSTER CONTDITION
    if (film.poster_path === null) {
      film.poster_path = `/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg`;
    }
    filmPoster.insertAdjacentHTML(
      'afterbegin',
      `<img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${film.poster_path}" alt="${film.title}" loading="lazy"/>`,
    );
    const filmPosterDescription = document.createElement('div');
    filmPosterDescription.classList.add('film-poster__description');
    const filmPosterBtn = document.createElement('button');
    filmPosterBtn.classList.add('film-poster__button');
    filmPosterBtn.setAttribute('type', 'button');
    filmPosterBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>`;
    filmPosterBtn.addEventListener('click', e => {
      getTrailerKey(film.id).then(key => {
        showTrailer(key);
      });
      // showTrailer(trailerKey);
    });
    filmPosterDescription.insertAdjacentElement('afterbegin', filmPosterBtn);
    filmPosterDescription.insertAdjacentHTML(
      'beforeend',
      ` <p class="film-poster__title">
              ${film.title}
            </p><br />
            <p class="film-poster__genre">
              ${genreList.join(', ')} |
            </p>
            <p class="film-poster__year">
              ${film.release_date.substring(0, 4)}
            </p>
          </div>
        </div>`,
    );
    filmPoster.insertAdjacentElement('beforeend', filmPosterDescription);
    posterArray.push(filmPoster);
  });
  mainContainer.append(...posterArray);
}

export function drawModal(key) {
  const modalFilmCard = document.querySelector('.modal-film__card');
  modalFilmCard.innerHTML = '';
  function drawFilmDetails(data) {
    const movieInfos = [];

    const movieGenres = [];
    data.genres.map(genre => {
      movieGenres.push(genre.name);
    });

    const movieImgBox = document.createElement('div');
    movieImgBox.innerHTML = `<img class="film-info__poster" src="https://image.tmdb.org/t/p/original${data.backdrop_path}" alt="${data.title}"/>`;

    const movieTitle = document.createElement('div');
    movieTitle.setAttribute('class', 'film-info__title');
    movieTitle.innerHTML = `${data.title}`;

    const movieDetailsBox = document.createElement('div');
    movieDetailsBox.classList.add('film-info__stats-container');
    movieDetailsBox.innerHTML = `
    <span class="film-info__stats">Vote / Votes<span class="film-info__stats-votes">${data.vote_average.toFixed(
      1,
    )}</span><span class="film-info__stats-votecount"> / ${data.vote_count.toFixed(
      0,
    )}</span></span></span><br/>
    <span class="film-info__stats">Popularity<span class="film-info__stats-popularity">${data.popularity.toFixed(
      0,
    )}</span></span> <br/>
    <span class="film-info__stats">Original Title <span class="film-info__stats-title">${
      data.original_title
    }</span></span><br/>
    <span class="film-info__stats">Genre <span class="film-info__stats-genres">${movieGenres.join(
      ', ',
    )}</span></span>
    `;

    const movieAbout = document.createElement('div');
    movieAbout.innerHTML = `
    <p class="film-info__about">about</p>
    <p class="film-info__descr">${data.overview}</p>
    `;

    const movieButtonBox = document.createElement('div');
    movieButtonBox.classList.add('movie-button-box');

    movieButtonBox.innerHTML = `<button type="button" class="modal-film__btns-addToWatched add-watched" value="${key}">Add to watched</button>
      <button type="button" class="modal-film__btns-addToQueue add-queue" value="${key}">Add to queue</button>`;

    movieInfos.push(movieImgBox, movieTitle, movieDetailsBox, movieAbout, movieButtonBox);
    modalFilmCard.append(...movieInfos);

    addBtnsListeners(key);
    checkLocalStorage(key);

    const backdropModalFilm = document.querySelector('.backdrop-modal-film');
    const modalFilm = document.querySelector('.modal-film');
    backdropModalFilm.classList.remove('is-hidden');
    modalFilm.classList.remove('is-hidden');
    window.addEventListener('keydown', closeModalEsc);
    function closeModalEsc(ev) {
      if (ev.key === 'Escape') {
        backdropModalFilm.classList.add('is-hidden');
        modalFilm.classList.add('is-hidden');
        window.removeEventListener('keydown', closeModalEsc);
      }
    }
    backdropModalFilm.addEventListener('click', closeModal);
    function closeModal() {
      backdropModalFilm.classList.add('is-hidden');
      modalFilm.classList.add('is-hidden');
      backdropModalFilm.removeEventListener('click', closeModal);
      modalFilmBtnClose.removeEventListener('click', closeModal);
    }

    const modalFilmBtnClose = document.querySelector('.modal-film__btn-close');
    modalFilmBtnClose.addEventListener('click', closeModal);
  }

  async function getMovieDetails(key) {
    const filmUrl = `https://api.themoviedb.org/3/movie/${key}`;
    const searchFilmParams = {
      api_key: '95f474a01cc4252905d63c7d958d5749',
      language: 'en-US',
    };
    try {
      const response = await fetchApi(filmUrl, searchFilmParams);
      const data = await response.data;
      return drawFilmDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  getMovieDetails(key);

  // modalFilmCard.insertAdjacentHTML('beforeend', key);
}

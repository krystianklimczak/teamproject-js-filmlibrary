import { fetchApi } from './filmApi';

export function drawModal(key) {
  const modalFilmCard = document.querySelector('.modal-film__card');
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
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        backdropModalFilm.classList.add('is-hidden');
      }
    });
    backdropModalFilm.addEventListener('click', () => {
      backdropModalFilm.classList.add('is-hidden');
    });

    const modalFilmBtnClose = document.querySelector('.modal-film__btn-close');
    modalFilmBtnClose.addEventListener('click', () => {
      backdropModalFilm.classList.add('is-hidden');
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

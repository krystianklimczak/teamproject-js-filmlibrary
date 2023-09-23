import { axiosSecondFetchFn, fetchGenres } from './filmApi';

const mainContainer = document.querySelector('.main-section');
let allGenres = [];

fetchGenres()
  .then(data => allGenres.push(data))
  .catch(error => console.log(error));

//Function for drawing first 20 popular films

export async function makeFilmsBox() {
  const data = await axiosSecondFetchFn()
    .then(data => {
      drawFilmBox(data.results);
      console.log(data.results);
    })
    .catch(error => console.log(error.message));
}

function drawFilmBox(films) {
  films.forEach(film => {
    //We need to add link that brings us to modal window if we press .main__photo-card

    let genreList = [];

    for (const id of film.genre_ids) {
      allGenres[0].map(element => {
        if (element.id === id) {
          genreList.push(element.name);
        }
      });
    }

    const filmBox = `<div class="film-poster" data-id="${film.id}">
          <img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${
            film.poster_path
          }" alt="${film.title}" loading="lazy"/>
          <div class="film-poster__description">
            <p class="film-poster__title">
              <b>${film.title}</b>
            </p><button class="film-poster__button" type="button">Trailer</button><br />
            <p class="film-poster__genre">
              <b>${genreList.join(', ')} | </b>
            </p>
            <p class="film-poster__year">
              <b>${film.release_date.substring(0, 4)}</b>
            </p>
          </div>
        </div>`;
    mainContainer.insertAdjacentHTML('beforeend', filmBox);
  });
}

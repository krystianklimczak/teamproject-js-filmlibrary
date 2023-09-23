import { axiosSecondFetchFn, fetchGenres } from './filmApi';

const mainContainer = document.querySelector('.main__section');
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

    const filmBox = `<div class="main__photo-card data-id="${film.id}">
          <img class="main__photo-image" src="https://image.tmdb.org/t/p/original${
            film.poster_path
          }" alt="${film.title}" loading="lazy"/>
          <div class="main__photo-description">
            <p class="main__photo-title">
              <b>${film.title}</b>
            </p><button class="main__button-trailer" type="button">Trailer</button><br />
            <p class="main__photo-genre">
              <b>${genreList.join(', ')} | </b>
            </p>
            <p class="main__photo-year">
              <b>${film.release_date.substring(0, 4)}</b>
            </p>
          </div>
        </div>`;
    mainContainer.insertAdjacentHTML('beforeend', filmBox);
  });
}

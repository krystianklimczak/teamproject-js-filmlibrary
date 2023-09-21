import axios from 'axios';
import options from './filmApi';
const API_KEY = '95f474a01cc4252905d63c7d958d5749';
const mainContainer = document.querySelector('.main__section');
let allGenres = [];

//Fetching popular films from API

const axiosFetchFilms = async () => {
  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Fetching data genres

export const fetchGenres = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: API_KEY,
      },
    });
    const genres = response.data.genres;
    return genres;
  } catch (error) {
    console.error(error.message);
  }
};

fetchGenres()
  .then(data => allGenres.push(data))
  .catch(error => console.log(error));

//Function for drawing first 20 popular films

export async function makeFilmsBox() {
  const data = await axiosFetchFilms()
    .then(data => {
      drawFilmBox(data.results);
    })
    .catch(error => console.log(error.message));
}

function drawFilmBox(films) {
  films.forEach(film => {
    //We need to add link that brings us to modal window if we press .main__photo--card

    let genreList = [];

    for (const id of film.genre_ids) {
      allGenres[0].map(element => {
        if (element.id === id) {
          genreList.push(element.name);
        }
      });
    }

    const filmBox = `<div class="main__photo--card data-id="${film.id}" ">
          <img src="https://image.tmdb.org/t/p/original${film.poster_path}" alt="${
      film.title
    }" loading="lazy"/>
          <div class="main__photo--description">
            <p class="main__photo--title">
              <b>${film.title}</b>
            </p>
            <p class="main__photo--genre">
              <b>${genreList}</b>
            </p>
            <p class="main__photo--year">
              <b>${film.release_date.substring(0, 4)}</b>
            </p>
            <p class="main__photo--vote">
              ${film.vote_average}
            </p>
          </div>
        </div>`;
    mainContainer.insertAdjacentHTML('beforeend', filmBox);
  });
}

makeFilmsBox();

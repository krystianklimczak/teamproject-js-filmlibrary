import { axiosSecondFetchFn, fetchGenres } from './filmApi';
import { getTrailerKey, showTrailer } from './trailer';
//import { pagination, makeFilmsBoxByPage } from './pagination';

const mainContainer = document.querySelector('.main-section');
let allGenres = [];

fetchGenres()
  .then(data => allGenres.push(...data))
  .catch(error => console.log(error));

//Function for drawing first 20 popular films

export async function makeFilmsBox() {
  const data = await axiosSecondFetchFn()
    .then(data => {
      drawFilmBox(data.results);
    })
    .catch(error => console.log(error.message));
}

export function drawFilmBox(films) {
  let posterArray = [];
  mainContainer.innerHTML = '';
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

    // const filmBox = `<div class="film-poster" data-id="${film.id}">
    // <img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${
    //   film.poster_path
    // }" alt="${film.title}" loading="lazy"/>
    //       <div class="film-poster__description">
    //       <button class="film-poster__button" type="button" value="${film.id}">▶</button>
    // <p class="film-poster__title">
    //   ${film.title}
    // </p><br />
    // <p class="film-poster__genre">
    //   ${genreList.join(', ')} |
    // </p>
    // <p class="film-poster__year">
    //   ${film.release_date.substring(0, 4)}
    // </p>
    //       </div>
    //     </div>`;
    const filmPoster = document.createElement('div');
    filmPoster.classList.add('film-poster');
    filmPoster.setAttribute('value', film.id);
    filmPoster.insertAdjacentHTML(
      'afterbegin',
      `<img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${film.poster_path}" alt="${film.title}" loading="lazy"/>`,
    );
    const filmPosterDescription = document.createElement('div');
    filmPosterDescription.classList.add('film-poster__description');
    const filmPosterBtn = document.createElement('button');
    filmPosterBtn.classList.add('film-poster__button');
    filmPosterBtn.setAttribute('type', 'button');
    filmPosterBtn.setAttribute('value', `${film.id}`);
    filmPosterBtn.innerHTML = '▶';
    filmPosterBtn.addEventListener('click', e => {
      getTrailerKey(e.target.value).then(key => {
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
    mainContainer.insertAdjacentHTML('beforeend', filmBox);
  });
  mainContainer.append(...posterArray);
  //pushPagination();
}

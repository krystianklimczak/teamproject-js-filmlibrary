import axios from 'axios';
import { drawFilmBox } from './main';
import { fetchApi } from './filmApi';
import { pushPagination } from './pagination';
import { checkBrowersWidth } from './pagination';
import Notiflix from 'notiflix';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const svgBtn = document.querySelector('.search-form__svg');

export function listeners() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie`;
    const searchParams = {
      api_key: '95f474a01cc4252905d63c7d958d5749',
      language: 'en-US',
      page: 1,
      query: `${input.value}`,
    };
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    searchByQ(url, searchParams, input.value);
  });
  svgBtn.addEventListener('click', e => {
    const url = `https://api.themoviedb.org/3/search/movie`;
    const searchParams = {
      api_key: '95f474a01cc4252905d63c7d958d5749',
      language: 'en-US',
      page: 1,
      query: `${input.value}`,
    };
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    searchByQ(url, searchParams, input.value);
  });
}

const errorPoster = document.querySelector('.error-404');
const posterContainer = document.querySelector('.main-section');
async function searchByQ(url, params, input) {
  try {
    const response = await fetchApi(url, params);
    const data = await response.data;
    const results = await data.results;
    if (data.total_results === 0) {
      Notiflix.Notify.failure(`Sorry, no matches found for your search query`);
      // THERE WILL BE LOGIC OF EMPTY SITE
      errorPoster.classList.remove('is-hidden');
      posterContainer.classList.add('is-hidden');
      return;
      // drawFilmBox(results), pushPagination(url, params, data), checkBrowersWidth(url, params)
    }
    Notiflix.Notify.success(`Hurraa we found ${data.total_results} movies for "${input}"`);
    errorPoster.classList.add('is-hidden');
    posterContainer.classList.remove('is-hidden');

    return drawFilmBox(results), pushPagination(url, params, data), checkBrowersWidth(url, params);
  } catch (error) {
    console.log(error);
  }
}

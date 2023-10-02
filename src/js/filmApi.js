import axios from 'axios';
import Notiflix from 'notiflix';

const spinnerBox = document.querySelector('.spinner-box');
// KEY FOR OUR API REQUESTS
const API_KEY = '95f474a01cc4252905d63c7d958d5749';

//FETCHING ALL GENRES LIST
export const fetchGenres = async () => {
  // spinnerBox.classList.remove('spinner-box--hidden');
  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: API_KEY,
      },
    });
    const genres = await response.data.genres;
    // spinnerBox.classList.add('spinner-box--hidden');
    return genres;
  } catch (error) {
    return Notiflix.Notify.failure(`${error.message}`);
  }
};

// FETCHING TRAILER FN
export const fetchTrailer = async key => {
  // spinnerBox.classList.remove('spinner-box--hidden');
  try {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${key}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
    // spinnerBox.classList.add('spinner-box--hidden');
    return response;
  } catch (error) {
    return Notiflix.Notify.failure(`${error.message}`);
  }
};

//FETCHING FUNCTION
export async function fetchApi(url, searchParameters) {
  spinnerBox.classList.remove('spinner-box--hidden');
  const searchParams = new URLSearchParams(searchParameters);
  try {
    const response = await axios.get(`${url}?${searchParams}`);
    spinnerBox.classList.add('spinner-box--hidden');
    return response;
  } catch (error) {
    spinnerBox.classList.add('spinner-box--hidden');
    return Notiflix.Notify.failure(`${error.message}`);
  }
}

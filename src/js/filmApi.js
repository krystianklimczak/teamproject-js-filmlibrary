import axios from 'axios';

// KEY FOR OUR API REQUESTS
const API_KEY = '95f474a01cc4252905d63c7d958d5749';

//FETCHING ALL GENRES LIST
export const fetchGenres = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: API_KEY,
      },
    });
    const genres = await response.data.genres;
    return genres;
  } catch (error) {
    console.error(error.message);
  }
};

// FETCHIN TRAILER FN
export const fetchTrailer = async key => {
  try {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${key}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//FETCHING FUNCTION
export async function fetchApi(url, searchParameters) {
  const searchParams = new URLSearchParams(searchParameters);
  try {
    const response = await axios.get(`${url}?${searchParams}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

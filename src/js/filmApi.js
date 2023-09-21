import axios from 'axios';

// FIRST METHOD
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
axios.defaults.params = {
  api_key: '95f474a01cc4252905d63c7d958d5749',
};

export const responseAxios = axios
  .get()
  .then(responseA => console.log(responseA.data.results))
  .catch(error => console.log(error));

// SECOND METHOD
export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 95f474a01cc4252905d63c7d958d5749',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

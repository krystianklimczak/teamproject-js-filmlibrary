import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';
axios.defaults.params = {
  api_key: '95f474a01cc4252905d63c7d958d5749',
};

export const responseAxios = axios
  .get()
  .then(responseA => console.log(responseA.data.results))
  .catch(error => console.log(error));

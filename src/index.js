import './sass/main.scss';
<<<<<<< Updated upstream
import { responseAxios } from './js/filmApi';
=======
import { axiosFirstFetchFn, axiosSecondFetchFn } from './js/filmApi';
import { makeFilmsBox, fetchGenres } from './js/main';
axiosFirstFetchFn();
axiosSecondFetchFn();

console.log(123);
>>>>>>> Stashed changes

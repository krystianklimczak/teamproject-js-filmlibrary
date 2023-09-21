import './sass/main.scss';
import { axiosFirstFetchFn, axiosSecondFetchFn } from './js/filmApi';
import { makeFilmsBox, fetchGenres } from './js/main';
axiosFirstFetchFn();
axiosSecondFetchFn();

console.log(123);

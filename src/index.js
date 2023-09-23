import './sass/main.scss';
import { axiosFirstFetchFn, axiosSecondFetchFn } from './js/filmApi';
import { makeFilmsBox } from './js/main';
axiosFirstFetchFn();
axiosSecondFetchFn();
makeFilmsBox();

console.log(123);

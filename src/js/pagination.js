import { mainContainer, drawFilmBox } from './main';
import axios from 'axios';

let currentPage = document.querySelector('.current-page');

const twoPagesBack = document.querySelector('.two-pages--back');
const pageBack = document.querySelector('.page--back');
const pageNext = document.querySelector('.page--next');
const twoPagesNext = document.querySelector('.two-pages--next');
const dotsRight = document.querySelector('.dots--right');
const dotsLeft = document.querySelector('.dots--left');
const pageLast = document.querySelector('.page--last');

let chosenPage = 1;
pageNext.innerHTML = chosenPage + 1;
currentPage.innerHTML = chosenPage;

pageNext.addEventListener('click', () => {
  chosenPage++;
  // console.log(chosenPage);
  currentPage = chosenPage;
  makeFilmsBoxByPage(chosenPage);
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';
axios.defaults.params = {
  api_key: '95f474a01cc4252905d63c7d958d5749',
  language: 'en-US',
};

const axiosFirstFetchFn = async (page = '1') => {
  const searchParams = new URLSearchParams({
    page,
  });
  try {
    const response = await axios.get(`?${searchParams}`);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function makeFilmsBoxByPage(currentPage) {
  const data = await axiosFirstFetchFn(currentPage)
    .then(data => {
      drawFilmBox(data.results);
    })
    .catch(error => console.log(error.message));
}

export function pagination() {
  console.log(axiosFirstFetchFn());
  console.log('hello i am pagination');
  console.log(currentPage);
  console.log(mainContainer);
}

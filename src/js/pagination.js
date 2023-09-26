import { drawFilmBox } from './main';
import axios from 'axios';
import { mainContainer } from './main';

// FETCHING DATA FROM API FN
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
    return data;
  } catch (error) {
    console.log(error);
  }
};

// PAGINATION STRING
const pagination = `<div class="container pagination-section">
  <button class="arrow--left">
    ⬅
  </button>
  <button class="page--first">1</button>
  <button class="dots--left">...</button>
  <button class="two-pages--back"></button>
  <button class="page--back"></button>
  <button class="current-page">1</button>
  <button class="page--next"></button>
  <button class="two-pages--next"></button>
  <button class="page--second">2</button>
  <button class="page--third">3</button>
  <button class="page--fourth">4</button>
  <button class="page--fifth">5</button>
  <button class="page--sixth">6</button>
  <button class="page--seventh">7</button>
  <button class="dots--right">...</button>
  <button class="page--last"></button>
  <button class="arrow--right">
    ➡
  </button>
</div>`;

// ACTUAL PAGE NUMBER
let currentPage = 1;

// UPDATE PAGES HANDLER
async function updatePages() {
  const array = await axiosFirstFetchFn(currentPage);
  drawFilmBox(array.results);
}

// MAIN PAGINATION FN
export function pushPagination() {
  // DRAW PAGINATION ON MAIN SECTION
  mainContainer.insertAdjacentHTML('beforeend', pagination);

  // QUERY SELECTORS
  const currentPageBtn = document.querySelector('.current-page');
  const arrowLeft = document.querySelector('.arrow--left');
  const dotsLeft = document.querySelector('.dots--left');
  const twoPagesBack = document.querySelector('.two-pages--back');
  const pageBack = document.querySelector('.page--back');
  const pageNext = document.querySelector('.page--next');
  const twoPagesNext = document.querySelector('.two-pages--next');
  const dotsRight = document.querySelector('.dots--right');
  const pageLast = document.querySelector('.page--last');
  const arrowRight = document.querySelector('.arrow--right');
  const pageFirst = document.querySelector('.page--first');
  const pageSecond = document.querySelector('.page--second');
  const pageThird = document.querySelector('.page--third');
  const pageFourth = document.querySelector('.page--fourth');
  const pageFifth = document.querySelector('.page--fifth');
  const pageSixth = document.querySelector('.page--sixth');
  const pageSeventh = document.querySelector('.page--seventh');

  // LAST PAGE
  pageLast.innerHTML = 500;
  pageLast.addEventListener('click', () => {
    currentPage = 500;
    updatePages();
  });

  // CONDITIONS

  switch (currentPage) {
    case 1:
      pageFirst.classList.add('hidden');
      dotsLeft.classList.add('hidden');
      twoPagesBack.classList.add('hidden');
      pageBack.classList.add('hidden');
      pageNext.classList.add('hidden');
      twoPagesNext.classList.add('hidden');
      arrowLeft.classList.add('hidden');
      break;
    case 2:
      currentPageBtn.innerHTML = `${currentPage}`;
      dotsLeft.classList.add('hidden');
      twoPagesBack.classList.add('hidden');
      pageBack.classList.add('hidden');
      pageNext.classList.add('hidden');
      twoPagesNext.classList.add('hidden');
      pageSecond.classList.add('hidden');
      break;
    case 3:
      currentPageBtn.innerHTML = `${currentPage}`;
      dotsLeft.classList.add('hidden');
      twoPagesBack.classList.add('hidden');
      pageBack.innerHTML = currentPage - 1;
      pageNext.classList.add('hidden');
      twoPagesNext.classList.add('hidden');
      pageSecond.classList.add('hidden');
      pageThird.classList.add('hidden');
      break;
    case 4:
      currentPageBtn.innerHTML = `${currentPage}`;
      dotsLeft.classList.add('hidden');
      twoPagesBack.innerHTML = currentPage - 2;
      pageBack.innerHTML = currentPage - 1;
      pageNext.classList.add('hidden');
      twoPagesNext.classList.add('hidden');
      pageSecond.classList.add('hidden');
      pageThird.classList.add('hidden');
      pageFourth.classList.add('hidden');
      break;
    default:
      currentPageBtn.innerHTML = `${currentPage}`;
      twoPagesBack.innerHTML = currentPage - 2;
      pageBack.innerHTML = currentPage - 1;
      pageNext.innerHTML = currentPage + 1;
      twoPagesNext.innerHTML = currentPage + 2;
      pageSecond.classList.add('hidden');
      pageThird.classList.add('hidden');
      pageFourth.classList.add('hidden');
      pageFifth.classList.add('hidden');
      pageSixth.classList.add('hidden');
      pageSeventh.classList.add('hidden');
  }
  switch (currentPage) {
    case 500:
      pageNext.classList.add('hidden');
      twoPagesNext.classList.add('hidden');
      pageLast.classList.add('hidden');
      dotsRight.classList.add('hidden');
      arrowRight.classList.add('hidden');
      break;
    case 499:
      twoPagesNext.classList.add('hidden');
      pageLast.classList.add('hidden');
      dotsRight.classList.add('hidden');
      break;
    case 498:
      pageLast.classList.add('hidden');
      dotsRight.classList.add('hidden');
      break;
    case 497:
      dotsRight.classList.add('hidden');
  }

  // BUTTONS LISTENERS
  pageFirst.addEventListener('click', () => {
    currentPage = 1;
    updatePages();
  });
  pageSecond.addEventListener('click', () => {
    currentPage = 2;
    updatePages();
  });
  pageThird.addEventListener('click', () => {
    currentPage = 3;
    updatePages();
  });
  pageFourth.addEventListener('click', () => {
    currentPage = 4;
    updatePages();
  });
  pageFifth.addEventListener('click', () => {
    currentPage = 5;
    updatePages();
  });
  pageSixth.addEventListener('click', () => {
    currentPage = 6;
    updatePages();
  });
  pageSeventh.addEventListener('click', () => {
    currentPage = 7;
    updatePages();
  });
  pageNext.addEventListener('click', () => {
    currentPage++;
    updatePages();
  });
  twoPagesNext.addEventListener('click', () => {
    currentPage += 2;
    updatePages();
  });
  pageBack.addEventListener('click', () => {
    currentPage--;
    updatePages();
  });
  twoPagesBack.addEventListener('click', () => {
    currentPage -= 2;
    updatePages();
  });

  arrowRight.addEventListener('click', () => {
    currentPage++;
    updatePages();
  });

  arrowLeft.addEventListener('click', () => {
    if (currentPage !== 1) {
      currentPage--;
      updatePages();
    }
  });
}

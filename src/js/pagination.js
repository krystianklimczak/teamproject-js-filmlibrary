import { drawFilmBox } from './main';
import axios from 'axios';
import { mainContainer } from './main';
import { fetchApi } from './filmApi';

// ACTUAL PAGE NUMBER
// let currentPage = 1;

// FETCHING DATA FROM API FN
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';
// axios.defaults.params = {
//   api_key: '95f474a01cc4252905d63c7d958d5749',
//   language: 'en-US',
// };

// const axiosFirstFetchFn = async (page = '1') => {
//   const searchParams = new URLSearchParams({
//     page,
//   });
//   try {
//     const response = await axios.get(`?${searchParams}`);
//     const data = await response.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const url = `https://api.themoviedb.org/3/movie/popular`;
// const searchParams = {
//   api_key: '95f474a01cc4252905d63c7d958d5749',
//   language: 'en-US',
//   page: currentPage,
// };

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

async function updatePages(url, searchPara) {
  try {
    const data = await fetchApi(url, searchPara);
    const results = await data.results;
    drawFilmBox(results);
    pushPagination(url, searchPara);
  } catch (error) {
    console.log(error);
  }
}

// MAIN PAGINATION FN
export function pushPagination(url, searchParams) {
  // DRAW PAGINATION ON MAIN SECTION
  mainContainer.insertAdjacentHTML('beforeend', pagination);
  console.log(`narysowałem paginację`);
  const paginationURL = url;
  let paginationSearchParams = searchParams;
  let currentPage = paginationSearchParams.page;
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
  async function checkLastPage() {
    try {
      const response = await fetchApi(paginationURL, paginationSearchParams);
      const totalPages = await response.total_pages;
      let lastPage;
      lastPage = totalPages;
      if (totalPages >= 500) {
        lastPage = 500;
      }
      pageLast.innerHTML = lastPage;
      pageLast.addEventListener('click', () => {
        paginationSearchParams.page = lastPage;
        console.log(paginationSearchParams);
        updatePages(paginationURL, paginationSearchParams);
      });
      if (currentPage === lastPage) {
        console.log('aaaaaaaaaaaaaaaaa');
        pageNext.classList.add('hidden');
        twoPagesNext.classList.add('hidden');
        pageLast.classList.add('hidden');
        dotsRight.classList.add('hidden');
        arrowRight.classList.add('hidden');
      }
      if (currentPage === lastPage - 1) {
        twoPagesNext.classList.add('hidden');
        pageLast.classList.add('hidden');
        dotsRight.classList.add('hidden');
      }
      if (currentPage === lastPage - 2) {
        pageLast.classList.add('hidden');
        dotsRight.classList.add('hidden');
      }
      if (currentPage === lastPage - 3) {
        dotsRight.classList.add('hidden');
      }
      if (currentPage === 1) {
        console.log(true);
        pageFirst.classList.add('hidden');
        dotsLeft.classList.add('hidden');
        twoPagesBack.classList.add('hidden');
        pageBack.classList.add('hidden');
        pageNext.classList.add('hidden');
        twoPagesNext.classList.add('hidden');
        arrowLeft.classList.add('hidden');
      }
      if (currentPage === 2) {
        currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
        dotsLeft.classList.add('hidden');
        twoPagesBack.classList.add('hidden');
        pageBack.classList.add('hidden');
        pageNext.classList.add('hidden');
        twoPagesNext.classList.add('hidden');
        pageSecond.classList.add('hidden');
      }
      if (currentPage === 3) {
        currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
        dotsLeft.classList.add('hidden');
        twoPagesBack.classList.add('hidden');
        pageBack.innerHTML = paginationSearchParams.page - 1;
        pageNext.classList.add('hidden');
        twoPagesNext.classList.add('hidden');
        pageSecond.classList.add('hidden');
        pageThird.classList.add('hidden');
      }
      if (currentPage === 4) {
        currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
        dotsLeft.classList.add('hidden');
        twoPagesBack.innerHTML = paginationSearchParams.page - 2;
        pageBack.innerHTML = paginationSearchParams.page - 1;
        pageNext.classList.add('hidden');
        twoPagesNext.classList.add('hidden');
        pageSecond.classList.add('hidden');
        pageThird.classList.add('hidden');
        pageFourth.classList.add('hidden');
      }
      if (currentPage >= 5) {
        currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
        twoPagesBack.innerHTML = paginationSearchParams.page - 2;
        pageBack.innerHTML = paginationSearchParams.page - 1;
        pageNext.innerHTML = paginationSearchParams.page + 1;
        twoPagesNext.innerHTML = paginationSearchParams.page + 2;
        pageSecond.classList.add('hidden');
        pageThird.classList.add('hidden');
        pageFourth.classList.add('hidden');
        pageFifth.classList.add('hidden');
        pageSixth.classList.add('hidden');
        pageSeventh.classList.add('hidden');
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(`wchodze do funkcji checkLastPage`);
  checkLastPage();
  console.log(`po funkcji checkLastPage`);
  // CONDITIONS

  // switch (paginationSearchParams.page) {
  //   case 1:
  //     pageFirst.classList.add('hidden');
  //     dotsLeft.classList.add('hidden');
  //     twoPagesBack.classList.add('hidden');
  //     pageBack.classList.add('hidden');
  //     pageNext.classList.add('hidden');
  //     twoPagesNext.classList.add('hidden');
  //     arrowLeft.classList.add('hidden');
  //     break;
  //   case 2:
  // currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
  // dotsLeft.classList.add('hidden');
  // twoPagesBack.classList.add('hidden');
  // pageBack.classList.add('hidden');
  // pageNext.classList.add('hidden');
  // twoPagesNext.classList.add('hidden');
  // pageSecond.classList.add('hidden');
  //     break;
  //   case 3:
  // currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
  // dotsLeft.classList.add('hidden');
  // twoPagesBack.classList.add('hidden');
  // pageBack.innerHTML = paginationSearchParams.page - 1;
  // pageNext.classList.add('hidden');
  // twoPagesNext.classList.add('hidden');
  // pageSecond.classList.add('hidden');
  // pageThird.classList.add('hidden');
  //     break;
  //   case 4:
  // currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
  // dotsLeft.classList.add('hidden');
  // twoPagesBack.innerHTML = paginationSearchParams.page - 2;
  // pageBack.innerHTML = paginationSearchParams.page - 1;
  // pageNext.classList.add('hidden');
  // twoPagesNext.classList.add('hidden');
  // pageSecond.classList.add('hidden');
  // pageThird.classList.add('hidden');
  // pageFourth.classList.add('hidden');
  //     break;
  //   case 500:
  //     pageNext.classList.add('hidden');
  //     twoPagesNext.classList.add('hidden');
  //     pageLast.classList.add('hidden');
  //     dotsRight.classList.add('hidden');
  //     arrowRight.classList.add('hidden');
  //   case 499:
  //     twoPagesNext.classList.add('hidden');
  //     pageLast.classList.add('hidden');
  //     dotsRight.classList.add('hidden');
  //   case 498:
  // pageLast.classList.add('hidden');
  // dotsRight.classList.add('hidden');
  //   case 497:
  //     dotsRight.classList.add('hidden');
  //   default:
  //     currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
  //     twoPagesBack.innerHTML = paginationSearchParams.page - 2;
  //     pageBack.innerHTML = paginationSearchParams.page - 1;
  //     pageNext.innerHTML = paginationSearchParams.page + 1;
  //     twoPagesNext.innerHTML = paginationSearchParams.page + 2;
  //     pageSecond.classList.add('hidden');
  //     pageThird.classList.add('hidden');
  //     pageFourth.classList.add('hidden');
  //     pageFifth.classList.add('hidden');
  //     pageSixth.classList.add('hidden');
  //     pageSeventh.classList.add('hidden');
  // }
  // BUTTONS LISTENERS
  pageFirst.addEventListener('click', () => {
    // searchParams.page = 1;
    paginationSearchParams.page = 1;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageSecond.addEventListener('click', () => {
    // searchParams.page = 2;
    paginationSearchParams.page = 2;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageThird.addEventListener('click', () => {
    // searchParams.page = 3;
    paginationSearchParams.page = 3;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageFourth.addEventListener('click', () => {
    paginationSearchParams.page = 4;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageFifth.addEventListener('click', () => {
    paginationSearchParams.page = 5;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageSixth.addEventListener('click', () => {
    paginationSearchParams.page = 6;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageSeventh.addEventListener('click', () => {
    paginationSearchParams.page = 7;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageNext.addEventListener('click', () => {
    paginationSearchParams.page++;
    updatePages(paginationURL, paginationSearchParams);
  });
  twoPagesNext.addEventListener('click', () => {
    paginationSearchParams.page += 2;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageBack.addEventListener('click', () => {
    paginationSearchParams.page--;
    updatePages(paginationURL, paginationSearchParams);
  });
  twoPagesBack.addEventListener('click', () => {
    paginationSearchParams.page -= 2;
    updatePages(paginationURL, paginationSearchParams);
  });
  arrowRight.addEventListener('click', () => {
    paginationSearchParams.page++;
    updatePages(paginationURL, paginationSearchParams);
  });
  arrowLeft.addEventListener('click', () => {
    if (paginationSearchParams.page !== 1) {
      paginationSearchParams.page--;
      updatePages(paginationURL, paginationSearchParams);
    }
  });
  console.log('koniec paginacji');
}

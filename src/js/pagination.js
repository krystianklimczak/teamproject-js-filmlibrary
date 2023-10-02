import { drawFilmBox } from './main';
import { mainContainer } from './main';
import { fetchApi } from './filmApi';
import { checkAndChangeTheme } from './dark-mode';

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

// UPDATING PAGES FN
async function updatePages(url, searchPara) {
  try {
    const response = await fetchApi(url, searchPara);
    const data = await response.data;
    const results = await data.results;
    drawFilmBox(results);
    pushPagination(url, searchPara, data);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  }
}

// MAIN PAGINATION FN
export function pushPagination(url, searchParams, data) {
  // DRAW PAGINATION ON MAIN SECTION
  mainContainer.insertAdjacentHTML('beforeend', pagination);
  const paginationURL = url;
  let paginationSearchParams = searchParams;
  let currentPage = data.page;

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

  // ASYNC FN TO CHECING PAGE
  async function checkPage() {
    try {
      // const response = await fetchApi(paginationURL, paginationSearchParams);
      // const data = await response.data;
      const totalPages = await data.total_pages;
      const totalResults = await data.total_results;

      let lastPage;
      lastPage = totalPages;
      if (totalPages >= 500) {
        lastPage = 500;
      }
      pageLast.innerHTML = lastPage;
      pageLast.addEventListener('click', () => {
        paginationSearchParams.page = lastPage;
        updatePages(paginationURL, paginationSearchParams);
      });

      // CONDITIONS
      switch (currentPage) {
        case lastPage:
          pageNext.classList.add('hidden');
          twoPagesNext.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          arrowRight.classList.add('hidden');
          break;
        case lastPage - 1:
          twoPagesNext.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case lastPage - 2:
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case lastPage - 3:
          dotsRight.classList.add('hidden');
          break;
      }
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
          currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
          dotsLeft.classList.add('hidden');
          twoPagesBack.classList.add('hidden');
          pageBack.classList.add('hidden');
          pageNext.classList.add('hidden');
          twoPagesNext.classList.add('hidden');
          pageSecond.classList.add('hidden');
          break;
        case 3:
          currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
          dotsLeft.classList.add('hidden');
          twoPagesBack.classList.add('hidden');
          pageBack.innerHTML = paginationSearchParams.page - 1;
          pageNext.classList.add('hidden');
          twoPagesNext.classList.add('hidden');
          pageSecond.classList.add('hidden');
          pageThird.classList.add('hidden');
          break;
        case 4:
          currentPageBtn.innerHTML = `${paginationSearchParams.page}`;
          dotsLeft.classList.add('hidden');
          twoPagesBack.innerHTML = paginationSearchParams.page - 2;
          pageBack.innerHTML = paginationSearchParams.page - 1;
          pageNext.classList.add('hidden');
          twoPagesNext.classList.add('hidden');
          pageSecond.classList.add('hidden');
          pageThird.classList.add('hidden');
          pageFourth.classList.add('hidden');
          break;
        default:
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
      switch (lastPage) {
        case 7:
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case 6:
          pageSeventh.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case 5:
          pageSixth.classList.add('hidden');
          pageSeventh.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case 4:
          pageFifth.classList.add('hidden');
          pageSixth.classList.add('hidden');
          pageSeventh.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case 3:
          pageFourth.classList.add('hidden');
          pageFifth.classList.add('hidden');
          pageSixth.classList.add('hidden');
          pageSeventh.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case 2:
          pageThird.classList.add('hidden');
          pageFourth.classList.add('hidden');
          pageFifth.classList.add('hidden');
          pageSixth.classList.add('hidden');
          pageSeventh.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
        case 1:
          pageSecond.classList.add('hidden');
          pageThird.classList.add('hidden');
          pageFourth.classList.add('hidden');
          pageFifth.classList.add('hidden');
          pageSixth.classList.add('hidden');
          pageSeventh.classList.add('hidden');
          pageLast.classList.add('hidden');
          dotsRight.classList.add('hidden');
          break;
      }

      if (totalResults === 0) {
        currentPageBtn.classList.add('hidden');
      }
    } catch (error) {
      console.log(error);
    }
    checkAndChangeTheme();
  }

  // RUN CHECKING...
  checkPage();

  // BUTTONS LISTENERS
  pageFirst.addEventListener('click', () => {
    paginationSearchParams.page = 1;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageSecond.addEventListener('click', () => {
    paginationSearchParams.page = 2;
    updatePages(paginationURL, paginationSearchParams);
  });
  pageThird.addEventListener('click', () => {
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
}

export function checkBrowersWidth(url, searchParams) {
  function isBottomOfTheSite() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      searchParams.page++;
      handler(url, searchParams);

      const form = document.querySelector('.search-form');
      const svgBtn = document.querySelector('.search-form__svg');

      form.addEventListener('submit', e => {
        e.preventDefault();
        document.removeEventListener('scroll', isBottomOfTheSite);
      });
      svgBtn.addEventListener('click', () => {
        document.removeEventListener('scroll', isBottomOfTheSite);
      });
    }
  }
  if (window.innerWidth < 768) {
    document.addEventListener('scroll', isBottomOfTheSite);
  }
}

async function handler(url, searchParams) {
  try {
    const response = await fetchApi(url, searchParams);
    const data = response.data;
    const results = await data.results;
    if (searchParams.page > data.total_pages || searchParams.page > 500) {
      return;
    }

    return drawFilmBox(results, false);
  } catch (error) {
    return console.log(error);
  }
}

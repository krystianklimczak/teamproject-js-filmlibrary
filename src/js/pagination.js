import { drawFilmBox } from './main';
import axios from 'axios';
import { mainContainer } from './main';

//Taking data from API by page number

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
let currentPage = 1;

async function updatePages() {
  const array = await axiosFirstFetchFn(currentPage);
  drawFilmBox(array.results);
}
export function pushPagination() {
  mainContainer.insertAdjacentHTML('beforeend', pagination);

  // LAST PAGE IS 500
  // async function updateLastPageNumber() {
  //   const lastPageResponse = await axiosFirstFetchFn(1);
  //   const lastPage = await lastPageResponse.total_pages;
  //   pageLast.innerHTML = 500;
  //   pageLast.addEventListener('click', () => {
  //     currentPage = 500;
  //     updatePages();
  //   });
  // }
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

  pageLast.innerHTML = 500;
  pageLast.addEventListener('click', () => {
    currentPage = 500;
    updatePages();
  });

  if (currentPage === 1) {
    pageFirst.classList.add('hidden');
    dotsLeft.classList.add('hidden');
    twoPagesBack.classList.add('hidden');
    pageBack.classList.add('hidden');
    pageNext.classList.add('hidden');
    twoPagesNext.classList.add('hidden');
    arrowLeft.classList.add('hidden');
  }

  if (currentPage === 2) {
    currentPageBtn.innerHTML = `${currentPage}`;
    dotsLeft.classList.add('hidden');
    twoPagesBack.classList.add('hidden');
    pageBack.classList.add('hidden');
    pageNext.classList.add('hidden');
    twoPagesNext.classList.add('hidden');
    pageSecond.classList.add('hidden');
  }

  if (currentPage === 3) {
    currentPageBtn.innerHTML = `${currentPage}`;
    dotsLeft.classList.add('hidden');
    twoPagesBack.classList.add('hidden');
    pageBack.innerHTML = currentPage - 1;
    pageNext.classList.add('hidden');
    twoPagesNext.classList.add('hidden');
    pageSecond.classList.add('hidden');
    pageThird.classList.add('hidden');
  }

  if (currentPage === 4) {
    currentPageBtn.innerHTML = `${currentPage}`;
    dotsLeft.classList.add('hidden');
    twoPagesBack.innerHTML = currentPage - 2;
    pageBack.innerHTML = currentPage - 1;
    pageNext.classList.add('hidden');
    twoPagesNext.classList.add('hidden');
    pageSecond.classList.add('hidden');
    pageThird.classList.add('hidden');
    pageFourth.classList.add('hidden');
  }

  if (currentPage >= 5) {
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

  if (currentPage === 500) {
    pageNext.classList.add('hidden');
    twoPagesNext.classList.add('hidden');
    pageLast.classList.add('hidden');
    dotsRight.classList.add('hidden');
    arrowRight.classList.add('hidden');
  }

  if (currentPage === 499) {
    twoPagesNext.classList.add('hidden');
    pageLast.classList.add('hidden');
    dotsRight.classList.add('hidden');
  }
  if (currentPage === 498) {
    pageLast.classList.add('hidden');
    dotsRight.classList.add('hidden');
  }
  if (currentPage === 497) {
    dotsRight.classList.add('hidden');
  }
}

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

// export async function makeFilmsBoxByPage(currentPage) {
//   const data = await axiosFirstFetchFn(currentPage)
//     .then(data => {
//       drawFilmBox(data.results);
//       console.log(data);
//       pageLast.innerHTML = data.total_pages;
//     })
//     .catch(error => console.log(error.message));
// }

// let chosenPage = 1;
// let currentPage = document.querySelector('.current-page');

// //pageSecond.classList.add('hidden');

// //Drawing first page

// if (chosenPage === 1) {
//   makeFilmsBoxByPage(chosenPage);
//   updatePagesNumber();
// }

// //Adding event listeners for pages width static numbers

// pageFirst.addEventListener('click', () => {
//   openByStaticPageNr(1);
// });

// pageSecond.addEventListener('click', () => {
//   openByStaticPageNr(2);
// });

// pageFourth.addEventListener('click', () => {
//   openByStaticPageNr(4);
// });

// pageFifth.addEventListener('click', () => {
//   openByStaticPageNr(5);
// });

// pageSixth.addEventListener('click', () => {
//   openByStaticPageNr(6);
// });

// pageSeventh.addEventListener('click', () => {
//   openByStaticPageNr(7);
// });

// //Jumping 1 page back and forth

// pageBack.addEventListener('click', callPrevPage);
// pageNext.addEventListener('click', callNextPage);
// arrowRight.addEventListener('click', callNextPage);
// arrowLeft.addEventListener('click', callPrevPage);

// //Jumping 2 pages back and forth

// twoPagesNext.addEventListener('click', () => {
//   chosenPage += 2;
//   currentPage = chosenPage;
//   updatePagesNumber();
//   makeFilmsBoxByPage(chosenPage);
// });

// twoPagesBack.addEventListener('click', () => {
//   chosenPage -= 2;
//   currentPage = chosenPage;
//   updatePagesNumber();
//   makeFilmsBoxByPage(chosenPage);
// });

// //Jumping 3 pages back and forth

// dotsLeft.addEventListener('click', () => {
//   chosenPage -= 3;
//   currentPage = chosenPage;
//   updatePagesNumber();
//   makeFilmsBoxByPage(chosenPage);
// });
// dotsRight.addEventListener('click', () => {
//   chosenPage += 3;
//   currentPage = chosenPage;
//   updatePagesNumber();
//   makeFilmsBoxByPage(chosenPage);
// });

// //Reusable functions

// function openByStaticPageNr(number) {
//   chosenPage = number;
//   currentPage = chosenPage;
//   makeFilmsBoxByPage(chosenPage);
//   updatePagesNumber();
// }
// function updatePagesNumber() {
//   dotsLeft.classList.add('hidden');
//   pageFirst.classList.add('hidden');
//   currentPageBtn.innerHTML = chosenPage;
//   pageNext.innerHTML = chosenPage + 1;
//   twoPagesNext.innerHTML = chosenPage + 2;
//   pageBack.innerHTML = chosenPage - 1;
//   twoPagesBack.innerHTML = chosenPage - 2;
//   checkAndHidePageNr();
// }
// function callNextPage() {
//   chosenPage += 1;
//   currentPage = chosenPage;
//   updatePagesNumber();
//   makeFilmsBoxByPage(chosenPage);
// }
// function callPrevPage() {
//   chosenPage -= 1;
//   currentPage = chosenPage;
//   updatePagesNumber();
//   makeFilmsBoxByPage(chosenPage);
// }
// function checkAndHidePageNr() {
//   if (chosenPage === 1) {
//     pageSeventh.classList.remove('hidden');
//     pageSixth.classList.remove('hidden');
//     arrowLeft.classList.add('button--disabled');
//     pageSecond.classList.add('hidden');
//     twoPagesNext.classList.remove('hidden');
//     pageFifth.classList.remove('hidden');
//     pageFourth.classList.remove('hidden');
//     arrowLeft.disabled = true;
//     pageBack.classList.add('hidden');
//     twoPagesBack.classList.add('hidden');
//   } else {
//     arrowLeft.disabled = false;
//     pageBack.classList.remove('hidden');
//   }
//   if (chosenPage === 2) {
//     pageSixth.classList.remove('hidden');
//     pageFifth.classList.remove('hidden');
//     pageFourth.classList.remove('hidden');
//     twoPagesNext.classList.add('hidden');
//     twoPagesBack.classList.add('hidden');
//   }
//   if (chosenPage === 3) {
//     twoPagesNext.classList.remove('hidden');
//     pageFifth.classList.add('hidden');
//     pageFourth.classList.add('hidden');
//     twoPagesBack.classList.remove('hidden');
//     pageSixth.classList.remove('hidden');
//   }
//   if (chosenPage === 4) {
//     pageSixth.classList.add('hidden');
//     twoPagesNext.classList.remove('hidden');
//     pageSeventh.classList.remove('hidden');
//     pageSecond.classList.add('hidden');
//     pageFifth.classList.add('hidden');
//   }
//   if (chosenPage >= 4) {
//     pageFourth.classList.add('hidden');
//     twoPagesBack.classList.remove('hidden');
//     pageFirst.classList.remove('hidden');
//   }
//   if (chosenPage === 5) {
//     pageFifth.classList.add('hidden');
//     pageSeventh.classList.remove('hidden');
//     twoPagesNext.classList.add('hidden');
//     pageSecond.classList.remove('hidden');
//     pageSixth.classList.add('hidden');
//   } else {
//     pageSecond.classList.add('hidden');
//   }
//   if (chosenPage >= 6) {
//     dotsLeft.classList.remove('hidden');
//     pageFirst.classList.remove('hidden');
//     twoPagesNext.classList.remove('hidden');
//     pageSeventh.classList.add('hidden');
//     twoPagesBack.classList.remove('hidden');
//     pageSixth.classList.add('hidden');
//     pageFifth.classList.add('hidden');
//   }
// }

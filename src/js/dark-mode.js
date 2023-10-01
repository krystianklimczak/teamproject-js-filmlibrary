const IconMoon = document.querySelector('.icon-moon');
const IconSun = document.querySelector('.icon-sun');
const body = document.querySelector('body');
const footerText = document.querySelector('.footer__item');
const footerBackground = document.querySelector('.footer');
const footerBtn = document.querySelector('.footer__button');

function saveThemeToLocalStorage(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
  }
}

export function checkAndChangeTheme() {
  const filmPosterTitles = document.querySelectorAll('.film-poster__title');
  const paginationBtns = document.querySelectorAll('.pagination-section>button');
  const currentPage = document.querySelector('.current-page');

  try {
    const themeFromLocalStorage = localStorage.getItem('theme');
    const parsedThemeFromLocalStorage = JSON.parse(themeFromLocalStorage);
    if (parsedThemeFromLocalStorage === 'dark') {
      toggleToDark();
    }
    if (parsedThemeFromLocalStorage === null) {
      toggleToLight();
    }
  } catch (error) {
    console.log(error);
  }
  IconMoon.addEventListener('click', toggleToDark);
  IconSun.addEventListener('click', toggleToLight);

  function toggleToDark() {
    IconMoon.classList.add('icon-moon--hidden');
    IconSun.classList.remove('icon-sun--hidden');
    saveThemeToLocalStorage('theme', 'dark');

    body.classList.add('body--dark');
    filmPosterTitles.forEach(element => element.classList.add('film-poster__title--dark-mode'));
    paginationBtns.forEach(element => {
      element.classList.add('pagination-button--dark-mode');
    });
    footerText.classList.add('footer__item--dark-mode');
    footerBackground.classList.add('footer--dark-mode');
    footerBtn.classList.add('footer__button--dark-mode');
    if (currentPage !== null) {
      currentPage.classList.remove('pagination-button--dark-mode');
      currentPage.classList.add('current-page--dark-mode');
    }
  }

  function toggleToLight() {
    IconMoon.classList.remove('icon-moon--hidden');
    IconSun.classList.add('icon-sun--hidden');
    localStorage.removeItem('theme');

    body.classList.remove('body--dark');
    filmPosterTitles.forEach(element => {
      element.classList.remove('film-poster__title--dark-mode');
    });
    paginationBtns.forEach(element => {
      element.classList.remove('pagination-button--dark-mode');
    });
    footerText.classList.remove('footer__item--dark-mode');
    footerBackground.classList.remove('footer--dark-mode');
    footerBtn.classList.remove('footer__button--dark-mode');
    if (currentPage !== null) {
      currentPage.classList.remove('pagination-button--dark-mode');
      currentPage.classList.remove('current-page--dark-mode');
    }
  }
}

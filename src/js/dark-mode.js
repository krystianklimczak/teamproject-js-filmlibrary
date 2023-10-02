const IconMoon = document.querySelector('.icon-moon');
const IconSun = document.querySelector('.icon-sun');
const body = document.querySelector('body');
const footerText = document.querySelector('.footer__item');
const footerBackground = document.querySelector('.footer');
const footerBtn = document.querySelector('.footer__button');
const error404Background = document.querySelector('.error-404');
const error404Text = document.querySelectorAll('.error-404__headline>span');
const modalFilmCard = document.querySelectorAll('.modal-film');
const modalSquad = document.querySelector('.modal-squad-info');
const modalSquadNames = document.querySelectorAll('.dev-info__name');
const modalSquadNameCMC = document.querySelector('.squad-name__cmc');
const squadNameSVG = document.querySelector('.squad-name>svg');
const squadNameTeam = document.querySelector('.squad-name__team');
const modalSquadCloseIcon = document.querySelector('.close-icon');
const modalTrailerBorder = document.querySelector('.modal-trailer');

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
  const filmPoster = document.querySelectorAll('.film-poster');

  const modalFilmTitle = document.querySelectorAll('.film-info__title');
  const modalFilmStats = document.querySelectorAll('.film-info__stats>span');
  const modalFilmAbout = document.querySelectorAll('.film-info__about');
  const modalFilmDEscr = document.querySelectorAll('.film-info__descr');
  const movieModalBtns = document.querySelectorAll('.movie-button-box>button');
  const movieModalBtnClose = document.querySelector('.modal-film__btn-close-icon');

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
    paginationBtns.forEach(element => element.classList.add('pagination-button--dark-mode'));
    footerText.classList.add('footer__item--dark-mode');
    footerBackground.classList.add('footer--dark-mode');
    footerBtn.classList.add('footer__button--dark-mode');
    error404Background.classList.add('error-404--dark-mode');
    error404Text.forEach(element => element.classList.add('error-404-text--dark-mode'));
    filmPoster.forEach(element => element.classList.add('film-poster--dark-mode'));
    modalFilmCard.forEach(element => element.classList.add('modal-film--dark-mode'));

    modalFilmTitle.forEach(element => element.classList.add('modal-film-text--dark-mode'));
    modalFilmStats.forEach(element => element.classList.add('modal-film-text--dark-mode'));
    modalFilmAbout.forEach(element => element.classList.add('modal-film-text--dark-mode'));
    modalFilmDEscr.forEach(element => element.classList.add('modal-film-text--dark-mode'));
    movieModalBtns.forEach(element => element.classList.add('modal-film-button--dark-mode'));
    movieModalBtnClose.classList.add('modal-film__btn-close-icon--dark-mode');
    modalSquad.classList.add('modal-squad-info--dark-mode');
    modalSquadNames.forEach(element => element.classList.add('dev-info__name--dark-mode'));
    modalSquadNameCMC.classList.add('squad-name__cmc--dark-mode');
    squadNameSVG.classList.add('squad-svg--dark-mode');
    squadNameTeam.classList.add('squad-name__team--dark-mode');
    modalSquadCloseIcon.classList.add('close-icon--dark-mode');
    modalTrailerBorder.classList.add('modal-trailer--dark-mode');

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
    filmPosterTitles.forEach(element => element.classList.remove('film-poster__title--dark-mode'));
    paginationBtns.forEach(element => element.classList.remove('pagination-button--dark-mode'));
    footerText.classList.remove('footer__item--dark-mode');
    footerBackground.classList.remove('footer--dark-mode');
    footerBtn.classList.remove('footer__button--dark-mode');
    error404Background.classList.remove('error-404--dark-mode');
    error404Text.forEach(element => element.classList.remove('error-404-text--dark-mode'));
    filmPoster.forEach(element => element.classList.remove('film-poster--dark-mode'));
    modalFilmCard.forEach(element => element.classList.remove('modal-film--dark-mode'));
    modalFilmTitle.forEach(element => element.classList.remove('modal-film-text--dark-mode'));
    modalFilmStats.forEach(element => element.classList.remove('modal-film-text--dark-mode'));
    modalFilmAbout.forEach(element => element.classList.remove('modal-film-text--dark-mode'));
    modalFilmDEscr.forEach(element => element.classList.remove('modal-film-text--dark-mode'));
    movieModalBtns.forEach(element => element.classList.remove('modal-film-button--dark-mode'));
    movieModalBtnClose.classList.remove('modal-film__btn-close-icon--dark-mode');
    modalSquad.classList.remove('modal-squad-info--dark-mode');
    modalSquadNames.forEach(element => element.classList.remove('dev-info__name--dark-mode'));
    modalSquadNameCMC.classList.remove('squad-name__cmc--dark-mode');
    squadNameSVG.classList.remove('squad-svg--dark-mode');
    squadNameTeam.classList.remove('squad-name__team--dark-mode');
    modalSquadCloseIcon.classList.remove('close-icon--dark-mode');
    modalTrailerBorder.classList.remove('modal-trailer--dark-mode');

    if (currentPage !== null) {
      currentPage.classList.remove('pagination-button--dark-mode');
      currentPage.classList.remove('current-page--dark-mode');
    }
  }
}

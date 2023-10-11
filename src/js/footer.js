const footer = document.querySelector('.footer');
const mediaQuery = window.matchMedia('(max-width: 768px)');

let prevScrollPos = window.scrollY.valueOf();

if (mediaQuery.matches) {
  window.onscroll = () => {
    const currentScrollPos = window.scrollY.valueOf();

    if (prevScrollPos > currentScrollPos) {
      footer.style.bottom = '0';
    } else {
      footer.style.bottom = '-50px';
    }
    prevScrollPos = currentScrollPos;
  };
}

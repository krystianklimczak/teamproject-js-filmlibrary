const footer = document.querySelector('.footer');

let prevScrollPos = window.scrollY.valueOf();

window.onscroll = () => {
  const currentScrollPos = window.scrollY.valueOf();

  if (prevScrollPos > currentScrollPos) {
    footer.style.bottom = '0';
  } else {
    footer.style.bottom = '-50px';
  }
  prevScrollPos = currentScrollPos;
};

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 35);

    // change banner
    function changeImg() {
    header.style.backgroundImage = ""
    }
  })
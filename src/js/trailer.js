import { fetchTrailers } from './filmApi';

const main = document.querySelector('.main-section');
main.addEventListener('click', e => {
  if (e.target.type === 'button') {
    fetchTrailers(e.target.value)
      .then(key => openModalByKey(key))
      .catch(error => console.log(error));
  }
});
const modalBox = document.querySelector('.modal-trailer');

function openModalByKey(key) {
  modalBox.innerHTML = '';
  const text = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}?si=p33dKxNf4oNZFFq6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  modalBox.insertAdjacentHTML('beforeend', text);
  modalBox.classList.remove('is-hidden');
  window.addEventListener('keydown', escape);
}

function escape(e) {
  if ((e.key = 'Escape')) {
    modalBox.classList.add('is-hidden');
    modalBox.innerHTML = '';
  }
}

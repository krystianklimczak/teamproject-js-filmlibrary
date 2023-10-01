(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalSqad: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modalSqad.classList.toggle('is-hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    refs.modalSqad.classList.toggle('is-hidden');
    document.body.style.overflow = 'auto';
  }
})();

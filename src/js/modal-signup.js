(() => {
    const refs = {
      openModalBtn: document.querySelector('[sign-open]'),
      closeModalBtn: document.querySelector('[sign-close]'),
      modal: document.querySelector('[sign-container]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
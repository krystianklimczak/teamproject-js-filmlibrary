import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, refs } from './firebase.js';

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
    document.querySelector('.backdrop-modal-film').classList.toggle('is-hidden');
  }
})();

refs.signUpForm.addEventListener('submit', signUp);

async function signUp(ev) {
  ev.preventDefault();

  const email = document.querySelector('#form-signup_email').value;
  const password = document.querySelector('#form-signup_password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      console.log(error);
    });
}

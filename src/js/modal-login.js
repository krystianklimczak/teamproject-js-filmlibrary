import { auth, refs } from './firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Notiflix from 'notiflix';

(() => {
  const refss = {
    openModalBtn: document.querySelector('[login-open]'),
    closeModalBtn: document.querySelector('[login-close]'),
    modal: document.querySelector('[login-container]'),
  };

  refss.openModalBtn.addEventListener('click', toggleModal);
  refss.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refss.modal.classList.toggle('is-hidden');
    document.querySelector('.backdrop-modal-film').classList.toggle('is-hidden');
  }
})();

refs.logInForm.addEventListener('submit', logIn);
refs.registerBtn.addEventListener('click', redirect);

async function logIn(ev) {
  ev.preventDefault();

  const email = document.querySelector('#form-login__email').value;
  const password = document.querySelector('#form-login__password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      refs.logInBtn.classList.add('is-hidden');
      refs.signUpBtn.classList.add('is-hidden');
      refs.logOutBtn.classList.remove('is-hidden');
      refs.modal.classList.add('is-hidden');
      document.querySelector('.backdrop-modal-film').classList.add('is-hidden');
      Notiflix.Notify.success(`Welcome ${email}`);
    })
    .catch(error => {
      console.log(error);
      return Notiflix.Notify.failure(`Ups! Invalid email or password`);
    });
}

function redirect(ev) {
  ev.preventDefault();

  document.querySelector('[login-container]').classList.add('is-hidden');
  document.querySelector('[sign-container]').classList.remove('is-hidden');
}

import { refs, auth } from './firebase';
import { signOut } from 'firebase/auth';
import Notiflix from 'notiflix';

refs.logOutBtn.addEventListener('click', logOut);

async function logOut() {
  signOut(auth)
    .then(() => {
      refs.logInBtn.classList.remove('is-hidden');
      refs.signUpBtn.classList.remove('is-hidden');
      refs.logOutBtn.classList.add('is-hidden');

      Notiflix.Notify.success(`Good bye`);
    })
    .catch(error => {
      console.log(error);
      return Notiflix.Notify.failure(`Something went wrong`);
    });
}

/* eslint-disable no-case-declarations */
import {
  LOG_IN,
  LOG_OUT,
  saveUser,
  CHECK_IS_LOGGED,
  openModal,
  saveErrorLogin
} from '../actions/loginModal';
import {
  setLoadingState,
} from '../actions/spinner';

import { baseURL } from '../config';

import axios from 'axios';

const loginModalMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // Sur l'action de LOG_IN, je tente de me connecter
    case LOG_IN:
    // store.dispatch(setLoadingState(true));
      // Je récupère les valeurs des champs email et password
      const state = store.getState();
      const { email, password } = state.loginModal;
      axios.post(`${baseURL}/login`, { email, password }, { withCredentials: true })
        .then((response) => {
          // La fonction saveUser permet de changer le champ logged dans le reducer (true) et aussi de remplier le champ user_id
          store.dispatch(saveUser(response.data, response.data.info.user_id, response.data.info.animal_id, response.data.info.animal, response.data.info.image, response.data.info.groups));
          store.dispatch(openModal());
          
        })
        .catch((error) => {
          store.dispatch(saveErrorLogin(error.response.data))
          console.error(error);
        })
      next(action);
      break;
      
    case CHECK_IS_LOGGED:
      axios.post(`${baseURL}/isLogged`, {}, {
        withCredentials: true,
      }).then((response) => {
        console.log(response.data)
        store.dispatch(saveUser(response.data.session, response.data.session.info.user_id, response.data.session.info.animal_id, response.data.session.info.animal, response.data.session.info.image, response.data.session.info.groups ));
        next(action);
      })
        .catch((e) => {
          console.error(e);
        });
        next(action);
      break;
    case LOG_OUT:
      axios.post(`${baseURL}/logout`, {}, {
        withCredentials: true
      })
        // Sert à envoyer le cookie au serveur
        // Sans ça, le serveur ne nous connais plus
        .then((result) => {
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default loginModalMiddleWare;

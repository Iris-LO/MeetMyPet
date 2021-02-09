import axios from 'axios';
import {
  CREATE_USER,
  CREATE_ANIMAL,
  changeIsFlipped,
  saveIdUser,
  saveError,
  clearError,
  FETCH_SEND_AVATAR,
  savaAnimalId,
  changeCheckTos
} from '../actions/signUp';

import {
  setLoadingState,
} from '../actions/spinner';
import { baseURL } from '../config';

const signUpMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
      store.dispatch(setLoadingState(true));
      // Ici je viens récupérer l'objet user dans le reducer signUp
      const { user } = store.getState().signUp;
      axios.post(`${baseURL}/sign_up_user`, user )

        .then((result) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(saveIdUser(result.data));
          // Ici si après le catch j'ai reçu une erreur, je vais la supprimée
          store.dispatch(clearError())
          // Seulement si il n'y a pas d'erreur je tourne la card
          store.dispatch(changeIsFlipped())
        })
        .catch((error) => {
          console.log('ERROR SIGN_UP',error.response.data)
          // Ici je récupère le message d'erreur et je vais le stocker dans le state pour le récupérer dans le composant signUp !
          store.dispatch(saveError(error.response.data))
          store.dispatch(changeCheckTos())
          store.dispatch(setLoadingState(false));
        })
      // si je veux laisser passer l'action je n'oublie pas :
      next(action);
      break;
      case CREATE_ANIMAL:
        store.dispatch(setLoadingState(true));
        const { animal } = store.getState().signUp;
        axios.post(`${baseURL}/sign_up_animal`, animal )
          .then((result) => {
            store.dispatch(setLoadingState(false));
            store.dispatch(savaAnimalId(result.data.id))
          })
          .catch((error) => {

            store.dispatch(setLoadingState(false));
          })
        next(action);
        break;
      
        case FETCH_SEND_AVATAR:
          const { data : { img, animal_id } } = store.getState().signUp;
          let data = new FormData();
          data.append("img", img)
          data.append("animal_id", animal_id)
          axios.post(`${baseURL}/upload`, data )
            .then((result) => {
              
            })
            .catch((error) => {
              store.dispatch(setLoadingState(false));
            })
          next(action);
          break;
    default:
      next(action);
      break;
  }
  };
  export default signUpMiddleware;
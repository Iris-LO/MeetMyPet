import axios from 'axios';
import {
    CREATE_GROUP,
    groupCreatedOrNot
} from '../actions/createGroup';

import {
  setLoadingState,
} from '../actions/spinner';

import { baseURL } from '../config';

const createGroupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_GROUP: {
      store.dispatch(setLoadingState(true));
      // J'extrait la valeur des champs email et password depuis le sous objet settings du state
      // Ici je viens récupérer l'objet user dans le reducer signUp
      const { group } = store.getState().createGroup;

      axios.post(`${baseURL}/group_creation`, group, { withCredentials: true })
        .then((result) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(groupCreatedOrNot())
          alert("Votre groupe a été créée")
          
          console.log(result);
        })
        .catch((error) => {
          console.error( error);
          store.dispatch(setLoadingState(false));
        })
      next(action);
      break;
    }
    default:
      // si je veux laisser passer l'action je n'oublie pas :
      next(action);
      break;
  }
  };
  
  export default createGroupMiddleware;
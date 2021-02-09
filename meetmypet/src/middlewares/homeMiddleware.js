import axios from 'axios';
import {
    GET_DATA,
    displayDog,
    displayMarkers
} from '../actions/home';

import {
  setLoadingState,
} from '../actions/spinner';

import { baseURL } from '../config';


const homeMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_DATA:

        axios.get(`${baseURL}/home`)
  
          .then((result) => {
            store.dispatch(displayDog(result.data))
            store.dispatch(displayMarkers(result.data))
            // store.dispatch(setLoadingState());
            next(action);
          })
          .catch((error) => {
            console.error("JE SUIS ERROR DE MIDDLEWARE HOME", error);
          })
        // si je veux laisser passer l'action je n'oublie pas :
        next(action);
        break;
    default:
      // si je veux laisser passer l'action je n'oublie pas :
      next(action);
      break;
    }
  };
  
  export default homeMiddleware;
import axios from 'axios';
import { FETCH_GROUP_PAGE, saveGroup, FETCH_MESSAGES  } from '../actions/groupPage';
import { saveMessages } from '../actions/chat';

import {
    setLoadingState,
  } from '../actions/spinner';

import { baseURL } from '../config';

const groupPageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUP_PAGE:
        
        axios.get(`${baseURL}/group/${action.id}`)
        
          .then((result) => {
            store.dispatch(saveGroup(result.data.group[1], result.data.group[0].total_members))
            store.dispatch(saveMessages(result.data.messages))

            next(action);
          })
          .catch((error) => {
            console.error("JE SUIS ERROR DE MIDDLEWARE GROUPAGE", error);
          })
        // si je veux laisser passer l'action je n'oublie pas :
        next(action);
        break;
      case FETCH_MESSAGES:
        axios.get(`${baseURL}/group/${action.id}`)
        
          .then((result) => {
            store.dispatch(saveMessages(result.data.messages))
            next(action);
          })
          .catch((error) => {
            console.error("JE SUIS ERROR DE MIDDLEWARE GROUPAGE", error);
          })
        // si je veux laisser passer l'action je n'oublie pas :
        next(action);
        break;
    default:
      next(action);
      break;
  }
  };
  
  export default groupPageMiddleware;

  
import axios from 'axios';
import {
    FETCH_GROUPS,
    saveGroups
} from '../actions/myGroups';

import {
  setLoadingState,
} from '../actions/spinner';
import { baseURL } from '../config';

const myGroupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUPS:
      // store.dispatch(setLoadingState(true));
      const { animal_id } = store.getState().loginModal
      axios.get(`${baseURL}/animal_has_groups/${animal_id}`, { withCredentials: true })

        .then((result) => {
          // store.dispatch(setLoadingState(false));

          
          store.dispatch(saveGroups(result.data));
          console.log("TOTAL MEMBERS : ",result)
        })
        .catch((error) => {
          console.log('ERROR SIGN_UP',error.response.data);
          // store.dispatch(setLoadingState(false));
        })
      next(action);
      break;
    default:
      next(action);
      break;
  }
  };
  export default myGroupMiddleware;
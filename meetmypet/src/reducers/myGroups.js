import {
    SAVE_GROUPS,
  } from '../actions/myGroups';
    
    const initialState = {
     groups: null
    };
    
    const myGroups = (state = initialState, action = {}) => {
      switch (action.type) {
        case SAVE_GROUPS :
            return {
                ...state,
                groups: action.data
            }
        default:
          return state;
      }
    };
    
    export default myGroups;
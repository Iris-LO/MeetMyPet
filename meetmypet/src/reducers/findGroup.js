import { CHANGE_FIELD_VALUE, SAVE_GROUP, GROUP_JOINED, SET_CURRENT_GROUP} from '../actions/findGroup';
import { CLEAR_FIELD } from '../actions/field';
  
  const initialState = {
    currentGroup: null,
    groupJoined: false,
    name : {
       name: '',
     },
    groups: [],
  };
  
  const findGroup = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_FIELD_VALUE :
            return {
            ...state,
            name : {
              ...state.name,
              [action.name]: action.value,
            }
  
            }
        case SAVE_GROUP :
          return {
            ...state,
            groups: action.groups
          }
        case CLEAR_FIELD :
          return {
            ...state,
            name : {
              [action.name]: action.value,
            }
          }
        case GROUP_JOINED :
          return {
            ...state,
            groupJoined: action.value
          }
        case SET_CURRENT_GROUP : 
        return {
          ...state,
          currentGroup: action.id,
        }
      default:
        return state;
    }
  };
  
  export default findGroup;
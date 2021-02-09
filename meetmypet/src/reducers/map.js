import { DISPLAY_MARKERS } from '../actions/home';
  
  const initialState = {
    markers: [],

}
  
  const map = (state = initialState, action = {}) => {
    switch (action.type) {
        case DISPLAY_MARKERS : {
            return {
              ...state,
                markers: action.allGroups,
            }
        }
      default:
        return state;
    }
  };
  
  export default map;

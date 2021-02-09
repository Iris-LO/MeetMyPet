import { SET_LOADING_STATE } from '../actions/spinner';
  
  const initialState = {
    loading: false,
    }
  
  const spinner = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_LOADING_STATE:
        return {
          ...state,
          loading: !state.loading,
        };
      default:
        return state;
    }
  };
  
  export default spinner;
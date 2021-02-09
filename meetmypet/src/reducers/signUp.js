import {
  CHANGE_FIELD_VALUE_USER,
  CHANGE_FIELD_VALUE_ANIMAL,
  CHANGE_FIELD_SELECT,
  CHANGE_IS_FLIPPED,
  CHANGE_CHECK_TOS,
  SAVE_ID_USER,
  SAVE_ERROR,
  CLEAR_ERROR,
  SAVE_ANIMAL_ID,
  CHANGE_AVATAR_ANIMAL,
  DISPLAY_ERROR_TOS
} from '../actions/signUp';
  
  const initialState = {
    error: '',
    tosChek: false,
    isFlipped : false,
    user : {
      first_name: '',
      email: '',
      password: '',
      city: '',
      address: '',
    },
    animal : {
      name: '',
      description: '',
      sex: '',
      breed: '',
      size: '',
      age: '',
      user_id: null,
    },
    data : {
      img: null,
      animal_id: null,
    }
    
  };
  
  const signUp = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_FIELD_VALUE_USER : {
        return {
          ...state,
          user : {
            ...state.user,
            [action.name]: action.value,
          }
        }
      }
      case CHANGE_FIELD_VALUE_ANIMAL : {
        return {
          ...state,
          animal : {
            ...state.animal,
            [action.name]: action.value,
          }
        }
      }
      case CHANGE_FIELD_SELECT : {
        return {
          ...state,
          animal : {
            ...state.animal,
              [action.name]: action.value,
          }
        }
      }
      case CHANGE_IS_FLIPPED : {
        return {
          ...state,
          isFlipped: !state.isFlipped,
        }
      }
      case CHANGE_CHECK_TOS : {
        return {
          ...state,
          tosChek: !state.tosChek,
        }
      }
      case  SAVE_ID_USER :
        return {
          ...state,
          animal : {
            ...state.animal,
            user_id : action.user_id
          }
        }
        case  SAVE_ERROR :
          return {
            ...state,
            error: action.valueError
          }
        case  CLEAR_ERROR :
          return {
            ...state,
            error: '',
          }
        case  SAVE_ANIMAL_ID :
          return {
            ...state,
            data : {
              ...state.data,
              animal_id: action.id,
            }
          }
        case CHANGE_AVATAR_ANIMAL : 
          return {
            ...state,
            data : {
              ...state.data,
              [action.name]: action.value
            }
          }
        case DISPLAY_ERROR_TOS :
          return {
            ...state,
            error: 'Veuillez accepter nos conditions'
          }
      default:
        return state;
    }
  };
  
  export default signUp;
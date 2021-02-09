import {
  CHANGE_FIELD_VALUE_USER,
  CHANGE_FIELD_SELECT,
  CHANGE_FIELD_VALUE_ANIMAL,
  SAVE_DATA_USER,
  SAVE_DATA_ANIMAL,
  SAVE_SUCESS,
} from '../actions/profil';
  
  const initialState = {
    sucess: '',
    user_id: null,
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
      age: null,
      user_id: null,
  },
}
  
  const profil = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_DATA_USER :
        return {
          ...state,
          user : {
            ...state.user,
            first_name: action.first_name,
            email: action.email,
            password: action.password,
            city: action.city,
            address: action.address,
          }
        }
        
      case CHANGE_FIELD_VALUE_USER :
        return {
          ...state,
          user : {
            ...state.user,
            [action.name]: action.value,
          }
        }
        case CHANGE_FIELD_SELECT :
          return {
            ...state,
            animal : {
              ...state.animal,
                [action.name]: action.value,
            }
          }
          case SAVE_DATA_ANIMAL :
            return {
              ...state,
              animal : {
                ...state.animal,
                name: action.name,
                description: action.description,
                sex: action.sex,
                breed: action.breed,
                size: action.size,
                age: action.age,
                user_id: action.user_id,
              }
            }
          case CHANGE_FIELD_VALUE_ANIMAL :
            return {
              ...state,
              animal : {
                ...state.animal,
                [action.name]: action.value,
              }
            }
          case SAVE_SUCESS :
            return {
              ...state,
              sucess: action.valueSucess
              }
      default:
        return state;
    }
  };
  
  export default profil;

  
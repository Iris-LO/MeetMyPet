import {
  CHANGE_FIELD_VALUE,
  CHANGE_LATLNG,
  CHANGE_ZOOM,
  UPDATE_VALUE_COUNTRY,
  UPDATE_VALUE_CITY,
  UPDATE_VALUE_ADRESS,
  GROUP_CREATED_OR_NOT
} from '../actions/createGroup';
import { CLEAR_FIELD } from '../actions/field';
  
  const initialState = {
    groupCreated: false,
    group : {
      name: '',
      latitude : '46.57467481018573',
      longitude: '0.40652893058295453',
      address: '',
      city: '',
      country: '',
      description: '',
    },
    zoom: 9, 
  };
  
  const createGroup = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_FIELD_VALUE : {
            return {
            ...state,
            group : {
              ...state.group,
              [action.name]: action.value,
            }
            }
        }
        case CHANGE_LATLNG : {
            return {
                ...state,
                group : {
                  ...state.group,
                  latitude: action.latitude,
                  longitude:action.longitude,
                }
            }
        }
        case CHANGE_ZOOM : {
          return {
            ...state,
              zoom: action.valueZoom
          }
        }
        case UPDATE_VALUE_COUNTRY : {
          return {
            ...state,
            group : {
              ...state.group,
              country: action.value,
            }

          }
        }
        case UPDATE_VALUE_CITY : {
          return {
            ...state,
            group : {
              ...state.group,
              city: action.value
            }
          }
        }
        case UPDATE_VALUE_ADRESS : {
          return {
            ...state,
            group : {
              ...state.group,
              address: action.value
            }
          }
        }
        case CLEAR_FIELD :
          return {
            ...state,
            group : {
              ...state.group,
              [action.name]: action.value,
            }
          }
          case GROUP_CREATED_OR_NOT :
            return {
              ...state,
              groupCreated: !state.groupCreated
            }
      default:
        return state;
    }
  };
  
  export default createGroup;

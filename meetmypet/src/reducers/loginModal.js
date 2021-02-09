/* eslint-disable no-case-declarations */
import {
    CHANGE_LOGIN_FIELD_VALUE,
    SAVE_USER,
    LOG_OUT,
    OPEN_MODAL,
    logOut,
    SAVE_ERROR_LOGIN
    } from '../actions/loginModal';

    export const initialState = {
    image: '',
    error: null,
    email: '',
    password: '',
    animal:'',
    isLogged: false,
    user_id : null,
    animal_id: null,
    infos: {},
    settings : {
        display: false,
    },
    groups:'',
};

const loginModal = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_LOGIN_FIELD_VALUE:
        return {
            ...state,
            [action.name]: action.value,
        };
        case SAVE_USER:
            return {
                ...state,
                isLogged: action.logged,
                user_id : action.user_id,
                animal_id: action.animal_id,
                animal: action.animal,
                image: action.image,
                groups: action.groups,
                animalImage: action.image,
            }
        case LOG_OUT:
        return {
            ...state,
            isLogged: false,
        };
        case OPEN_MODAL:
        return{
            ...state,
            settings:{
                display: !state.settings.display,
            }
        };
        case logOut:
        return {
            ...state,
            isLogged: false,
            infos: {},
        };
        case SAVE_ERROR_LOGIN : 
        return {
            ...state,
            error: action.valueError
        }
        default:
        return state;
    }
};

export default loginModal;

export const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const OPEN_MODAL = 'OPEN_MODAL';
export const SAVE_ERROR_LOGIN = 'SAVE_ERROR_LOGIN';


export const changeLoginFieldValue = (value, name) => ({
    type: CHANGE_LOGIN_FIELD_VALUE,
    value,
    name,
});
export const openModal = () => ({
    type: OPEN_MODAL,
});
export const logIn = () => ({
    type: LOG_IN,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const saveUser = ({ logged }, user_id, animal_id, animal, image, groups) => ({
    type: SAVE_USER,
    logged,
    user_id,
    animal_id,
    animal,
    image,
    groups,
});

export const checkIsLogged = () => ({
    type: CHECK_IS_LOGGED,
});

export const saveErrorLogin = (valueError) => ({
    type: SAVE_ERROR_LOGIN,
    valueError
  })



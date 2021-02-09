export const CHANGE_FIELD_VALUE_USER = 'CHANGE_FIELD_VALUE_USER';
export const CHANGE_FIELD_VALUE_ANIMAL = 'CHANGE_FIELD_VALUE_ANIMAL';
export const HANDLE_SIGN_UP = 'HANDLE_SIGN_UP';
export const CHANGE_FIELD_SELECT = 'CHANGE_FIELD_SELECT';
export const CHANGE_IS_FLIPPED = 'CHANGE_IS_FLIPPED';
export const CHANGE_CHECK_TOS = 'CHANGE_CHECK_TOS';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_ANIMAL = 'CREATE_ANIMAL';
export const SAVE_ID_USER = 'SAVE_ID_USER';
export const SAVE_ERROR = 'SAVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const FETCH_SEND_AVATAR = 'FETCH_SEND_AVATAR';
export const SAVE_ANIMAL_ID = 'SAVE_ANIMAL_ID';
export const CHANGE_AVATAR_ANIMAL = 'CHANGE_AVATAR_ANIMAL';
export const DISPLAY_ERROR_TOS = 'DISPLAY_ERROR_TOS';



export const changeFieldValueUser = (value, name) => ({
  type: CHANGE_FIELD_VALUE_USER,
  value,
  name,
});

export const changeFieldValueAnimal = (value, name) => ({
  type: CHANGE_FIELD_VALUE_ANIMAL,
  value,
  name,
});

export const handleSignUp = () => ({
  type: HANDLE_SIGN_UP,
});

export const changeFieldSelect = (value, name) => ({
  type: CHANGE_FIELD_SELECT,
  value,
  name
});

export const changeIsFlipped = () => ({
  type: CHANGE_IS_FLIPPED,
});

export const changeCheckTos = () => ({
  type: CHANGE_CHECK_TOS
});

export const createUser = () => ({
  type: CREATE_USER
});

export const createAnimal = () => ({
  type: CREATE_ANIMAL
});

export const saveIdUser = ({ user_id }) => ({
  type: SAVE_ID_USER,
  user_id,
});

export const saveError = (valueError) => ({
  type: SAVE_ERROR,
  valueError
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const fetchSendAvatar = () => ({
  type: FETCH_SEND_AVATAR,
});

export const savaAnimalId = (id) => ({
  type: SAVE_ANIMAL_ID,
  id,
});

export const changeAvatarAnimal = (value, name) => ({
  type: CHANGE_AVATAR_ANIMAL,
  value,
  name,
});

export const displayErrorTos = () => ({
  type: DISPLAY_ERROR_TOS,
});


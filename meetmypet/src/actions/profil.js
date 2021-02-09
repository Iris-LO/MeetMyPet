export const CHANGE_FIELD_VALUE_USER = 'CHANGE_FIELD_VALUE_USER';
export const CHANGE_FIELD_VALUE_ANIMAL = 'CHANGE_FIELD_VALUE_ANIMAL';
export const CHANGE_FIELD_SELECT = 'CHANGE_FIELD_SELECT';
export const UPDATE_INFO_USER = 'UPDATE_INFO_USER';
export const UPDATE_INFO_ANIMAL = 'UPDATE_INFO_ANIMAL';
export const FETCH_DATA_PROFIL_USER = 'FETCH_DATA_PROFIL_USER';
export const FETCH_DATA_PROFIL_ANIMAL = 'FETCH_DATA_PROFIL_ANIMAL';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';
export const SAVE_DATA_ANIMAL = 'SAVE_DATA_ANIMAL';
export const SAVE_SUCESS = 'SAVE_SUCESS';
export const DELETE_USER = "DELETE_USER";


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


export const changeFieldSelect = (value, name) => ({
  type: CHANGE_FIELD_SELECT,
  value,
  name
});

export const updateInfoUser = () => ({
  type: UPDATE_INFO_USER,
});

export const updateInfoAnimal = () => ({
  type: UPDATE_INFO_ANIMAL,
});

export const fetchDataProfilUser = () => ({
  type: FETCH_DATA_PROFIL_USER,
});

export const fetchDataProfilAnimal = () => ({
  type: FETCH_DATA_PROFIL_ANIMAL,
});

export const saveDataUser = ({first_name, email, password, city, address}) => ({
  type: SAVE_DATA_USER,
  first_name,
  email,
  password,
  city, 
  address
});

export const saveDataAnimal = ({name, description, sex, breed, size, age, user_id }) => ({
  type: SAVE_DATA_ANIMAL,
  name,
  description,
  sex,
  breed,
  size,
  age,
  user_id
});

export const saveSucess = (valueSucess) => ({
  type: SAVE_SUCESS,
  valueSucess
})

export const deleteUser = () => ({
  type: DELETE_USER,
})
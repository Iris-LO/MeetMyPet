export const CHANGE_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const CHANGE_LATLNG = 'CHANGE_LATLNG';
export const CHANGE_ZOOM = 'CHANGE_ZOOM';
export const UPDATE_VALUE_COUNTRY = 'UPDATE_VALUE_COUNTRY';
export const UPDATE_VALUE_CITY = 'UPDATE_VALUE_CITY';
export const UPDATE_VALUE_ADRESS = 'UPDATE_VALUE_ADRESS';
export const CREATE_GROUP = 'CREATE_GROUP';
export const GROUP_CREATED_OR_NOT = 'GROUP_CREATED_OR_NOT'


export const changeFieldValue = (value, name) => ({
    type: CHANGE_FIELD_VALUE,
    value,
    name,
});

export const setLatin = (latitude, longitude) => ({
    type: CHANGE_LATLNG,
    latitude,
    longitude,
})

export const changeZoom = ( valueZoom ) => ({
    type: CHANGE_ZOOM,
    valueZoom
})

export const updateValueCountry = (value) => ({
    type: UPDATE_VALUE_COUNTRY,
    value,
})

export const updateValueCity = (value) => ({
    type: UPDATE_VALUE_CITY,
    value,
})

export const updateValueAdress = (value) => ({
    type: UPDATE_VALUE_ADRESS,
    value,
})

export const createGroup = () => ({
    type: CREATE_GROUP,
})

export const groupCreatedOrNot = () => ({
    type: GROUP_CREATED_OR_NOT,
})


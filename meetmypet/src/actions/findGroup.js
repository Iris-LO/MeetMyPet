export const CHANGE_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const FETCH_DATA_GROUP = 'FETCH_DATA_GROUP';
export const SAVE_GROUP = 'SAVE_GROUP';
export const JOIN_GROUP = 'JOIN_GROUP';
export const GROUP_JOINED = 'GROUP_JOINED';
export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';

export const changeFieldValue = (value, name) => ({
    type: CHANGE_FIELD_VALUE,
    value,
    name,
});

export const fetchDataGroup = () => ({
    type: FETCH_DATA_GROUP,
});

export const saveGroup = (groups) => ({
    type: SAVE_GROUP,
    groups,
});

export const joinGroup = (group_id) => ({
    type: JOIN_GROUP,
    group_id,
});

export const groupJoined = (value) => ({
    type: GROUP_JOINED,
    value
});

export const setCurrentGroup = (id) => ({
    type: SET_CURRENT_GROUP,
    id
});
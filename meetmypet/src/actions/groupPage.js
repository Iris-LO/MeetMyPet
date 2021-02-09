export const DISPLAY_GROUP = 'DISPLAY_GROUP';
// export const FETCH_GROUP_PAGE = 'FETCH_GROUP_PAGE';
export const FETCH_GROUP_PAGE = 'FETCH_GROUP_PAGE';
export const SAVE_GROUP = 'SAVE_GROUP';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export const displayGroup = () => ({
    type: DISPLAY_GROUP,
});

export const fetchGroupPage = (id) => ({
    type: FETCH_GROUP_PAGE,
    id,
});

export const saveGroup = ({id, name, latitude, longitude, city, description}, nbMembers) => ({
    type: SAVE_GROUP,
    id,
    name,
    latitude,
    longitude,
    city,
    description,
    nbMembers
});

export const fetchMessages = (id) => ({
    type: FETCH_MESSAGES,
    id,
})
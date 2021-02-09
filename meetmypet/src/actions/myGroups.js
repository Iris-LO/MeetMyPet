export const FETCH_GROUPS = 'FETCH_GROUPS';
export const SAVE_GROUPS = 'SAVE_GROUPS';

export const fetchGroups = () => ({
    type: FETCH_GROUPS,
});

export const saveGroups = (data) => ({
    type: SAVE_GROUPS,
    data
})
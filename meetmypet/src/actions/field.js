export const CLEAR_FIELD = 'CLEAR_FIELD';

export const clearField = (value, name) => ({
    type: CLEAR_FIELD,
    value,
    name
});
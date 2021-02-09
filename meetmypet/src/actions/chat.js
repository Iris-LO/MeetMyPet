export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
// export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';

// Action Creator
export const changeFieldValue = (name, value) => ({
    type: CHANGE_FIELD_VALUE,
    name,
    value,
});
    export const changeMessage = (currentMessage) => ({
    type: CHANGE_MESSAGE,
    currentMessage,
});
// export const sendMessage = () => ({
//     type: SEND_MESSAGE,
// });
export const addMessage = ( message, author, image) => ({
    type: ADD_MESSAGE,
    message,
    author,
    image,
});

export const postmessage = () => ({
    type: POST_MESSAGE,
});

export const saveMessages = (messages) => ({
    type: SAVE_MESSAGES,
    messages,
})
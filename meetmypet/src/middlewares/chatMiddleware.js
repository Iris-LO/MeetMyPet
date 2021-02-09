/* eslint-disable no-case-declarations */
import {
POST_MESSAGE
} from '../actions/chat';

import { baseURL } from '../config';
import axios from 'axios';

const chatMiddleware  = (store) => (next) => (action) => {
    switch (action.type) {

        case POST_MESSAGE:
        const { content } = store.getState().chat;
        
        const { group : { id } } = store.getState().groupPage
        axios.post(`${baseURL}/group_chatroom/${id}`, content, { withCredentials: true })
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        next(action);
        break;
            default:
      // si je veux laisser passer l'action je n'oublie pas :
        next(action);
        break;
    }
};
export default chatMiddleware;
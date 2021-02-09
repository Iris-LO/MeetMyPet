/* eslint-disable no-case-declarations */
import {
displayDog,
FETCH_SLIDER,
} from '../actions/sliderPart';

import { baseURL } from '../config';

import axios from 'axios';

const sliderMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        // Sur l'action de LOG_IN, je tente de me connecter
        case FETCH_SLIDER:

        axios.post(`https://meetmypetapo.herokuapp.com/`) // Fetch des 8 derniers inscrits
            .then((response) => {
            store.dispatch(displayDog(response.data));
            next(action);
            })
            .catch((e) => {
            console.error(e);
            }).finally(() => {
            store.dispatch();
            next(action);
            });
        break;

        default:
        next(action);
        break;
    }
};

export default sliderMiddleware;

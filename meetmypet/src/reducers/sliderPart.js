// import {  
//     DISPLAY_DOG
// } from "../actions/sliderPart";

import {
    DISPLAY_DOG
} from '../actions/home';


const initialState = {
    sliderDog: [],
};

const SliderReducer = (state = initialState, action) => {
    switch(action.type){
        case DISPLAY_DOG:
        return {
            ...state,
            // Ici je remplace le tableau par le new tab de dogs
            sliderDog :action.lastAnimalsSignedUp,
        };
    default: 
    return state;
    };
}

export default SliderReducer;
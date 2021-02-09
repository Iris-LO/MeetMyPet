import { DISPLAY_GROUP, SAVE_GROUP } from '../actions/groupPage';

const initialState = {

    animal : {
        name: 'Rex',
        user_id: null,
    },
    group : {
        id: '',
        name: '',
        latitude : '',
        longitude: '',
        address: '',
        city: '',
        country: '',
        description: '',
        nbMembers: null
    },
    zoom:9,
};

const groupPage = (state=initialState, action = {}) => {
    switch(action.type){
        case DISPLAY_GROUP:
        return {
            ...state,
        }
        case SAVE_GROUP:
        return{
            ...state,
            group: {
                ...state.group,
                id: action.id,
                name: action.name,
                latitude: action.latitude,
                longitude: action.longitude,
                description: action.description,
                city: action.city,
                nbMembers: action.nbMembers,
            },
        }
        default:
    return state;
    }
}

export default groupPage;
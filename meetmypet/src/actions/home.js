export const GET_DATA = 'GET_DATA';
export const CHANGE_MARKERS = 'CHANGE_MARKERS';
export const DISPLAY_DOG = 'DISPLAY_DOG';
export const DISPLAY_MARKERS = 'DISPLAY_MARKERS';



export const getData = () => ({
    type: GET_DATA,
});

export const changeMarkers = (allMarkers) => ({
    type: CHANGE_MARKERS,
    allMarkers,
});
// Ici je destructure pour récupérer l'objet  lastAnimalsSignedUp de result.data et je le place dans le payload
export const displayDog = ({lastAnimalsSignedUp}) => ({
    type: DISPLAY_DOG,
    lastAnimalsSignedUp,
});

export const displayMarkers = ({allGroups}) => ({
    type: DISPLAY_MARKERS,
    allGroups
})
export const DISPLAY_DOG = "DISPLAY_DOG";
export const FETCH_SLIDER = 'FETCH_SLIDER';

export const displayDog = (newDog) => ({
    type : DISPLAY_DOG,
    newDog,
});

// Action creators
export const fetchSlider = () => ({
  type: FETCH_SLIDER,
});
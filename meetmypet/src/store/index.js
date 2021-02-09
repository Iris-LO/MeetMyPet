// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import signUpMiddleware from '../middlewares/signUpMiddleware';
import loginModalMiddleware from '../middlewares/loginModalMiddleware';
import sliderMiddleware from '../middlewares/sliderMiddleware';
import createGroupMiddleware from '../middlewares/createGroupMiddleware';
import homeMiddleware from '../middlewares/homeMiddleware';
import findGroupMiddleware from '../middlewares/findGroupMiddleware';
import profilMiddleware from '../middlewares/profilMiddleware';
import myGroupMiddleware from '../middlewares/myGroupMiddleware';
import groupPageMiddleware from '../middlewares/groupPageMiddleware'
import chatMiddleware from '../middlewares/chatMiddleware';



// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      signUpMiddleware,
      loginModalMiddleware,
      homeMiddleware,
      sliderMiddleware,
      createGroupMiddleware,
      findGroupMiddleware,
      profilMiddleware,
      myGroupMiddleware,
      groupPageMiddleware,
      chatMiddleware
    ),
  );

  // == Store
const store = createStore(
    rootReducer,
    // preloadedState,
    enhancers,
  );
  
  // == Export
  export default store
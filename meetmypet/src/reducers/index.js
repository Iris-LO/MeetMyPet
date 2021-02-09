import { combineReducers } from 'redux';
import signUp from './signUp'
import loginModal from './loginModal';
import createGroup from './createGroup';
import findGroup from './findGroup';
import profil from './profil';
import chat from './chat';
import sliderPart from './sliderPart';
import spinner from './spinner';
import map from './map';
import groupPage from './groupPage';
import myGroups from './myGroups';

export default combineReducers({
  signUp,
  loginModal,
  createGroup,
  findGroup,
  profil,
  chat,
  sliderPart,
  spinner,
  map,
  groupPage,
  myGroups,
});
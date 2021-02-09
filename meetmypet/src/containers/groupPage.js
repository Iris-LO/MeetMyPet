import { connect } from 'react-redux';
import { setLatin } from '../actions/createGroup';
import { displayGroup, fetchGroupPage, fetchMessages } from '../actions/groupPage';

import GroupPage from '../Components/GroupPage';

const mapStateToProps = (state) => {
  console.log("JE SUIS LE STATE DE HASNEWMESSAGE",state.chat.hasNewMessage)
  return(
  {
    groupID: state.groupPage.group.id,
    latitude: state.groupPage.group.latitude,
    longitude: state.groupPage.group.longitude,
    position: state.groupPage.group.position,
    city: state.groupPage.group.city,
    description: state.groupPage.group.description,
    markers: state.map.markers,
    author: state.loginModal.animal,
    nbMembers: state.groupPage.group.nbMembers,
    name: state.groupPage.group.name,
    messages: state.chat.messages,
    // title: state.group.name, le groupe en question
})};


const mapDispatchToProps = (dispatch) => ({
  setLatLng: (latitude, longitude) => {
    dispatch(setLatin(latitude, longitude))
  },
  displayGroup : () => {
    dispatch(displayGroup());
  },
  fetchGroupPage: (id) => {
    dispatch(fetchGroupPage(id));
  },
  fetchMessages: (id) => {
    dispatch(fetchMessages(id));
  }
});


// Container
const GroupPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupPage);

// == Export
export default GroupPageContainer;

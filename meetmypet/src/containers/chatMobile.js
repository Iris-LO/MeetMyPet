import { connect } from 'react-redux';
import { setLatin } from '../actions/createGroup';
import { displayGroup } from '../actions/groupPage';

import ChatMobile from '../Components/ChatMobile';

const mapStateToProps = (state) => ({

    groupID: state.map.markers.id,
    // title: state.group.name, le groupe en question

});


const mapDispatchToProps = (dispatch) => ({
  setLatLng: (latitude, longitude) => {
    dispatch(setLatin(latitude, longitude))
  },
  displayGroup : () => {
    dispatch(displayGroup());
  }
});

// Container
const chatMobileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatMobile);

// == Export
export default chatMobileContainer;

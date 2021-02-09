import { connect } from 'react-redux';
import MapLeaf from '../Components/Map';
import { setLatin, updateValueCountry, updateValueCity, updateValueAdress } from '../actions/createGroup';
import {
  openModal
} from '../actions/loginModal';
import {joinGroup} from '../actions/findGroup';

const mapStateToProps = (state) => ({
    latitude: state.createGroup.group.latitude,
    longitude: state.createGroup.group.longitude,
    // position: state.createGroup.position,
    city: state.createGroup.city,
    country: state.createGroup.country,
    adress: state.createGroup.adress,
    markers: state.map.markers,
    isLogged: state.loginModal.isLogged,
    show: state.loginModal.settings.display,
    groups: state.loginModal.groups
});

const mapDispatchToProps = (dispatch) => ({
  setLatLng: (latitude, longitude) => {
    dispatch(setLatin(latitude, longitude))
  },
  updateValueCountry: (value) => {
    dispatch(updateValueCountry(value))
  },
  updateValueCity: (value) => {
    dispatch(updateValueCity(value))
  },
  updateValueAdress: (value) => {
    dispatch(updateValueAdress(value))
  },
  openModal:() => {
    dispatch(openModal());
  },
  joinGroup: (group_id) => {
    dispatch(joinGroup(group_id));
  }
});

// Container
const MapLeafContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapLeaf);

// == Export
export default MapLeafContainer;
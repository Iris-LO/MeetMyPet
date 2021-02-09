import { connect } from 'react-redux';
import CreateGroup from '../Components/CreateGroup';
import { changeFieldValue, setLatin, changeZoom, createGroup } from '../actions/createGroup';
import { clearField } from '../actions/field';

const mapStateToProps = (state) => ({
    groupCreated: state.createGroup.groupCreated,
    name: state.createGroup.group.name,
    address: state.createGroup.group.address,
    description: state.createGroup.group.description,
    latitude: state.createGroup.group.latitude,
    longitude: state.createGroup.group.longitude,
    zoom: state.createGroup.zoom
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (inputValue, inputName) => {
    dispatch(changeFieldValue(inputValue, inputName));
  },
  setLatLng: (latitude, longitude) => {
    dispatch(setLatin(latitude, longitude))
  },
  changeZoom: (valueZoom) => {
    dispatch(changeZoom(valueZoom))
  },
  createGroup: () => {
    dispatch(createGroup())
  },
  clearField: (value, name) => {
    dispatch(clearField(value, name));
  }
});

// Container
const CreateGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroup);

// == Export
export default CreateGroupContainer;
import { connect } from 'react-redux';
import FindGroup from '../Components/FindGroup';
import { changeFieldValue, fetchDataGroup, joinGroup, setCurrentGroup } from '../actions/findGroup';
import { clearField } from '../actions/field';

const mapStateToProps = (state) => ({
    groupJoined: state.findGroup.groupJoined,
    name: state.findGroup.name.name,
    groups: state.findGroup.groups,
    currentGroup: state.findGroup.currentGroup,
    myGroups: state.loginModal.groups
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (inputValue, inputName) => {
    dispatch(changeFieldValue(inputValue, inputName));
  },
  fetchDataGroup: () => {
    dispatch(fetchDataGroup());
  },
  clearField: (value, name) => {
    dispatch(clearField(value, name));
  },
  joinGroup: (group_id) => {
    dispatch(joinGroup(group_id));
  },
  setCurrentGroup: (group_id) => {
    dispatch(setCurrentGroup(group_id));
  }
});




// Container
const FindGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindGroup);

// == Export
export default FindGroupContainer;
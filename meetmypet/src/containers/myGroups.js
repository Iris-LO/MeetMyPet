import { connect } from 'react-redux';
import MyGroups from '../Components/MyGroups';
import { fetchGroups } from '../actions/myGroups';

const mapStateToProps = (state) => ({
    groups: state.myGroups.groups
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => {
    dispatch(fetchGroups())
  }
});

// Container
const MyGroupsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGroups);

// == Export
export default MyGroupsContainer;
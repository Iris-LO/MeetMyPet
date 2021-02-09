import { connect } from 'react-redux';
import {
    logOut,
    openModal,
} from '../actions/loginModal';
import SideBar from '../Components/SideBar'


const mapStateToProps = (state) => ({
isLogged: state.loginModal.isLogged,
animalImage: state.loginModal.image,
});

const mapDispatchToProps = (dispatch) => ({

    openModal:() => {
        dispatch(openModal());
    },
    handleLogout: () => {
    dispatch(logOut());
  },
});

// Container
const SideBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideBar);

// == Export
export default SideBarContainer;

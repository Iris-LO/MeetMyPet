import { connect } from 'react-redux';
import {
    openModal,
    logOut,
} from '../actions/loginModal';
import Header from '../Components/Header'


const mapStateToProps = (state) => ({
isLogged: state.loginModal.isLogged,
animalId: state.loginModal.animal_id,
animalName: state.loginModal.animal,
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
const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;

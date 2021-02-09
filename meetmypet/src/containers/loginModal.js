import { connect } from 'react-redux';
import {
  changeLoginFieldValue,
  logIn,
  logOut,
  openModal,
} from '../actions/loginModal';

import LoginModal from '../Components/LoginModal';

const mapStateToProps = (state) => ({
  email: state.loginModal.email,
  password: state.loginModal.password,
  isLogged: state.loginModal.isLogged,
  show: state.loginModal.settings.display,
  error: state.loginModal.error,
  groups: state.loginModal.groups,
  userId: state.loginModal.user_id
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginFieldValue(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },

  openModal:() => {
    dispatch(openModal());
  }
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModal);

// == Export
export default LoginContainer;

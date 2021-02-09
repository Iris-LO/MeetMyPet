import { connect } from 'react-redux';
import App from '../Components/App';

import { checkIsLogged } from '../actions/loginModal';
import {
  getData
} from '../actions/home';

const mapStateToProps = (state) => ({
  loading: state.spinner.loading,
  isLogged: state.loginModal.isLogged
});

const mapDispatchToProps = (dispatch) => ({

  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
  getData: () => {
    dispatch(getData());
  }
  // fetchDataDog: () => {
  //   dispatch(getData());
  // },
  // fetchDataProfil: () => {
  //   dispatch(fetchDataProfil());
  // },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;

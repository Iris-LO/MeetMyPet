import { connect } from 'react-redux';
import Home from '../Components/Home';
import {
    getData
} from '../actions/home';
import { checkIsLogged } from '../actions/loginModal';

const mapStateToProps = (state) => ({
    //markers: state.map.markers,
    lastDogs: state.sliderPart.sliderDog,
    groups: state.loginModal.groups
});

const mapDispatchToProps = (dispatch) => ({
    fetchDataDog: () => {
        dispatch(getData());
    },
    checkIsLogged: () => {
        dispatch(checkIsLogged());
      },
});


// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
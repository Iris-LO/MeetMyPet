import { connect } from 'react-redux';
import SliderPart from '../Components/SliderPart';
import {
  getData
} from '../actions/home';

const mapStateToProps = (state) => ({
  // Je viens récupérer le tab de dogs rempli grace au fetch du middleware
// lastDogs: state.sliderPart.sliderDog
    // image: state.loginModal.image
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataDog: () => {
      dispatch(getData());
  }
});

// Container
const SliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SliderPart);

// == Export
export default SliderContainer;
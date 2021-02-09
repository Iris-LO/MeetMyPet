import { connect } from 'react-redux';
import SignUp from '../Components/SignUp';
import {
  changeFieldValueUser,
  handleSignUp,
  changeFieldSelect,
  changeIsFlipped,
  changeCheckTos,
  createUser,
  changeFieldValueAnimal,
  createAnimal,
  fetchSendAvatar,
  changeAvatarAnimal,
  displayErrorTos
} from '../actions/signUp';

const mapStateToProps = (state) => ({
    error: state.signUp.error,
    tosChek: state.signUp.tosChek,
    isFlipped: state.signUp.isFlipped,
    first_name: state.signUp.user.first_name,
    email: state.signUp.user.email,
    password: state.signUp.user.password,
    address: state.signUp.user.address,
    city: state.signUp.user.city,
    name: state.signUp.animal.name, 
    description: state.signUp.animal.description,
    sex: state.signUp.animal.sex,
    size: state.signUp.animal.size,
    breed: state.signUp.animal.breed,
    agee: state.signUp.animal.age,
    img: state.signUp.data.img,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldUser: (inputValue, inputName) => {
    dispatch(changeFieldValueUser(inputValue, inputName));
  },
  changeFieldAnimal: (inputValue, inputName) => {
    dispatch(changeFieldValueAnimal(inputValue, inputName));
  },
  handleSignUp: () => {
    dispatch(handleSignUp());
  },
  changeFieldSelect: (selectFieldValue, selectFieldName) => {
    dispatch(changeFieldSelect(selectFieldValue, selectFieldName));
  },
  changeIsFlipped: (selectFieldValue, selectFieldName) => {
    dispatch(changeIsFlipped(selectFieldValue, selectFieldName));
  },
  changeCheckTos: () => {
    dispatch(changeCheckTos());
  },
  createUser: () => {
    dispatch(createUser());
  },
  createAnimal: () => {
    dispatch(createAnimal());
  },
  fetchSendAvatar: () => {
    dispatch(fetchSendAvatar());
  },
  changeAvatarAnimal: (inputValue, inputName) => {
    dispatch(changeAvatarAnimal(inputValue, inputName));
  },
  displayErrorTos: () => {
    dispatch(displayErrorTos());
  },
});



// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
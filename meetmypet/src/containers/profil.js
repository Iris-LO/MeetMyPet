import { connect } from 'react-redux';
import Profil from '../Components/Profil';
import {
  changeFieldValueUser,
  changeFieldSelect,
  changeFieldValueAnimal,
  updateInfoUser,
  updateInfoAnimal,
  fetchDataProfilUser,
  fetchDataProfilAnimal,
  deleteUser,
} from '../actions/profil';
const mapStateToProps = (state) => ({
    first_name: state.profil.user.first_name,
    email: state.profil.user.email,
    password: state.profil.user.password,
    city: state.profil.user.city,
    adress: state.profil.user.address,
    name: state.profil.animal.name,
    description: state.profil.animal.description,
    sex: state.profil.animal.sex,
    size: state.profil.animal.size,
    breed: state.profil.animal.breed,
    agee: state.profil.animal.age,
    isFlipped: state.signUp.isFlipped,
    sucess: state.profil.sucess,
    userId: state.loginModal.user_id,
    animalImage: state.loginModal.image,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValueUser: (inputValue, inputName) => {
    dispatch(changeFieldValueUser(inputValue, inputName));
  },
  changeFieldSelect: (inputValue, inputName) => {
    dispatch(changeFieldSelect(inputValue, inputName));
  },
  changeFieldAnimal: (inputValue, inputName) => {
    dispatch(changeFieldValueAnimal(inputValue, inputName));
  },
  updateInfoUser: () => {
    dispatch(updateInfoUser());
  },
  updateInfoAnimal: () => {
    dispatch(updateInfoAnimal());
  },
  fetchDataProfilUser: () => {
    dispatch(fetchDataProfilUser());
  },
  fetchDataProfilAnimal: () => {
    dispatch(fetchDataProfilAnimal());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  }
});

// Container
const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

// == Export
export default ProfilContainer;
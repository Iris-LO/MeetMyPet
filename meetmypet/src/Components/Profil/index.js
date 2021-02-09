import React, { useEffect, useRef, useState } from 'react';
import { baseURL } from '../../config';
import axios from 'axios';
import Field from '../SignUp/SignUpField';
import ReactCardFlip from 'react-card-flip';
import SelectField from '../SignUp/SignUpField/selectField';
import TextAreaField from '../SignUp/SignUpField/textArea';
import InputFile from '../SignUp/SignUpField/inputFile';
import PropTypes from 'prop-types';
// Import Components

// Import CSS
import '../SignUp/signUp.scss';
import { sexe, taille, age } from '../../dataSelect';
import TabBreeds from '../../dataSelect';

const Profil= ({
    first_name,
    email,
    password,
    adress,
    city,
    changeFieldValueUser,
    name,
    description,
    breed,
    size,
    sex,
    agee,
    changeFieldSelect,
    changeFieldAnimal,
    updateInfoUser,
    updateInfoAnimal,
    fetchDataProfilUser,
    fetchDataProfilAnimal,
    isFlipped,
    sucess,
    userId,
    animalImage
  }) => {
    useEffect(() => {
      fetchDataProfilUser()
      // if (isFlipped) {
        fetchDataProfilAnimal()
      // }
     }, [])

 const UpdateInfoUser = (e) => {
   e.preventDefault()
  updateInfoUser();
 }

 const UpdateInfoAnimal = (e) => {
  e.preventDefault()
  updateInfoAnimal();
 }

const deleteUser = () => (
    window.confirm("Si vous supprimez votre compte, vos données seront totalement perdues") ? 
    axios.delete(`${baseURL}/delete_account/${userId}`, { withCredentials: true }).then(() => {
      alert("Votre compte a été supprimé")})
      .catch((error) => {
          console.error(error);
        })
        : null 
  );


  const inputName = useRef(null);
// Focus sur l'input "Prénom" à la création du composant Field
  useEffect(() => {
    inputName.current.focus()
  }, [inputName])

  return (
    <div className="signUp">
    <div className="fullCard">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.8} flipSpeedFrontToBack={0.8} infinite={true} >
      <div className="signUp-card front">
      <h2 className="signUp-title">Profil</h2>
        <form action="" className="signUp-card-form" onSubmit={UpdateInfoUser} autocomplete="on">

          <Field
            inputName={inputName}
            name="first_name"
            placeholder="Votre prénom"
            onChange={changeFieldValueUser}
            value={first_name}
            type="text"
          />
          <Field
            name="email"
            placeholder="Adresse Email"
            type="email"
            onChange={changeFieldValueUser}
            value={email}
            disabled
          />
          <Field
            name="password"
            placeholder="Mot de passe"
            type="password"
            onChange={changeFieldValueUser}
            value={password}
          />
          <Field
            name="address"
            placeholder="Adresse"
            onChange={changeFieldValueUser}
            value={adress}
          />
          <Field
            name="city"
            placeholder="Ville"
            onChange={changeFieldValueUser}
            value={city}
          />

          <div className="signUp-card-form-btn">
          <button
            type="submit"
            className="signUp-card-form-btn-submit"
          >
            Valider les modifications
          </button>

          </div>
          <button
            onClick={deleteUser}
            className="signUp-card-form-btn-submit"
          >
            Je souhaite supprimer mon compte
          </button>
        </form>
 
      </div>


      <div className="signUp-card animal back">
        <form action="" className="signUp-card-form" onSubmit={UpdateInfoAnimal} autocomplete="on">
        <p className="signUp-card-sucess">{sucess}</p>
        <p>Prénom de mon maître : {first_name}</p>
        <img className="profil-image" src={`http://ec2-52-86-71-5.compute-1.amazonaws.com:3001/${animalImage}`} alt=""/>
        <InputFile
              name="name"
              placeholder="Photo de profil"
              type="file"
              onChange={changeFieldValueUser}
              value={name}
            />
            
        <Field
            name="name"
            placeholder="Nom de l'animal"
            onChange={changeFieldAnimal}
            value={name}
            
          />

          <SelectField
            name="breed"
            placeholder="Choisir la race"
            options={TabBreeds}
            onChange={changeFieldSelect}
            value={breed}
          />

          <SelectField
            name="sex"
            placeholder="Sexe"
            options={sexe}
            onChange={changeFieldSelect}
            value={sex}
          />

          <SelectField
            name="age"
            placeholder="Age"
            options={age}
            onChange={changeFieldSelect}
            value={agee}
          />

          <SelectField
            name="size"
            placeholder="Taille"
            options={taille}
            onChange={changeFieldSelect}
            value={size}
          />

          <TextAreaField
            name="description"
            placeholder='Description'
            onChange={changeFieldAnimal}
            value={description}
          />

          <div className="signUp-card-form-btn">
          {/* <button
            className="signUp-card-form-btn-submit"
            onClick={handleClick}
          >
            Revenir à l'étape précédente
          </button> */}
          <button
            type="submit"
            className="signUp-card-form-btn-submit"
          >
            Valider les modifications
          </button>
          </div>
        </form>
      </div>
      </ReactCardFlip>
      </div>
    </div>
  );
}

Profil.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  nameAnimal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  agee: PropTypes.number.isRequired,
  changeFieldSelect: PropTypes.func.isRequired,
  isFlipped: PropTypes.func.isRequired,
  changeIsFlipped: PropTypes.func.isRequired,
  tosChek: PropTypes.bool.isRequired,
  changeCheckTos: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default Profil;

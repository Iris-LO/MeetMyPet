import React, { useEffect, useRef } from 'react';
import { Checkbox } from 'semantic-ui-react'
import Field from './SignUpField';
import { useHistory } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import SelectField from './SignUpField/selectField';
import TextAreaField from './SignUpField/textArea';
import InputFile from './SignUpField/inputFile';
import PropTypes from 'prop-types';
// Import Components

// Import CSS
import './signUp.scss';
import { sexe, taille, age } from '../../dataSelect';
import TabBreeds from '../../dataSelect';


const SignUp= ({
  first_name,
    email,
    password,
    address,
    city,
    changeFieldUser,
    name,
    description,
    breed,
    size,
    sex,
    agee,
    changeFieldSelect,
    isFlipped,
    changeIsFlipped,
    tosChek,
    changeCheckTos,
    createUser,
    changeFieldAnimal,
    createAnimal,
    img,
    error,
    fetchSendAvatar,
    changeAvatarAnimal,
    displayErrorTos
  }) => {
    const history = useHistory()
    console.log('AVATAR !!',img)
  const inputName = useRef(null);
// Focus sur l'input "Prénom" à la création du composant Field
  useEffect(() => {
    inputName.current.focus()
  }, [inputName])

// Fonction pour retourner à l'étape précédente
  const handleClick = (e) => {
      changeIsFlipped();
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    // Je test si le user à bien accepté les CGU, si OUI => Je tourne la carte
    if (tosChek) {
      // Fonction pour retourner la carte au click
      createUser();
    } else {
      displayErrorTos()
    }
  }

  const handleCreateAnimal = (e) => {
    e.preventDefault();
    createAnimal();
    setTimeout(() => {
      fetchSendAvatar()
      history.push('/')
      }, 1000);
      
  }

  const checkTosCheckOrNot = () => {
    // Fonction va changer le state, si le user accepte les CGU je vais passer la valeur à true
    changeCheckTos();
  }

  return (
    <div className="signUp">
    <div className="fullCard">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.8} flipSpeedFrontToBack={0.8} infinite={true} >
      <div className="signUp-card front">
      <h2 className="signUp-title">Inscription</h2>
        <form action="" className="signUp-card-form" onSubmit={handleCreateUser} autocomplete="on">
        {/* Si je récupère une erreur dans la requête axios SignUp => Je vais l'afficher ici pour informer le user */}
          <p className="signUp-card-form-error">{error}</p>
          <Field
            inputName={inputName}
            name="first_name"
            placeholder="Votre prénom"
            onChange={changeFieldUser}
            value={first_name}
            type="text"
          />
          
          <Field
            name="email"
            placeholder="Adresse Email"
            type="email"
            onChange={changeFieldUser}
            value={email}
          />
          <Field
            name="password"
            placeholder="Mot de passe"
            type="password"
            onChange={changeFieldUser}
            value={password}
            message="Le password doit comporter au moins un cara...."
            pattern
          />
          <Field
            name="address"
            placeholder="Adresse"
            onChange={changeFieldUser}
            value={address}
          />
          <Field
            name="city"
            placeholder="Ville"
            onChange={changeFieldUser}
            value={city}
          />

          <Checkbox label="Accepter les conditions générales d'utilisation" onClick={checkTosCheckOrNot}
          className="signUp-card-form-content"
          />
          <div className="signUp-card-form-btn">
          <button
            type="submit"
            className="signUp-card-form-btn-submit"
          >
            Prochaine étape 1/2
          </button>
          </div>
        </form>
      </div>

      <div className="signUp-card animal back">
        <form action="" className="signUp-card-form" onSubmit={handleCreateAnimal} autocomplete="on">
        <p>Prénom de mon maître : {first_name}</p>

        <InputFile
              name="img"
              placeholder="Photo de profil"
              type="file"
              onChange={changeAvatarAnimal}
              value={img}
            />
            {/* <button onClick={sendAvatar}>X</button> */}
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
          <button href="/"
            type="submit"
            className="signUp-card-form-btn-submit"
          >
            Valider l'inscription
          </button>
          </div>
        </form>
      </div>
      </ReactCardFlip>
      </div>
    </div>
  );
}

SignUp.propTypes = {
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

export default SignUp;
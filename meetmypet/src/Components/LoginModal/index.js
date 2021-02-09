import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react';
import LoginModalField from './LoginModalField';
import './loginModal.scss'

const LoginModal = ({
  email, // Value du champ email
  password, // Value du champ password
  changeField, // Fonction qui met à jour le champ avec 2 params value et name du champ
  handleLogin, // Fonction à la soumission du formulaire sans param
  handleLogout, // Fonction permettant de se déconnecter sans param
  isLogged, // Booléen qui représente l'état de connexion
  loggedMessage, // Un message qui va s'afficher quand on est connecté
  show,
  openModal,
  error
}) => {

    const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    };
    return (

    <Modal
        onClose={openModal}
        onOpen={openModal}
        open={show}
        // trigger={<a className="footer-tableNavBar-text">Se connecter</a>}
        size='small'
        className="Modal-div"
        >
        
        <p className="loginModal-title">Connexion </p>
        <p className="loginModal-error">{error}</p>

        <Form  className="LoginForm" onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        
            <LoginModalField 
            className="input-form" 
            id="email" 
            name="email" 
            type="email"
            placeholder='Adresse email'
            onChange={changeField}
            value={email} />

            <LoginModalField 
            id="password" 
            name="password" 
            placeholder='Mot de passe' 
            onChange={changeField}
            value={password}
            type="password"
            />
            <Link to="">
            <p className="forgotPassword"> J'ai oublié mon mot de passe </p>
            </Link>

            <Button 
            type='submit' 
            className="btn-connexion"
            >
            Me connecter 
            </Button>

        </Form>
        <Modal.Actions className="actionModalContainer">
            <Link
            color='red' 
            to="/inscription" 
            className="btn-signUp"
            onClick={ openModal }>
                Je n'ai pas de compte !
            </Link>
            <Button 
            color='black' 
            onClick={openModal}>
                Annuler
            </Button>
        </Modal.Actions>
    </Modal>
    )
};
LoginModal.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    isLogged: PropTypes.bool,
    loggedMessage: PropTypes.string,
};


export default LoginModal;
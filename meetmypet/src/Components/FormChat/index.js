import React , { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './formChat.scss';


const FormChat = ({
    sendMessage,
    changeMessage,
    inputValue,
    addMessage,
    messages,
    author,
    postmessage,
    avatar,
    fetchGroupPage
    }) => {

// const {message, author} = inputValue;
    //Au clic j'empeche la soummission du formulaire
const handleSubmit = (event) => {
    event.preventDefault();
    postmessage(inputValue)
    addMessage(inputValue, author, avatar);
}
//Je verifie le changement d'état de l'event target value en me servant de la fonction que j'ai dispatch dans mon container

const handleChangeInput = (event) => {
    changeMessage(event.target.value);
    
}  
    const maRef = useRef(null);

    useEffect(() => {
    maRef.current.focus();
    }, []);

    return(
    <form className="formMessage" onSubmit={handleSubmit}>
    <input
        ref={maRef}
        className="formMessage-input form-mobile"
        placeholder="Votre message"
        onChange={handleChangeInput}
        value={inputValue}
    />
    <button
    type="submit"
    className="formMessage-submit form-submit"
    > 
    <Icon name='send' size='large' color="teal"/>
    </button>
    </form>
    )
}
FormChat.propTypes = {
sendMessage: PropTypes.func.isRequired,
changeMessage: PropTypes.func.isRequired,
};

export default FormChat;
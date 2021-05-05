// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './message.scss';

// == Import
// == Composant

// classNames est une fonction permettant de concatainer des classes avec une logique
// Ici on met dans tout les cas la classe "message"
// Et si owner vaut true, on mettre la classe en key
// A savoir "message--owner"
// Si c'est l'owner on aura "message message--owner" sinon juste "message"
const Message = ({ name, content, owner, image,send_at }) => {
  return(
        <div className={classNames('message', { 'message--owner': owner })}>
        <div className="message-img">
            <img src={`http://ec2-54-197-74-229.compute-1.amazonaws.com:3001/${image}`} alt="auteur" className="message-author-img"/>
            <div className="message-author">{name}</div>
        </div>
        <div className="message-content">{content}</div>
        <div className="sendAt" >{send_at}</div>
    </div>
)};

Message.defaultProps = {
    owner: false,
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    owner: PropTypes.bool,
};

// == Export
export default Message;

import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Message from './Message';


const Messages = ({ messages }) => {
  const messagesDivRef = useRef(null);

  useEffect(() => {
      messagesDivRef.current.scrollTo(0, messagesDivRef.current.scrollHeight);
  }, [messages]);
/* key={`message-${message.id}`} */
  return (
    <div className="messages" ref={messagesDivRef}>
    {messages && (
      messages.map((message) => (
        <Message key={message.id} {...message} />
        
      ))
    )}

    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Messages;
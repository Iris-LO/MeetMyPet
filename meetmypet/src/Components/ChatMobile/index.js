import React, { useEffect, useRef }  from 'react';
// Import Components

import FormChat from '../../containers/formChat';
import Messages from '../../containers/Messages';

// Import CSS
import './chatMobile.scss';


const ChatMobile = ({
messages
}) => {



return (

    <div className="chat-mobile-part">
        <Messages />
        <FormChat />
    </div>

    
);
}

export default ChatMobile;

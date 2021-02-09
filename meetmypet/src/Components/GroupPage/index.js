import React, { useEffect, useState }  from 'react';
import { useParams, Link} from 'react-router-dom';
// Import Components
import Map from '../../containers/map';
import FormChat from '../../containers/formChat';
import Messages from '../../containers/Messages';
import { Icon } from 'semantic-ui-react'
// Import CSS
import './grouppage.scss';


const GroupPage = ({
markers, latitude, longitude, position, groupID, fetchGroupPage, name, city, description, nbMembers, messages, hasNewMessage
}) => {
const {id} = useParams();

  useEffect(() => {
    // Je lance une action pour aller chercher les infos d'un groupe avec l'ID récupérer plus haut avec useParams
    fetchGroupPage(id);
  }, []);

  useEffect(() => {
    // Je lance une action pour aller chercher les infos d'un groupe avec l'ID récupérer plus haut avec useParams
    // fetchMessages(id);
  }, []);


  return (
    <div className="groupPage">
      <div className="infos-grp">
          <h1 className="infos-grp-title">{name}</h1>
          <p className="infos-grp-ville">{city}</p>
          <Link to="/chatResponsive" className="iconChatResponsive">
            <p>Acceder à la messagerie du groupe </p>
            <Icon  name="rocketchat" size="huge"/>
          </Link>
          
          {/* <p className="infos-grp-ville">{city}</p> */}
          <p className="memberNumber">{nbMembers} inscrits</p>
          {/* <p className="memberNumber">{group.numberOfMember}</p> */}

          <div className="map">
            <Map latitudeChat={latitude} longitudeChat={longitude}/>
          </div>
          <div>
          <p className="info-grp-description">{description}</p>
          {/* </div><p className="info-grp-description">{group.description}</p> */}
          </div>
      </div>
      <div className="chat-part">
        <Messages />
        <FormChat />
      </div>
    </div>
  );
}

export default GroupPage;

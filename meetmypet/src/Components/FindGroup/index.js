import React, {useEffect, useState} from 'react';
import GroupCards from '../GroupCards'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// Import Components

// Import CSS
import './findGroup.scss';

const FindGroup = ({
  name,
  changeField,
  fetchDataGroup,
  groups,
  clearField,
  joinGroup,
  groupJoined,
  setCurrentGroup,
  currentGroup,
  myGroups
}) => {
  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici je vais pouvoir faire un fetch en GET pour aller chercher les groupes avec la valeur du champ NAME !
    fetchDataGroup()
    // Maintenant je vais vider le champ
    clearField(event.target.value, "name")
  }

  const handleJoinGroup = (e, group_id) => {
    e.preventDefault();
    // Ici je vais rentrer dans le state le group_id pour m'en server pour la redirection !
    setCurrentGroup(group_id)
    // Au clic sur rejoindre un group dans groupCard, je lance une action pour que l'animal intègre le groupe.
    joinGroup(group_id);


  }
  // Je test si groupJoined est true si OUI => Je redirige le user vers la page du groupe rejoins juste avant
  // if (groupJoined) {
  //   history.push(`/groupe/${currentGroup}`)
  // }


  return (
    <div className="find-group">
      <form className="find-group-form" onSubmit={handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={((event) => changeField(event.target.value, "name"))}
          type="text"
          placeholder="Trouver un groupe"
          className="find-group-form-input"
        />
        <button type="submit" className="find-group-form-btn">Rechercher</button>
      </form>
      <div className="find-group-cards">
        <GroupCards dataFindGroup={groups} joinGroup={handleJoinGroup} myGroups={myGroups} />
      </div>
    </div>
  );
}

FindGroup.propTypes = {
  name: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};



export default FindGroup;

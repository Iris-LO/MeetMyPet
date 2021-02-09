import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GroupCard from './GroupCard'
// Import Components

// Import CSS
import './groupcards.scss';


const GroupCards = ({ dataFindGroup, joinGroup, dataMyGroups, myGroups }) => {

  return (
    <div className="group-cards">
      {dataFindGroup && (
        dataFindGroup.map((groupe) => (
        // Sachant que j'utilise GroupCard dans 2 composants (FindGroup && MyGroup) j'envoie en OwnProps la valeur du text pour le button
        <GroupCard key={groupe.id} {...groupe} nameButton="Rejoindre le groupe" joinGroup={joinGroup} />
      ))
      )}
    </div>
  );
}

GroupCards.propTypes = {
  dataFindGroup: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired
  ).isRequired
}

export default GroupCards;
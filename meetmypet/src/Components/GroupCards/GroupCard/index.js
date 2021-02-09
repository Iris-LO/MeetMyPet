import React from 'react';
import PropTypes from 'prop-types';
// Import Components

// Import CSS



const GroupCard = ({ lastActivity, name, description, city, numbers, nameButton, joinGroup, id }) => {
  return (
    <div className="group-card">
    {/* Au click sur le bouton je soumets le formulaire avec event et l'id */}
      <form action="" className="group-card-form" onSubmit={((e) => joinGroup(e, id))}>
        <div className="group-card-activity">Dernière activité : 05/11/2020</div>
        <div className="group-card-name">{name}</div>
        <div className="group-card-description">{description}</div>
        <div className="group-card-info">
          <div className="group-card-info-city">{city},</div>
          <div className="group-card-info-number"> Nombre de membres : 5</div>
        </div>
        <button className="group-card-btn" >{nameButton}</button>
      </form>
    </div>
  );
}

GroupCard.propTypes = {
  lastActivity: PropTypes.string.isRequired,
  nameGroup: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  numbers: PropTypes.string.isRequired,
};

export default GroupCard;
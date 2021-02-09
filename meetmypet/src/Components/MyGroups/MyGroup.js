import React from 'react';
import { Link } from 'react-router-dom';
// Import Components

// Import CSS


const MyGroup = ({lastActivity, name, description, city, numbers, nameButton, joinGroup, id, totalMembers}) => {
  return (
    <div className="group-card">
    {/* Au click sur le bouton je soumets le formulaire avec event et l'id */}
      <form action="" className="group-card-form" onSubmit={((e) => joinGroup(e, id))}>
        <div className="group-card-activity">Dernière activité : Il y a 20 heures</div>
        {/* <div className="group-card-activity">Dernière activité : {lastActivity}</div> */}
        <div className="group-card-name">{name}</div>
        <div className="group-card-description">{description}</div>
        <div className="group-card-info">
          <div className="group-card-info-city">{city},</div>
          <div className="group-card-info-number"> Nombre de membres : {totalMembers.total_members}</div>
        </div>
        <Link className="group-card-btn"
              to={`/groupe/${id}`}
        >
        {nameButton}
        </Link>
      </form>
    </div>
  );
}

export default MyGroup;

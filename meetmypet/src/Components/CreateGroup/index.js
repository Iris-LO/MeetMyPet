import React from 'react';
import Map from '../../containers/map';
import FielCreateGroup from './FieldCreateGroup';
import TextArea from './FieldCreateGroup/textArea';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// Import Components

// Import CSS
import './createGroup.scss';

const CreateGroup= ({
  name,
  description,
  changeField,
  setLatLng,
  changeZoom,
  zoom,
  createGroup,
  clearField,
  groupCreated
}) => {
  const history = useHistory()

  const addMarker = (e) => {
    // Ici je viens mettre à jour les données dans le state de CreateGroup (lat et lng)
    setLatLng(e.latlng.lat, e.latlng.lng)
  }

  const getZoom = (e) => {
    // Ici on appelle changeZoom() pour aller changer le zoom dans le state
    changeZoom(e.target._animateToZoom)
  }

  const handleCreateGroup = (e) => {
    e.preventDefault();
    createGroup();
    // Je vide les champs après le submit
    clearField(e.target.value, "name");
    clearField(e.target.value, "description");
    // // Si la création du groupe c'est bien passé => Je redirige le user vers ses groupes
    setTimeout(() => {
      history.push('/')
      }, 1000);
  }

  return (
    <div className="create-group">
      <div className="create-group-title">Choisissez le lieu de création de votre groupe, en zoomant et cliquant sur la carte</div>
      <form action="" className="create-group-form" onSubmit={handleCreateGroup}>
        
      <div className="create-group-map">
      {/* Ici je passe la fonction addMarker qui va mettre les données à jours, donc cette fonction est accessible que dans createGroup ! */}
        <Map
          handleOnClick={addMarker}
          name={name}
          description={description}
          getZoom={getZoom}
          valueZoom={zoom}
        />
      </div>
      
      <FielCreateGroup
            name="name"
            label="Nom du groupe"
            placeholder="Nom du groupe"
            type="text"
            onChange={changeField}
            value={name}
        />
        <TextArea
            name="description"
            label="Description"
            placeholder="Description"
            type="text"
            onChange={changeField}
            value={description}
        />
        <button type="submit" className="create-group-btn">Créer le groupe</button>
      </form>
    </div>
  );
}

CreateGroup.propTypes = {
  name: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  changeFieldSelect: PropTypes.func.isRequired,
  setLatin: PropTypes.func.isRequired,
};

export default CreateGroup;
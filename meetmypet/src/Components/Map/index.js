import React, { useRef, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';
import LCG from 'leaflet-control-geocoder';
import { geosearch } from 'esri-leaflet-geocoder';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import {Link } from 'react-router-dom';


import './map.scss';

// Tableau pour définir l'icon sur la page Home,
const pointerIcon = new L.Icon({
  iconUrl: 'image/Icon.png',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 40],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})

function MapLeaf({
  handleOnClick,
  setLatLng,
  name,
  description,
  markers,
  getZoom,
  valueZoom,
  city,
  country,
  adress,
  updateValueCountry,
  updateValueCity,
  updateValueAdress,
  latitude,
  longitude,
  isLogged,
  openModal,
  groups,
  joinGroup,
  latitudeChat,
  longitudeChat
  }) {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(13);
  const [findGroup, setFindGroup] = useState(null);
  useEffect(() => {

  })

  useEffect(() => {
    // Ici je viens récuperer les coordonnées GPS du user et je vais les stocker dans le state
    navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatLng(position.coords.latitude, position.coords.longitude)
        },
        function (error) {
          console.log(error)
        },
        {
              enableHighAccuracy: true
        }
    )
  const { current = {} } = mapRef;
  const {leafletElement: map} = current
  // La variable control représente la searchBar sur la map, je lui passe un objet de configuration
  const control = geosearch({
    useMapBounds: false,
    placeholder: "Rechercher des lieux ou des adresses",
    title: 'Rechercher un emplacement',
    position: 'bottomright',
    expanded: true,
  });
  // Ici j'ajoute control à la map
  control.addTo(map)
  if (getZoom) {
    // Ajout d'un écouteur d'évenement, ici on écoute la fin du zoom de l'utilisateur et appel de la fonction getZoom disponible depuis CreateGroup
    map.on('zoomend', (e) => {
      getZoom(e);
    })
  }
  // Ici j'écoute à la soumission de la recherche et quand j'obtiens les résultats je vais mettre à jour le state pour avoir le marker sur l'adresse recherchée
  control.on('results', (results) => {
    setLatLng(results.latlng.lat, results.latlng.lng)
  })
  // Ici j'écoute le click sur la map et je vais récupérer les données du lieux cliqué (City la plus proche, adress et country)
  const geocoder = L.Control.Geocoder.nominatim();
  map.on('click', e => {
    // Fonction pour trouver l'adresse par rapport aux coordonées
    geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), results => {
      updateValueCountry(results[0].properties.address.country);
      updateValueCity(results[0].properties.address.municipality)
      updateValueAdress(results[0].properties.address.road)
    })
  })
}, [setLatLng]);


  return <div id="map">
  {/* // Au clic sur la map je vais j'appelle la fonction onClick qui est dispo depuis CreateGroup */}
    <Map ref={mapRef} center={(latitudeChat) ? [latitudeChat, longitudeChat] :[latitude, longitude]} zoom={getZoom ? valueZoom : zoom} onClick={handleOnClick}>
      <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {/* Ici je test si getZoom est présent simplement pour que le bout de code suivant ne soit accessible que depuis CreateGroup */}
      {latitudeChat && (
        <Marker position={[latitudeChat, longitudeChat]}></Marker>
      )}
      {getZoom && (
        <Marker position={[latitude, longitude]}>
        <Popup>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{adress}</p>
          <p>Autour de : {city}</p>
          <p>{country}</p>
        </Popup>
      </Marker>
      )}
      {/* La je viens map pour afficher les markers sur la page home (fonction disponible depuis home et récupéré plus haut) */}
      {markers && (
        markers.map((map) => {
          const conditionalFunc = () => {

          if (groups) {
            setFindGroup(groups.find(group => group.id == map.id)) ;
          };  
        }
          return(
          <Marker position={[map.latitude, map.longitude]} key={map.id} icon={pointerIcon} 
          onClick={conditionalFunc}
          // onClick={ () => groups.forEach((element) => console.log("ELEMENT ID = MAP.ID", element.id === map.id , "GROUPS : ",element.id, "MAP.ID: ", map.id ))} 

          // onClick={() => groups.forEach((element) => element.id === map.id ?  <Link to=""> Voir la page du groupe </Link> :  <Link to=""> Rejoindre le groupe </Link>)}
          > 
          
        {isLogged && (
          <Popup>
          <h3>{map.name}</h3>
          <p>{map.description}</p>
          {
            findGroup && (
              <Link to={`/groupe/${map.id}`}> Voir la page du groupe</Link>
            )
          }
          {
            !findGroup && (
              <Link onClick={() => joinGroup( map.id)}> Rejoindre le groupe</Link>
              
            )
          }
          </Popup>
        )}
        {!isLogged && (
          <Popup>
          <h3>{map.name}</h3>
          <p>{map.description}</p>
          {
            findGroup && (
              <Link > Voir la page du groupe</Link>
            )
          }
          {
            !findGroup && (
              <Link onClick={openModal}> Rejoindre le groupe</Link>
            )
          }
          </Popup>
        )}
        
        
          
          </Marker>

        
          
        )})
      )}
    </Map>
  </div>
  
}

MapLeaf.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  adress: PropTypes.string,
  country: PropTypes.string,
  updateValueCountry: PropTypes.func.isRequired,
  updateValueCity: PropTypes.func.isRequired,
  mapMarkers: PropTypes.func.isRequired,
  getZoom: PropTypes.func,
  valueZoom: PropTypes.number,
  handleOnClick: PropTypes.func,
  setLatLng: PropTypes.func.isRequired,
  updateValueAdress: PropTypes.func.isRequired,
  //position: PropTypes.func.isRequired, Position est un tableau => A VOIR !
};

export default MapLeaf;
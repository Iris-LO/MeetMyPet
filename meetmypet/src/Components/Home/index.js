import React, { useEffect } from 'react';
import Map from '../../containers/map';
import HomeContent from '../HomeContent';
import SliderPart from '../../containers/sliderPart';

//Import Components

// Import Css
import './home.scss';

const Home = ({ fetchDataDog, lastDogs, groups, checkIsLogged }) => {
    console.log('LastDog',lastDogs)
    useEffect(() => {
        fetchDataDog()
    }, [])

    useEffect(() => {
        checkIsLogged();
    }, [])
    
    const mapMarkers = () => {
        return '';
    }

    return(
        <div className="home">
        <div className="home-map">
        {/* Ici j'envoie a map une fonction bidon pour pouvoir tester dans map et ajouter les markers en conséquence (A REVOIR ! Pas très propre..) */}
        <Map mapMarkers={mapMarkers}/>
        </div>
        <SliderPart lastDogs = {lastDogs}/>
        <HomeContent />
        </div>
    )
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

//Import Components

// Import Css
import './homeContent.scss';

const HomeContent = () => {
// CODER LA METHODE ISLOGGED & HANDLELOGOUT
    return(
        <div className="home-content">
            <div className="container">



                    <div className="home-content-container">
                        <h1 className="home-content-title_role">On inverse les rôles !</h1>
                        <p className="home-content-text_role">
                            <strong>Et si votre animal prenait les commandes ?</strong> Découvrez des points de rencontre où votre animal serait susceptible de faire des rencontres ! Discutez avec les membres du groupe que vous rejoignez.
                            Organisez des balades, des ateliers, des pique-niques avec les meilleures croquettes !
                        </p>
                    </div>
                <img src="/ContentHome1.jpeg" alt="Image d'accueil" className="home-content-img" />

                    <div className="home-content-container ">
                        <h1 className="home-content-title_role">Gardez le contact</h1>
                        <p className="home-content-text_role">
                            <strong>Ne sortez plus seuls </strong> <br/> Avec notre messagerie instantanée, restez en contact avec les copains et copines du quartier. Obligez votre maître ou maîtresse a sortir du canapé! 
                            Créez votre propre groupe pour animer votre quartier et rejoindre votre bande.
                        </p>
                    </div>


            </div>
                <div className="home-content-button">
                    <div className="home-content-signUp">
                        <Link to="/inscription" className="home-content-cta">Je m'inscris </Link>
                    </div>
                </div>
        </div>
    )
}

export default HomeContent;
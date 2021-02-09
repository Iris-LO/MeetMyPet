import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import LoginModal from '../LoginModal';


//Import Components

// Import Css
import './footer.scss';

const Footer = () => {
    return(
        <div className="footer">
        <div className="goToTheTop"></div>
                <div className="footer-content-mid">
                    <Link to="" className="RS">
                        <Icon circular name='facebook f' color='teal' size='large' inverted />
                    </Link>
                    <Link to="" className="RS">
                        <Icon circular name='instagram' color='teal' size='large' inverted/>
                    </Link>
                    <Link to="" className="RS">
                        <Icon circular name='twitter' color='teal' size='large' inverted/>
                    </Link>
                    <Link to="" className="RS">
                        <Icon circular name='linkedin' color='teal' size='large' inverted/>
                    </Link>
                </div>
            <div className="footer-tableNavBar">
                <Link to="/" className="footer-tableNavBar-text">Accueil</Link>
                <Link to="/inscription" className="footer-tableNavBar-text">Créer un compte</Link>
                <Link to="" className="footer-tableNavBar-text"><LoginModal /></Link>
                <Link to="/trouver-un-groupe" className="footer-tableNavBar-text">Trouver un groupe</Link>
                <Link to="/connexion" className="footer-tableNavBar-text">Se connecter</Link>

            </div>
            <div className="footer-content">
                <div className="footer-content-mid">
                    <Link to="" className="footer-adds footer-link">Confidentialité</Link>
                    <Link to="/CGU" className="footer-adds footer-link">CGU</Link>
                    <Link to="" className="footer-adds footer-link">Nous contacter</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
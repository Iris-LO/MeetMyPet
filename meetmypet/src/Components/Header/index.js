import React, {useEffect,useState } from 'react';
import PropTypes from 'prop-types';

import SideBar from '../../containers/sideBar';

//Import Components
import { Link , NavLink } from 'react-router-dom';
import LoginModal from '../../containers/loginModal';
import HowWork from '../HowWork';


// Import Css
import './header.scss';



const Header = ({isLogged, handleLogout, visible, openModal, animalName}) => {
const [open, setOpen] = useState(false);


    useEffect(() => {

    }, [])


    return(
        <div className="navigation">
            <div className="navigation-logo">
            <Link to="/">
                <img src="../image/logoWithMask.png" alt="Logo du site" className="navigation-logo-img"/>
            </Link>
            </div>
            <div className="navigation-brandTitle">MeetMyPet</div>
            <div className="navigation-navBar-destop">
                
                {isLogged && (
                    <nav>
                    <NavLink to="/mes-groupes" className="navBar-destop-items" activeClassName="">
                        Mes groupes
                    </NavLink>
                    <NavLink to="/trouver-un-groupe" className="navBar-destop-items" activeClassName="">
                        Trouver des groupes
                    </NavLink>
                    <NavLink to="/creer-un-groupe" className="navBar-destop-items " activeClassName="">
                        Je veux créer un groupe 
                    </NavLink>
                    <NavLink to="/profil" className="navBar-destop-items " activeClassName="">
                        Profil de {animalName}
                    </NavLink>
                    <NavLink to="/" className="navBar-destop-items " activeClassName="" onClick={handleLogout}>
                        Déconnexion
                    </NavLink>
                    </nav>
                )}
                {!isLogged && (
                <nav>
                    <HowWork />
                    <NavLink to="/trouver-un-groupe" className="navBar-destop-items" activeClassName="">
                        Trouver des groupes
                    </NavLink>
                    <NavLink to="/inscription" className="navBar-destop-items" activeClassName="">
                        S'inscrire
                    </NavLink>
                    <NavLink to="/" className="navBar-destop-items " activeClassName="" onClick={openModal}>
                        Se connecter
                    </NavLink>
                </nav>
                )}
                    
                
            </div>
            <LoginModal />
            <div className="navigation-navBar-mobile" onClick={() => setOpen(!open)} open={open}>
                <svg viewBox="0 0 100 80" width="40" height="30" >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
                {open && <SideBar /> }
            </div>
        </div>
    )
};

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
}
Header.defaultProps = {
    isLogged : false,
}

export default Header;
import React from "react";
import LoginModal from '../../containers/loginModal';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
    
} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import './sideBar.scss';

const SideBar = ({openModal,handleLogout, isLogged, animalImage}) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <Grid columns={1}>


        <Grid.Column>

            <Sidebar
                as={Menu}
                animation="overlay"
                inverted
                vertical
                visible={!visible}
                size="small"
            >
            {isLogged && (
                <>
                <Menu.Item as="a">
                <Icon name="search" size="big" />
                <Link to="/trouver-un-groupe" className="navBar-item">
                Trouver un groupe
                </Link>
                </Menu.Item>
                
                <Menu.Item as="a">
                <Icon name="add circle" size="big" />
                <Link to="/creer-un-groupe" className="navBar-item">
                Je veux créer un groupe
                </Link>
                </Menu.Item>

                <Menu.Item as="a">
                <Icon name="group" size="big"/>
                <Link to="/mes-groupes" className="navBar-item">
                Mes groupes
                </Link>
                </Menu.Item>
                
                

                <Menu.Item as="a">
                <Icon name="paw" size="big"/>
                <Link to="/profil" className="navBar-item">
                Mon profil
                </Link>
                </Menu.Item>

                <Menu.Item as="a">
                <Icon name="settings" size="big"/>
                <Link to="/deconnexion" className="navBar-item">
                Paramètres du compte
                </Link>
                </Menu.Item>

                <Menu.Item as="a">
                <Icon name="sign-out" size="big"/>
                <Link to="/" className="navBar-item" onClick={handleLogout}>
                Déconnexion
                </Link>
                </Menu.Item>

                <Menu.Item as="a">
                <Link to="/profil" className="navBar-item" >
                <img className="sideBar-animalImage" src={`http://ec2-54-197-74-229.compute-1.amazonaws.com:3001/${animalImage}`} alt=""/>
                </Link>
                </Menu.Item>
                </>
            )}
            {!isLogged && (
                <>
                <Menu.Item as="a">
                <Icon name="signup" size="big"/>
                <Link to="/inscription" className="navBar-item">
                S'inscrire
                </Link>
                </Menu.Item>

                <Menu.Item as="a" >
                <Icon name="sign-in" size="big" />
                <Link to="/" className="navBar-item" onClick={openModal}>
                Se connecter
                </Link>
                </Menu.Item>

                <Menu.Item as="a">
                <Icon name="search" size="big" />
                <Link to="/trouver-un-groupe" className="navBar-item">
                Trouver un groupe
                </Link>
                </Menu.Item>
                </>
            )}
                

                
                
            </Sidebar>

        </Grid.Column>
        </Grid>
    );
};

export default SideBar;

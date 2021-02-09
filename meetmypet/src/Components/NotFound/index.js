import React from 'react';
import {Link} from 'react-router-dom'

import './notfound.scss';
const NotFound = () => (
    <div className="page404">
            <div className="page404-content">
                <p className="notFound-number">ERREUR 404</p>
                <p className="notFound-text">La page n'a pas été trouvée !</p>
                <div className="page404-content-link">
                    <Link
                        className="page404-content-link-item"
                        to={{
                            pathname: "/",
                        }}
                    >
                    Revenir sur la page d'accueil
                    </Link>
                </div>
            </div>

    </div>
);

export default NotFound;
import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
// Import Components
import Header from '../../containers/header';
import Footer from '../Footer';
import Home from '../../containers/home';
import CGU from '../CGU';
import MyGroups from '../../containers/myGroups';
import FindGroup from '../../containers/findGroup';
import CreateGroup from '../../containers/createGroup';
import SignUp from '../../containers/signUp';
import Profil from '../../containers/profil';
import GroupPage from '../../containers/groupPage';
import ChatMobile from '../ChatMobile';
import NotFound from '../NotFound';
import Spinner from '../Spinner';
import ScrollToTop from '../ScrollToTop';
import HowWork from '../HowWork';
// import SideBar from '../SideBar';
import { Switch, Route, Redirect } from 'react-router-dom';

// Import CSS
import './App.scss';


const App = ({checkIsLogged, loading, isLogged, getData }) => {
  useEffect(() => {
    // Je vérifie si je suis connecté ou pas
    checkIsLogged();
    getData();
  }, []);
let location = useLocation();
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      {loading && <Spinner />}
      {!loading && (
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cgu" component={CGU} />
          <Route path="/inscription" component={SignUp} />
          <Route path="/trouver-un-groupe" component={FindGroup} />
          
          {isLogged && (
            <>
            <Route path="/profil" component={Profil} />
            <Route path="/creer-un-groupe" component={CreateGroup} />
            <Route path="/mes-groupes" component={MyGroups} />
            <Route path="/groupe/:id" component={GroupPage} />
            {/* ROUTE A CREER POUR LE CHAT PARTIE MOBILE */}

        <Route path="/chatResponsive" component={ChatMobile} />
            
            </>
          )}
          <Route component={NotFound} />
          {!isLogged && (

            <Redirect to="/" />
          )}
          {/* For mobile :slug */}
          {/* <Route path="/chat/:slug" component={Chat} />  */}
          
        </Switch>
        
      )}
      { location.pathname !== "/chatResponsive" ? <Footer /> : null }
        
    </div>
  );
}

export default App;

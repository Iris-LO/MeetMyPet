/* eslint-disable max-len */
import { connect } from 'react-redux';

import Messages from '../Components/Messages';

// Ici on récupère les messages du state
// == Analogie
// Tu va dans les rayons tu prends dans un des rayons des pâtes de marques "messages" pour faire des messages carbo et tu les mets dans ton panier
const mapStateToProps = (state) => ({
    messages: state.chat.messages,
    avatar: state.loginModal.image,
});

// On défini les actions qu'on va vouloir faire plus tard dans le composant, ici aucune
// == Analogie
// Tu va voir le vendeur et tu lui regarde même pas la tête, tu te casse avec tes messages
const mapDispatchToProps = {};

// Ici connect est la fonction permettant de connecter le composant au store
// Il prends 2 arguments
// Le premier sert à récupérer des bouts de state et les passer en props
// Le second sert à récupérer la référence de la fonction dispatch du store afin de pouvoir créer des ordres customs à envoyer

// == Analogie
// Message il est gêné, il voudrait aller chercher ce qu'il a besoin pour faire sa petite popotte dans le magasin.
// Donc il faut l'encourage avec un discours "connect", ce discour il tient en 2 arguments
// Le premier c'est tu va dans les rayons du magasin et tu prends ce qu'il te faut
// Le deuxième c'est tu va parler au vendeur et tu lui donne des ordres
const MessagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Messages); // Ce discours d'encouragement s'applique au composant message

// Le composant étant chargé à bloc avec son discours d'encouragement, il peut donc prévoir d'aller tout seul au store, comme un grand et on sait maintenant qu'il aura des messages ( pour faire sa popotte )
export default MessagesContainer;

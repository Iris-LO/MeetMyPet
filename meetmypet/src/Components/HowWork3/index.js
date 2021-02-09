import React  from 'react';
import { Button,  Modal} from 'semantic-ui-react'
import './howwork3.scss';


const HowWork3 = () => {

    const [open, setOpen] = React.useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button primary>Dernière étape (3/3)</Button>}
        className="ui modal3"
        >

            <img size='large' src='/image/modal3.jpg' className="modal3-img" />

            <h1>Bon ben finalement, c'est plutôt simple !</h1>
            <h2 >
                Quelques idées pour vos prochaines intéractions 
            </h2>

                <p className="interaction">Utilisez la carte intéractive de la page d'accueil pour trouver des groupes proches de chez vous</p>
                <p className="interaction">Discutez grâce à la messagerie mise à disposition pour parler entre vous</p>
                <p className="interaction">N'hésitez surtout pas à pousser vos copains de balade à inscrire leurs maîtres ou maîtresses</p>


            <div className="buttons">
                <Button href="/" > Je retourne à l'accueil </Button>
                <Button href="/inscription" positive> Du coup, je m'inscris ! </Button>
            </div>
            
        </Modal>
        
    )
}    
export default HowWork3;

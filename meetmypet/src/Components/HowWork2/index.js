import React  from 'react'
import { Button, Icon, Modal, Image, Header } from 'semantic-ui-react'
import HowWork3 from '../HowWork3'
import './howwork2.scss';


const HowWork2 = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button primary>Prochaine étape (2/3)</Button>}
        >
        <Modal.Header>2ème étape !</Modal.Header>
        <Modal.Content image>

            <Image size='small' src='/image/Icon.png' className="modal2"/>

            
            <Modal.Description>
            <Header>En quelques clics, découvrez des groupes proches de vous </Header>
            <p>
                Grâce à notre outil de géolocalisation, découvrez et rejoignez les groupes de votre choix
            </p>

                <p >Faites une recherche par ville</p>
                <p >Créez des groupes pour amener de l'interaction dans votre quartier </p>
                <p >Echangez avec les membres des groupes que vous avez rejoint</p>

            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <HowWork3 />
        </Modal.Actions>
        </Modal>
    )
}   
export default HowWork2;

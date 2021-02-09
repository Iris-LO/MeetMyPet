# MeetMyPet
![image de chien](./meetmypet/public/image/modal1.jpg)

**L'application qui met en relation les animaux et leurs maîtres et maîtresses**

## Résumé du cahier des charges 

### Un besoin réel et des objectifs

Imaginons deux situations. 
<p> 
Dans la première, vous avez l'habitude de promener votre chien dans votre quartier, et vous rejoignez régulièrement d’autres propriétaires de chiens pour que le vôtre puisse jouer. Malheureusement, vous ne savez pas à quelle heure ses congénères sortent ni quand il va pouvoir jouer avec eux. Grâce à cette application, sur votre téléphone ou un autre support, vous pouvez envoyer un message aux personnes inscrites au sein du groupe, leur indiquant qu'ils pourront vous retrouver ainsi que votre chien s'ils le souhaitent. Vous pouvez rejoindre les groupes de votre choix, ou en créer un nouveau. 
</p>
<p>Deuxième cas possible, vous venez de déménager et vous ne connaissez pas d’endroit idéal pour une promenade. Vous aimeriez également que votre chien puisse rencontrer d’autres congénères et jouer. Et pourquoi pas, par la même occasion, en profiter pour rencontrer des personnes et prendre le temps de les connaître. Grâce à la carte intéractive de Meet My Pet vous pouvez visualiser les groupes autour de vous et les rejoindre en un clic.
</p>
<p>
Meet My Pet s’adresse à tous les propriétaires d’animaux, plus particulièrement aux propriétaires féminins entre 20 et 40 ans, en mettant l’échange et la convivialité au cœur de l’application.
</p>

## MVP - Fonctionnalités principales

- Formulaires d’inscription et de connexion
- Création du profil de l’animal ainsi que du compte utilisateur
- Création d’un groupe auquel chacun pourra accéder une fois connecté sur le site
- Accès au détail d’un groupe : 
  * Nom
  * Description 
  * Nombre de membres (dynamique)
  * Date de création
  * Messagerie asynchrone
  * Localisation
- Carte intéractive avec la géolocalisation et l’affichage des marqueurs de groupes autour de soi
- Affichage des informations d’un groupe en cliquant sur son marqueur
- Recherche d’une ville à partir du champ de recherche sur la carte ou bien via la page dédiée
- Possibilité de rejoindre un groupe ainsi que de le créer
- Accès à son compte ainsi qu’au profil animal  possible depuis toutes les pages du site avec possibilité de les modifier
- Modales de modification effectuée, de validation de création de compte, de création de groupe effectuée
- Possibilité de supprimer son compte ainsi que toutes les données rattachées en étant connecté


## Rôles utilisateurs de l'application 

- *Utilisateur non connecté*
  
Un visiteur a accès à la page d’accueil en tant qu’utilisateur non connecté. Il peut y voir les 8 derniers animaux inscrits ainsi qu’une carte interactive (géolocalisée s’il l’accepte) avec tous les marqueurs des groupes créés. Il a la possibilité de cliquer sur le marqueur de son choix pour voir les principales informations du groupe. Il peut être informé du fonctionnement de l’application en un clic dans le header, qui ouvrira une modale explicative en 3 étapes. Un visiteur a accès aux formulaires d’inscription ou de connexion pour avoir accès à toutes les fonctionnalités du site.

- *Utilisateur connecté*
  
Les fonctionnalités sont identiques à celles ci-dessus avec un header dynamique ainsi que les marqueurs de la carte : selon les groupes dont il est membre ou non, l’utilisateur connecté pourra aller sur la page du groupe ou bien le rejoindre.

## Technologies utilisées

Partie front (2 personnes) :
  * React.js
  * Redux
  * React Native
  * LeaFlet API localisation
  * SaSS
  * Axios

Partie back (2 personnes) :
* Node.js
* Express.js
* PostgreSQL
* Joi
* Redis
* Déploiement : AWS


Le projet est en ligne ici : http://ec2-100-26-211-150.compute-1.amazonaws.com:3000/

import React, { useEffect } from 'react';
import MyGroup from './MyGroup';
// Import Components

// Import CSS
import './myGroups.scss';


const MyGroups = ({fetchGroups, groups}) => {
  useEffect(() => {
    // Quand la route sera prête côté back je vais lancer le fetch
    fetchGroups()
  }, [])

  return (
    <div className="my-groups">
    {/* Mettre un message du style (Vous n'avez pas encore de groupe) */}
    {groups && (
      groups.map((group) => (
      <MyGroup nameButton="Aller sur la page du groupe" {...group} />
    ))
    )}
    </div>
  );
}

export default MyGroups;
